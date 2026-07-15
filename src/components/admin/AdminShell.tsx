"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faFilePen,
  faGaugeHigh,
  faRightFromBracket,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { href: "/admin", label: "Dashboard", icon: faGaugeHigh },
  { href: "/admin/add", label: "Add Page", icon: faFileCirclePlus },
  { href: "/admin/edit", label: "Edit Page", icon: faFilePen },
  { href: "/admin/delete", label: "Delete Page", icon: faTrash },
];

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  async function logout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#f4f6f8] text-[#14314b]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col md:flex-row">
        <aside className="border-b border-[#14314b]/10 bg-[#14314b] text-white md:w-64 md:border-b-0 md:border-r">
          <div className="px-5 py-6">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              ABI Admin
            </p>
            <h1 className="mt-2 font-display text-2xl font-bold">Dashboard</h1>
          </div>
          <nav className="flex gap-1 overflow-x-auto px-3 pb-4 md:flex-col md:overflow-visible">
            {links.map((link) => {
              const active =
                link.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex items-center gap-2 rounded-md px-3 py-2.5 font-display text-sm font-semibold whitespace-nowrap transition ${
                    active
                      ? "bg-white text-[#14314b]"
                      : "text-white/85 hover:bg-white/10"
                  }`}
                >
                  <FontAwesomeIcon icon={link.icon} className="h-4 w-4" />
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={logout}
              disabled={loggingOut}
              className="inline-flex items-center gap-2 rounded-md px-3 py-2.5 text-left font-display text-sm font-semibold text-white/85 transition hover:bg-white/10 disabled:opacity-60"
            >
              <FontAwesomeIcon icon={faRightFromBracket} className="h-4 w-4" />
              {loggingOut ? "Signing out…" : "Logout"}
            </button>
          </nav>
        </aside>

        <div className="flex-1 px-5 py-8 md:px-8">{children}</div>
      </div>
    </div>
  );
}
