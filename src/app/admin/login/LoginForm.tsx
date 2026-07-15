"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed.");
        return;
      }
      const next = searchParams.get("next") || "/admin";
      router.push(next);
      router.refresh();
    } catch {
      setError("Login failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f6f8] px-5 py-12">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md rounded-2xl border border-[#14314b]/10 bg-white p-8 shadow-[0_12px_30px_-16px_rgba(20,49,75,0.35)]"
      >
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#696a6c]">
          ABI Admin
        </p>
        <h1 className="mt-2 font-display text-3xl font-extrabold text-[#14314b]">
          Sign in
        </h1>
        <p className="mt-3 text-sm text-[#696a6c]">
          Enter your administrator credentials to manage site pages.
        </p>

        {error && (
          <div className="mt-5 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <label className="mt-6 block">
          <span className="mb-1.5 block font-display text-sm font-semibold text-[#14314b]">
            Username
          </span>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            className="w-full rounded-md border border-[#14314b]/20 px-3 py-2.5"
            required
          />
        </label>

        <label className="mt-4 block">
          <span className="mb-1.5 block font-display text-sm font-semibold text-[#14314b]">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            className="w-full rounded-md border border-[#14314b]/20 px-3 py-2.5"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="mt-6 w-full rounded-md bg-[#14314b] px-5 py-3 font-display text-base font-bold text-white transition hover:bg-[#696a6c] disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
