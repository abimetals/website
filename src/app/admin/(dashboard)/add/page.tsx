"use client";

import { useRouter } from "next/navigation";
import PageForm, { type PageFormValues } from "@/components/admin/PageForm";

export default function AdminAddPage() {
  const router = useRouter();

  async function onSubmit(values: PageFormValues) {
    const res = await fetch("/api/admin/pages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const data = await res.json();
    if (!res.ok) {
      const error = new Error(data.error || "Unable to create page.") as Error & {
        errors?: string[];
      };
      error.errors = data.errors;
      throw error;
    }
    router.push("/admin/edit?id=" + encodeURIComponent(data.page.id));
    router.refresh();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold text-[#14314b]">
        Add Page
      </h1>
      <p className="mt-2 text-[#696a6c]">
        Create a new page and place it under an existing site menu.
      </p>
      <div className="mt-8 rounded-2xl border border-[#14314b]/10 bg-white p-5 sm:p-8">
        <PageForm mode="add" submitLabel="Create Page" onSubmit={onSubmit} />
      </div>
    </div>
  );
}
