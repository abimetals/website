"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PageForm, { type PageFormValues } from "@/components/admin/PageForm";
import type { ManagedPage } from "@/lib/pages/types";

export default function AdminEditPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [pages, setPages] = useState<ManagedPage[]>([]);
  const [selectedId, setSelectedId] = useState(searchParams.get("id") || "");
  const [selected, setSelected] = useState<ManagedPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(false);
  const [error, setError] = useState("");

  const loadPages = useCallback(async () => {
    setLoading(true);
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

  useEffect(() => {
    if (!selectedId) {
      setSelected(null);
      return;
    }

    let cancelled = false;
    setLoadingPage(true);
    setError("");
    fetch(`/api/admin/pages/${encodeURIComponent(selectedId)}`)
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Unable to load page.");
        if (!cancelled) setSelected(data.page);
      })
      .catch((err) => {
        if (!cancelled) {
          setSelected(null);
          setError(err instanceof Error ? err.message : "Unable to load page.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoadingPage(false);
      });

    return () => {
      cancelled = true;
    };
  }, [selectedId]);

  const initialValues = useMemo<Partial<PageFormValues> | undefined>(() => {
    if (!selected) return undefined;
    return {
      menuId: selected.menuId,
      productSubmenuId: selected.productSubmenuId || "",
      title: selected.title,
      subheading: selected.subheading,
      snippet: selected.snippet,
      image: selected.image,
      downloads: selected.downloads,
      content: selected.content,
    };
  }, [selected]);

  async function onSubmit(values: PageFormValues) {
    if (!selected) return;
    const res = await fetch(
      `/api/admin/pages/${encodeURIComponent(selected.id)}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          path: selected.path,
          slug: selected.slug,
          menuId: selected.menuId,
          productSubmenuId: selected.productSubmenuId,
        }),
      }
    );
    const data = await res.json();
    if (!res.ok) {
      const err = new Error(data.error || "Unable to update page.") as Error & {
        errors?: string[];
      };
      err.errors = data.errors;
      throw err;
    }
    setSelected(data.page);
    setSelectedId(data.page.id);
    router.replace(`/admin/edit?id=${encodeURIComponent(data.page.id)}`);
    await loadPages();
    router.refresh();
  }

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold text-[#14314b]">
        Edit Page
      </h1>
      <p className="mt-2 text-[#696a6c]">
        Select a page, review the current content, then save your updates.
      </p>

      <div className="mt-8 rounded-2xl border border-[#14314b]/10 bg-white p-5 sm:p-8">
        {error && (
          <div className="mb-4 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
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

        {loadingPage && (
          <p className="mt-6 text-sm text-[#696a6c]">Loading page data…</p>
        )}

        {selected && !loadingPage && (
          <div className="mt-8 border-t border-[#14314b]/10 pt-8">
            <PageForm
              key={selected.id + selected.updatedAt}
              mode="edit"
              lockPlacement
              showOldContent
              oldContent={selected.content}
              initialValues={initialValues}
              submitLabel="Save Changes"
              onSubmit={onSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
