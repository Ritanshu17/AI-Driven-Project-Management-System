"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthLayout from "./AuthLayout";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
    title="Welcome Back"
    subtitle="Sign in to continue to your workspace."
>
    <form className="space-y-6">

        {/* Email */}

        <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            leftIcon={<Mail size={18} />}
            validate={(value: string) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            }
            successMessage="Valid email"
            errorMessage="Invalid email address"
        />

        {/* Password */}

        <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            leftIcon={<Lock size={18} />}
            rightIcon={
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                    >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
         }
        />

        {/* Remember Me */}

        <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 cursor-pointer">

            <input
                type="checkbox"
                className="rounded"
            />

            Remember me

            </label>

            <Link
            href="/forgot-password"
            className="text-[var(--accent)] hover:underline"
            >
            Forgot password?
            </Link>

        </div>

        <Button
            type="submit"
            fullWidth
        >
            Sign In
        </Button>

        <Divider />

        <SocialLogin />

            <p className="text-center text-sm text-[var(--muted)]">
                Don't have an account?{" "}
            <Link
            href="/register"
            className="font-medium text-[var(--accent)] hover:underline"
            >
                Create one
            </Link>

        </p>

    </form>

</AuthLayout>
  );
}