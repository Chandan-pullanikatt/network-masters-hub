"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function LoginForm() {
    const [identifier, setIdentifier] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const returnUrl = searchParams.get("returnUrl") || "/";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL;
            console.log("STRAPI URL:", BASE_URL);

            const res = await fetch(`${BASE_URL}/api/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    identifier,
                    password,
                }),
            });

            const data = await res.json();

            if (data.error) {
                toast.error(data.error.message);
            } else {
                login(data.jwt, data.user);
                toast.success("Logged in successfully");
                router.push(returnUrl as string);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md space-y-8 rounded-xl border border-border bg-card p-8 shadow-lg"
            >
                <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        Welcome Back
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Sign in to access your courses
                    </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <Input
                                id="email-address"
                                name="identifier"
                                type="email"
                                autoComplete="email"
                                required
                                placeholder="Email address"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="bg-background/50"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="bg-background/50"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <Link
                            href="/register"
                            className="font-medium text-primary hover:text-primary/80"
                        >
                            Don't have an account? Sign up
                        </Link>
                        <Link
                            href="/forgot-password"
                            className="font-medium text-primary hover:text-primary/80"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#003366] hover:bg-[#002244] text-white"
                    >
                        {loading ? "Signing in..." : "Sign in"}
                    </Button>
                </form>
                <div className="text-center text-sm">
                    <p className="text-muted-foreground">
                        Don't have an account?{" "}
                        <Link href="/register" className="font-medium text-primary hover:text-primary/80">
                            Register here
                        </Link>
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

// Remove LoginFormContent definition since it's now merged
// and ensure we clean up the file end if needed, but this replacement targets the main function.

