"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import type { ManagedPage } from "@/lib/pages/types";

export default function AdminDeletePage() {
  const router = useRouter();
  const [pages, setPages] = useState<ManagedPage[]>([]);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const selected = pages.find((page) => page.id === selectedId) || null;

  const loadPages = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/pages?mode=editable");
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to load pages.");
      setPages(data.pages || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to load pages.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadPages();
  }, [loadPages]);

  async function onDelete() {
    if (!selected) return;
    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this page?"
    );
    if (!confirmed) return;

    setDeleting(true);
    setError("");
    setMessage("");
    try {
      const res = await fetch(
        `/api/admin/pages/${encodeURIComponent(selected.id)}`,
        { method: "DELETE" }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to delete page.");
      setMessage(`Deleted “${selected.title}”.`);
      setSelectedId("");
      await loadPages();
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to delete page.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold text-[#14314b]">
        Delete Page
      </h1>
      <p className="mt-2 text-[#696a6c]">
        Choose a page to remove. You will be asked to confirm before deletion.
      </p>

      <div className="mt-8 rounded-2xl border border-[#14314b]/10 bg-white p-5 sm:p-8">
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}
        {message && (
          <div className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            {message}
          </div>
        )}

        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Select page
          </span>
          <select
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
            disabled={loading}
          >
            <option value="">
              {loading ? "Loading pages…" : "Choose a page…"}
            </option>
            {pages.map((page) => (
              <option key={page.id} value={page.id}>
                {page.title} ({page.path})
              </option>
            ))}
          </select>
        </label>

        {selected && (
          <div className="mt-6 rounded-md border border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-800">
              Are you sure you want to permanently delete this page?
            </p>
            <p className="mt-2 text-sm text-red-700">
              <strong>{selected.title}</strong> — {selected.path}
            </p>
            <button
              type="button"
              onClick={onDelete}
              disabled={deleting}
              className="mt-4 rounded-md bg-red-700 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-red-800 disabled:opacity-60"
            >
              {deleting ? "Deleting…" : "Yes, delete permanently"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
