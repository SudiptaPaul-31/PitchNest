import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { SignupForm } from "@/components/signup-form";
import { GoogleSignInButton } from "@/components/google-signin-button";
import { Sparkles, CheckCircle, ArrowLeft } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-950 dark:to-indigo-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />

      <div className="w-full max-w-md relative z-10">
        {/* Back to home */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 mb-8 group transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to home
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 mr-2" />
            Join PitchNest Today
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent mb-3">
            Create Your Account
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Start connecting with top-tier investors and innovative startups
          </p>
        </div>

        <Card className="border-0 shadow-2xl shadow-blue-500/10 bg-white/80 backdrop-blur-xl dark:bg-gray-900/80 dark:shadow-blue-500/5 relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <CardContent className="p-8 space-y-6">
            {/* Google Sign Up */}
            <GoogleSignInButton />

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200 dark:border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 font-medium">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email Sign Up Form */}
            <SignupForm />

            {/* Benefits */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-xl p-5 space-y-3 border border-blue-100 dark:border-blue-900/50">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                What you&apos;ll get:
              </h3>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                  Access to 1,250+ active startups
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                  Connect with 890+ verified investors
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                  <CheckCircle className="h-4 w-4 mr-3 text-green-500 flex-shrink-0" />
                  AI-powered matching algorithm
                </div>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="text-center pt-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link
                  href="/signin"
                  className="font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            By signing up, you agree to our{" "}
            <Link
              href="/terms"
              className="underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="underline hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
