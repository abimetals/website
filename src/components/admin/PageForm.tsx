"use client";

import { useEffect, useState } from "react";
import type { DownloadLink } from "@/lib/pages/types";

export type PageFormValues = {
  menuId: string;
  productSubmenuId: string;
  title: string;
  subheading: string;
  snippet: string;
  image: string;
  downloads: DownloadLink[];
  content: string;
};

type MenuOption = { id: string; label: string; href: string };
type SubmenuOption = { id: string; label: string; pathPrefix: string };

const emptyValues: PageFormValues = {
  menuId: "",
  productSubmenuId: "",
  title: "",
  subheading: "",
  snippet: "",
  image: "",
  downloads: [],
  content: "",
};

export default function PageForm({
  mode,
  initialValues,
  lockPlacement = false,
  showOldContent = false,
  oldContent = "",
  submitLabel,
  onSubmit,
}: {
  mode: "add" | "edit";
  initialValues?: Partial<PageFormValues>;
  lockPlacement?: boolean;
  showOldContent?: boolean;
  oldContent?: string;
  submitLabel: string;
  onSubmit: (values: PageFormValues) => Promise<void>;
}) {
  const [values, setValues] = useState<PageFormValues>({
    ...emptyValues,
    ...initialValues,
    downloads: initialValues?.downloads || [],
  });
  const [menus, setMenus] = useState<MenuOption[]>([]);
  const [productSubmenus, setProductSubmenus] = useState<SubmenuOption[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    setValues({
      ...emptyValues,
      ...initialValues,
      downloads: initialValues?.downloads || [],
    });
    setDirty(false);
  }, [initialValues]);

  useEffect(() => {
    fetch("/api/admin/nav")
      .then((res) => res.json())
      .then((data) => {
        setMenus(data.menus || []);
        setProductSubmenus(data.productSubmenus || []);
      })
      .catch(() => {
        setErrors(["Unable to load navigation options."]);
      });
  }, []);

  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = "";
    };
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => window.removeEventListener("beforeunload", onBeforeUnload);
  }, [dirty]);

  function update<K extends keyof PageFormValues>(key: K, value: PageFormValues[K]) {
    setDirty(true);
    setValues((current) => ({ ...current, [key]: value }));
  }

  function updateDownload(index: number, key: keyof DownloadLink, value: string) {
    setDirty(true);
    setValues((current) => {
      const downloads = current.downloads.slice();
      downloads[index] = { ...downloads[index], [key]: value };
      return { ...current, downloads };
    });
  }

  async function handleUpload(file: File | null) {
    if (!file) return;
    setUploading(true);
    setErrors([]);
    try {
      const body = new FormData();
      body.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body });
      const data = await res.json();
      if (!res.ok) {
        setErrors([data.error || "Upload failed."]);
        return;
      }
      update("image", data.url);
      setDirty(true);
    } catch {
      setErrors(["Upload failed."]);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSaving(true);
    setErrors([]);
    setMessage("");
    try {
      await onSubmit(values);
      setDirty(false);
      setMessage(mode === "add" ? "Page created successfully." : "Page updated successfully.");
    } catch (error) {
      const err = error as Error & { errors?: string[] };
      setErrors(err.errors || [err.message || "Something went wrong."]);
    } finally {
      setSaving(false);
    }
  }

  const showProductSubmenu = values.menuId === "product";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <ul className="list-disc space-y-1 pl-5">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      {message && (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {message}
        </div>
      )}

      {!lockPlacement && (
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block font-display text-sm font-semibold">
              What would you like to add?
            </span>
            <select
              value={values.menuId}
              onChange={(e) => {
                update("menuId", e.target.value);
                update("productSubmenuId", "");
              }}
              className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
              required
            >
              <option value="">Select a menu…</option>
              {menus.map((menu) => (
                <option key={menu.id} value={menu.id}>
                  {menu.label}
                </option>
              ))}
            </select>
          </label>

          {showProductSubmenu && (
            <label className="block">
              <span className="mb-1.5 block font-display text-sm font-semibold">
                Product submenu
              </span>
              <select
                value={values.productSubmenuId}
                onChange={(e) => update("productSubmenuId", e.target.value)}
                className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
                required
              >
                <option value="">Select a submenu…</option>
                {productSubmenus.map((submenu) => (
                  <option key={submenu.id} value={submenu.id}>
                    {submenu.label}
                  </option>
                ))}
              </select>
            </label>
          )}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block md:col-span-2">
          <span className="mb-1.5 block font-display text-sm font-semibold">Title</span>
          <input
            value={values.title}
            onChange={(e) => update("title", e.target.value)}
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Subheading
          </span>
          <input
            value={values.subheading}
            onChange={(e) => update("subheading", e.target.value)}
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Intro Snippet
          </span>
          <input
            value={values.snippet}
            onChange={(e) => update("snippet", e.target.value)}
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
          />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Image URL
          </span>
          <input
            value={values.image}
            onChange={(e) => update("image", e.target.value)}
            placeholder="https://… or /uploads/…"
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Upload image
          </span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e.target.files?.[0] || null)}
            className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2 text-sm"
          />
          {uploading && (
            <p className="mt-1 text-sm text-[#696a6c]">Uploading…</p>
          )}
        </label>
      </div>

      {values.image && (
        <img
          src={values.image}
          alt="Preview"
          className="max-h-48 rounded-md border border-[#14314b]/10 object-contain"
        />
      )}

      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold">Download Links</h3>
          <button
            type="button"
            onClick={() =>
              update("downloads", [
                ...values.downloads,
                { label: "", href: "" },
              ])
            }
            className="rounded-md bg-[#14314b] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#696a6c]"
          >
            Add Download
          </button>
        </div>
        <div className="space-y-3">
          {values.downloads.length === 0 && (
            <p className="text-sm text-[#696a6c]">No download links yet.</p>
          )}
          {values.downloads.map((download, index) => (
            <div
              key={index}
              className="grid gap-3 rounded-md border border-[#14314b]/10 bg-white p-3 md:grid-cols-[1fr_1.2fr_auto]"
            >
              <input
                value={download.label}
                onChange={(e) => updateDownload(index, "label", e.target.value)}
                placeholder="Label"
                className="rounded-md border border-[#14314b]/20 px-3 py-2"
              />
              <input
                value={download.href}
                onChange={(e) => updateDownload(index, "href", e.target.value)}
                placeholder="https://… or /path"
                className="rounded-md border border-[#14314b]/20 px-3 py-2"
              />
              <button
                type="button"
                onClick={() =>
                  update(
                    "downloads",
                    values.downloads.filter((_, i) => i !== index)
                  )
                }
                className="rounded-md border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {showOldContent && (
        <label className="block">
          <span className="mb-1.5 block font-display text-sm font-semibold">
            Old Content
          </span>
          <textarea
            value={oldContent}
            readOnly
            rows={8}
            className="w-full rounded-md border border-[#14314b]/15 bg-[#f0f2f4] px-3 py-2.5 text-[#696a6c]"
          />
          <p className="mt-2 text-center font-display text-sm font-semibold text-[#696a6c]">
            ↓
          </p>
        </label>
      )}

      <label className="block">
        <span className="mb-1.5 block font-display text-sm font-semibold">
          {showOldContent ? "New Content" : "Content"}
        </span>
        <textarea
          value={values.content}
          onChange={(e) => update("content", e.target.value)}
          rows={14}
          className="w-full rounded-md border border-[#14314b]/20 bg-white px-3 py-2.5"
          required
        />
        <p className="mt-1 text-sm text-[#696a6c]">
          Use blank lines to separate paragraphs. Line breaks are preserved.
        </p>
      </label>

      <button
        type="submit"
        disabled={saving || uploading}
        className="rounded-md bg-[#14314b] px-5 py-3 font-display text-base font-bold text-white transition hover:bg-[#696a6c] disabled:opacity-60"
      >
        {saving ? "Saving…" : submitLabel}
      </button>
    </form>
  );
}
