import Link from "next/link";
import { listEditablePages, listManagedPages } from "@/lib/pages/store";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [managed, editable] = await Promise.all([
    listManagedPages(),
    listEditablePages(),
  ]);

  return (
    <div>
      <h1 className="font-display text-3xl font-extrabold text-[#14314b]">
        Dashboard
      </h1>
      <p className="mt-2 max-w-2xl text-[#696a6c]">
        Manage ABI website pages — add new content, update existing pages, or
        remove pages from the site.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-[#14314b]/10 bg-white p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#696a6c]">
            Managed pages
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#14314b]">
            {managed.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[#14314b]/10 bg-white p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#696a6c]">
            Editable pages
          </p>
          <p className="mt-2 font-display text-3xl font-bold text-[#14314b]">
            {editable.length}
          </p>
        </div>
        <div className="rounded-2xl border border-[#14314b]/10 bg-white p-5">
          <p className="font-display text-sm font-semibold uppercase tracking-wide text-[#696a6c]">
            Quick actions
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              href="/admin/add"
              className="rounded-md bg-[#14314b] px-3 py-2 text-sm font-semibold text-white"
            >
              Add Page
            </Link>
            <Link
              href="/admin/edit"
              className="rounded-md border border-[#14314b]/20 px-3 py-2 text-sm font-semibold text-[#14314b]"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-[#14314b]/10 bg-white p-5">
        <h2 className="font-display text-xl font-bold text-[#14314b]">
          Recent managed pages
        </h2>
        {managed.length === 0 ? (
          <p className="mt-3 text-[#696a6c]">
            No custom pages yet. Use Add Page to create one.
          </p>
        ) : (
          <ul className="mt-4 divide-y divide-[#14314b]/10">
            {managed.slice(0, 8).map((page) => (
              <li
                key={page.id}
                className="flex flex-wrap items-center justify-between gap-2 py-3"
              >
                <div>
                  <p className="font-semibold text-[#14314b]">{page.title}</p>
                  <p className="text-sm text-[#696a6c]">{page.path}</p>
                </div>
                <Link
                  href={page.path}
                  className="text-sm font-semibold text-[#14314b] underline-offset-2 hover:underline"
                >
                  View
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
