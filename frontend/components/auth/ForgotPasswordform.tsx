"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import AuthLayout from "./AuthLayout";

import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function ForgotPasswordForm() {
  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a reset link."
    >
      <form className="space-y-6">

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          leftIcon={<Mail size={18} />}
        />

        <Button
          type="submit"
          fullWidth
          className="h-12 text-base font-semibold"
        >
          Send Reset Link
        </Button>

        <p className="text-center text-sm text-[var(--muted)]">
          Remember your password?{" "}
          <Link
            href="/login"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Back to Sign In
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}