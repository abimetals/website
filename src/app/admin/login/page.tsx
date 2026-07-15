import { Suspense } from "react";
import AdminLoginPage from "./LoginForm";

export const metadata = {
  title: "Admin Login | ABI Manufacturing Intl Ltd",
};

export default function AdminLoginRoute() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-[#f4f6f8] text-[#696a6c]">
          Loading…
        </div>
      }
    >
      <AdminLoginPage />
    </Suspense>
  );
}
