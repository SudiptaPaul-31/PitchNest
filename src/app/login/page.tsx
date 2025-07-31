"use client"
import SignIn from '@/views/auth/login';

export default function SignInPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300">
            <SignIn />
        </div>
    );
}
