"use client";

import { useState } from "react";
import Link from "next/link";

import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
} from "lucide-react";

import AuthLayout from "./AuthLayout";
import Divider from "./Divider";
import SocialLogin from "./SocialLogin";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your ProjectPilot workspace."
    >
      <form className="space-y-5">

        <Input
          label="Full Name"
          placeholder="Enter your full name"
          leftIcon={<User size={18} />}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          leftIcon={<Mail size={18} />}
        />

        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Create a password"
          leftIcon={<Lock size={18} />}
          rightIcon={
            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
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

        <Input
          label="Confirm Password"
          type={
            showConfirmPassword ? "text" : "password"
          }
          placeholder="Confirm your password"
          leftIcon={<Lock size={18} />}
          rightIcon={
            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="text-[var(--muted)] hover:text-[var(--foreground)]"
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          }
        />

        <Button
          type="submit"
          fullWidth
          className="h-12 text-base font-semibold"
        >
          Create Account
        </Button>

        <Divider />

        <SocialLogin />

        <p className="text-center text-sm text-[var(--muted)]">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Sign In
          </Link>
        </p>

      </form>
    </AuthLayout>
  );
}