import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";

// Simple in-memory store for demo - replace with your database
const users: Array<{
  id: string;
  email: string;
  password: string;
  name: string;
  image?: string;
}> = [];

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = signInSchema.parse(credentials);
          const user = users.find((u) => u.email === email);

          if (!user) return null;

          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        // Auto-create user for Google OAuth
        const existingUser = users.find((u) => u.email === user.email);
        if (!existingUser) {
          users.push({
            id: user.id || Math.random().toString(36).substring(2),
            email: user.email!,
            password: "", // No password for OAuth users
            name: user.name!,
            // image: user.image,
          });
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/signup",
  },
  debug: process.env.NODE_ENV === "development",
});
