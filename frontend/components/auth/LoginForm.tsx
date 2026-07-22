"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthLayout from "./AuthLayout";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";


export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { login } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setError("");
  setLoading(true);

  const success = login(email, password);

  if (success) {
    router.push("/dashboard");
  } else {
    setError("Invalid email or password.");
  }

  setLoading(false);
};
  return (
    <AuthLayout
    title="Welcome Back"
    subtitle="Sign in to continue to your workspace."
>
    <form onSubmit={handleSubmit} className="space-y-6">

        {/* Email */}

        <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            leftIcon={<Mail size={18} />}
        />

        {/* Password */}

        <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            leftIcon={<Lock size={18} />}
            rightIcon={
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                {showPassword ? (
                    <EyeOff size={18} />
                ) : (
                    <Eye size={18} />
                )}
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

        {error && (
        <p className="text-sm text-red-500">
            {error}
        </p>
        )}


        <Button
            type="submit"
            fullWidth
            loading={loading}
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