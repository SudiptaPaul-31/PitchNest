"use server";

import { signIn } from "auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

// Simple in-memory store for demo - replace with your database
const users: Array<{
  id: string;
  email: string;
  password: string;
  name: string;
}> = [];

export async function signup(data: {
  name: string;
  email: string;
  password: string;
}) {
  try {
    // Check if user already exists
    const existingUser = users.find((u) => u.email === data.email);
    if (existingUser) {
      return { error: "User with this email already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 12);

    // Create user
    const newUser = {
      id: Math.random().toString(36).substring(2),
      email: data.email,
      password: hashedPassword,
      name: data.name,
    };

    users.push(newUser);

    // Sign in the user
    const result = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      return { error: "Failed to sign in after registration" };
    }

    redirect("/dashboard");
  } catch (error) {
    return { error: "Something went wrong. Please try again." };
  }
}

export async function handleGoogleSignIn() {
  await signIn("google", { redirectTo: "/dashboard" });
}
