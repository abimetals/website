"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import type { NavItem } from "@/data/navigation";

export default function Header({ items }: { items: NavItem[] }) {
  const navItems = items;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [openNested, setOpenNested] = useState<string | null>(null);
  const [overlayReady, setOverlayReady] = useState(false);
  const ignoreOverlayUntil = useRef(0);

  useEffect(() => {
    setOpen(false);
    setOpenSubmenu(null);
    setOpenNested(null);
    setOverlayReady(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      setOverlayReady(false);
      document.body.style.overflow = "";
      return;
    }

    ignoreOverlayUntil.current = Date.now() + 400;
    const readyTimer = window.setTimeout(() => setOverlayReady(true), 350);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.clearTimeout(readyTimer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const toggleMenu = () => {
    setOpen((v) => !v);
  };

  const closeMenu = () => {
    if (Date.now() < ignoreOverlayUntil.current) return;
    setOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-[60] bg-white shadow-[0_1px_0_rgba(20,49,75,0.1),0_10px_28px_-16px_rgba(20,49,75,0.22)]">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-5 py-4 md:px-8">
          <Link href="/" className="shrink-0" aria-label="ABI Manufacturing Intl Ltd home">
            <img
              src="https://abimanufacturingint.com/images/logo/abi-logo-smlr.png"
              alt="ABI Manufacturing Intl Ltd"
              className="h-12 w-auto md:h-14"
            />
          </Link>

          <nav
            className="ml-auto hidden items-center gap-8 md:mr-10 md:flex lg:mr-16"
            aria-label="Primary"
          >
            {navItems.map((item) =>
              item.children ? (
                <div key={item.href + item.label} className="group relative">
                  <Link
                    href={item.href}
                    className="nav-link inline-flex items-center gap-1.5 font-display text-lg font-semibold tracking-wide text-[#14314b] transition-colors hover:text-[#696a6c]"
                  >
                    {item.label}
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="pointer-events-none h-3 w-3 opacity-70 transition group-hover:rotate-180"
                    />
                  </Link>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[240px] pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="rounded-md border border-[#14314b]/10 bg-white py-2 shadow-[0_12px_30px_-12px_rgba(20,49,75,0.35)]">
                      {item.children.map((child) =>
                        child.children?.length ? (
                          <div
                            key={child.href + child.label}
                            className="group/nested relative"
                          >
                            <Link
                              href={child.href}
                              className="flex items-center justify-between gap-3 px-4 py-2.5 font-display text-base font-semibold text-[#14314b] transition-colors hover:bg-[#14314b]/5 hover:text-[#696a6c]"
                            >
                              {child.label}
                              <FontAwesomeIcon
                                icon={faChevronRight}
                                className="h-3 w-3 opacity-70"
                              />
                            </Link>
                            <div className="invisible absolute left-full top-0 z-50 min-w-[240px] pl-1 opacity-0 transition group-hover/nested:visible group-hover/nested:opacity-100 group-focus-within/nested:visible group-focus-within/nested:opacity-100">
                              <div className="rounded-md border border-[#14314b]/10 bg-white py-2 shadow-[0_12px_30px_-12px_rgba(20,49,75,0.35)]">
                                {child.children.map((nested) => (
                                  <Link
                                    key={nested.href + nested.label}
                                    href={nested.href}
                                    className="block px-4 py-2.5 font-display text-base font-semibold text-[#14314b] transition-colors hover:bg-[#14314b]/5 hover:text-[#696a6c]"
                                  >
                                    {nested.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Link
                            key={child.href + child.label}
                            href={child.href}
                            className="block px-4 py-2.5 font-display text-base font-semibold text-[#14314b] transition-colors hover:bg-[#14314b]/5 hover:text-[#696a6c]"
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="nav-link font-display text-lg font-semibold tracking-wide text-[#14314b] transition-colors hover:text-[#696a6c]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 shrink-0 touch-manipulation items-center justify-center rounded-md text-[#14314b] [-webkit-tap-highlight-color:transparent] hover:bg-[#14314b]/5 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-transform duration-200 ${
                  open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`overflow-hidden border-t border-[#14314b]/10 bg-white transition-[max-height,opacity] duration-200 ease-out md:hidden ${
            open ? "max-h-[80vh] opacity-100" : "max-h-0 border-t-0 opacity-0"
          }`}
          aria-hidden={!open}
        >
          <nav className="max-h-[80vh] overflow-y-auto px-5 py-4" aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href + item.label}>
                  {item.children ? (
                    <div>
                      <div className="flex items-center gap-1">
                        <Link
                          href={item.href}
                          className="flex-1 touch-manipulation py-2.5 font-display text-lg font-semibold text-[#14314b]"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          className="inline-flex h-10 w-10 touch-manipulation items-center justify-center rounded-md text-[#14314b] [-webkit-tap-highlight-color:transparent] hover:bg-[#14314b]/5"
                          aria-expanded={openSubmenu === item.href}
                          aria-label={`${openSubmenu === item.href ? "Collapse" : "Expand"} ${item.label} submenu`}
                          onClick={() =>
                            setOpenSubmenu((current) =>
                              current === item.href ? null : item.href
                            )
                          }
                        >
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className={`pointer-events-none h-3.5 w-3.5 transition ${
                              openSubmenu === item.href ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>
                      {openSubmenu === item.href && (
                        <ul className="mb-2 ml-3 border-l border-[#14314b]/15 pl-3">
                          {item.children.map((child) => (
                            <li key={child.href + child.label}>
                              {child.children?.length ? (
                                <div>
                                  <div className="flex items-center gap-1">
                                    <Link
                                      href={child.href}
                                      className="flex-1 touch-manipulation py-2.5 font-display text-base font-medium text-[#696a6c]"
                                      onClick={() => setOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                    <button
                                      type="button"
                                      className="inline-flex h-9 w-9 touch-manipulation items-center justify-center rounded-md text-[#14314b] [-webkit-tap-highlight-color:transparent] hover:bg-[#14314b]/5"
                                      aria-expanded={openNested === child.href}
                                      aria-label={`${openNested === child.href ? "Collapse" : "Expand"} ${child.label} submenu`}
                                      onClick={() =>
                                        setOpenNested((current) =>
                                          current === child.href ? null : child.href
                                        )
                                      }
                                    >
                                      <FontAwesomeIcon
                                        icon={faChevronDown}
                                        className={`pointer-events-none h-3 w-3 transition ${
                                          openNested === child.href ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>
                                  </div>
                                  {openNested === child.href && (
                                    <ul className="mb-1 ml-3 border-l border-[#14314b]/15 pl-3">
                                      {child.children.map((nested) => (
                                        <li key={nested.href + nested.label}>
                                          <Link
                                            href={nested.href}
                                            className="block touch-manipulation py-2 font-display text-sm font-medium text-[#696a6c]"
                                            onClick={() => setOpen(false)}
                                          >
                                            {nested.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              ) : (
                                <Link
                                  href={child.href}
                                  className="block touch-manipulation py-2.5 font-display text-base font-medium text-[#696a6c]"
                                  onClick={() => setOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block touch-manipulation py-2.5 font-display text-lg font-semibold text-[#14314b]"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {open && (
        <button
          type="button"
          className={`fixed inset-0 z-[55] bg-black/25 md:hidden ${
            overlayReady ? "pointer-events-auto" : "pointer-events-none"
          }`}
          aria-label="Close menu overlay"
          tabIndex={-1}
          onClick={closeMenu}
        />
      )}
    </>
  );
}
