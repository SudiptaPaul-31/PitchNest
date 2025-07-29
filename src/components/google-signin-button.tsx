"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { handleGoogleSignIn } from "@/app/actions/auth";

export function GoogleSignInButton() {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  async function onGoogleSignIn() {
    setIsGoogleLoading(true);
    try {
      await handleGoogleSignIn();
    } catch (error) {
      console.error("Google sign-in error:", error);
      setIsGoogleLoading(false);
    }
  }

  return (
    <Button
      variant="outline"
      className="w-full h-12 text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-200 group"
      onClick={onGoogleSignIn}
      disabled={isGoogleLoading}
    >
      {isGoogleLoading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Signing in...
        </>
      ) : (
        <>
          <Image
            src="/google-logo.png"
            alt="Google"
            width={20}
            height={20}
            className="mr-2 group-hover:scale-110 transition-transform rounded-full"
            priority
          />
          Continue with Google
        </>
      )}
    </Button>
  );
}
