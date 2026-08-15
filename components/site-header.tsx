"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function LogoMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500 text-white shadow-sm">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M3 13h3l2-5 4 10 3-7 2 4h4"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M5 7.5l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productLinks = [
  {
    label: "Product Portfolio",
    href: "/#products",
  },
  {
    label: "Pulse Oximeters",
    href: "/products/pulse-oximeter",
  },
  {
    label: "Blood Pressure Monitors",
    href: "/products/blood-pressure-monitor",
  },
  {
    label: "Wearable Monitoring",
    href: "/products/wearable-monitoring",
  },
];

type DesktopMenu = "products" | null;

function isPathActive(pathname: string, href: string) {
  const [path, hash] = href.split("#");

  if (hash) {
    return false;
  }

  return path === "/" ? pathname === "/" : pathname === path || pathname.startsWith(`${path}/`);
}

function DesktopDropdown({
  label,
  links,
  open,
  active,
  align = "left",
  pathname,
  onToggle,
  onNavigate,
}: {
  label: string;
  links: typeof productLinks;
  open: boolean;
  active: boolean;
  align?: "left" | "right";
  pathname: string;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        data-active={active || undefined}
        onClick={onToggle}
        className="nav-item gap-1"
      >
        {label}
        <ChevronIcon />
      </button>

      <div
        className={`${open ? "visible pointer-events-auto opacity-100" : "invisible pointer-events-none opacity-0"} absolute top-full z-50 w-[280px] pt-3 transition duration-150 ${align === "right" ? "right-0" : "left-0"}`}
      >
        <div role="menu" className="rounded-lg border border-slate-200 bg-white p-2 shadow-xl ring-1 ring-black/5">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              aria-current={isPathActive(pathname, item.href) ? "page" : undefined}
              onClick={onNavigate}
              className="nav-menu-item"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-slate-100 pt-3">
      <p className="px-3 text-xs font-semibold text-slate-500">{title}</p>
      <div className="mt-2 grid gap-1">{children}</div>
    </div>
  );
}

function MobileLink({
  href,
  children,
  onNavigate,
  active = false,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className="nav-menu-item"
    >
      {children}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const [openMenu, setOpenMenu] = useState<DesktopMenu>(null);

  const closeMobileMenu = () => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  };

  const closeAllMenus = () => {
    setOpenMenu(null);
    closeMobileMenu();
  };

  useEffect(() => {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;

      if (target && headerRef.current && !headerRef.current.contains(target)) {
        setOpenMenu(null);

        if (mobileMenuRef.current) {
          mobileMenuRef.current.open = false;
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);

        if (mobileMenuRef.current) {
          mobileMenuRef.current.open = false;
        }
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const productsActive = pathname === "/products" || pathname.startsWith("/products/");

  return (
    <header
      ref={headerRef}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setOpenMenu(null);
        }
      }}
      className="sticky top-0 z-50 border-b border-slate-200 bg-white/94 backdrop-blur-xl"
    >
      <nav className="site-container flex items-center justify-between py-3.5" aria-label="Main navigation">
        <Link
          href="/"
          onClick={closeAllMenus}
          className="flex items-center gap-3"
          aria-label="YimiLife homepage"
        >
          <LogoMark />
          <div>
            <p className="text-base font-semibold text-slate-950">YimiLife</p>
            <p className="text-xs font-medium text-slate-500">Medical Device OEM/ODM</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1 xl:flex">
          <DesktopDropdown
            label="Products"
            links={productLinks}
            open={openMenu === "products"}
            active={productsActive}
            pathname={pathname}
            onToggle={() =>
              setOpenMenu((current) => (current === "products" ? null : "products"))
            }
            onNavigate={closeAllMenus}
          />

          <Link
            href="/oem-odm"
            aria-current={isPathActive(pathname, "/oem-odm") ? "page" : undefined}
            onClick={closeAllMenus}
            className="nav-item"
          >
            OEM/ODM
          </Link>

          <Link
            href="/manufacturing-quality"
            aria-current={isPathActive(pathname, "/manufacturing-quality") ? "page" : undefined}
            onClick={closeAllMenus}
            className="nav-item"
          >
            Manufacturing & Quality
          </Link>

          <Link
            href="/about"
            aria-current={isPathActive(pathname, "/about") ? "page" : undefined}
            onClick={closeAllMenus}
            className="nav-item"
          >
            About
          </Link>

          <Link
            href="/contact"
            aria-current={isPathActive(pathname, "/contact") ? "page" : undefined}
            onClick={closeAllMenus}
            className="button-primary whitespace-nowrap"
          >
            Contact
            <ArrowIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <details ref={mobileMenuRef} className="relative xl:hidden">
          <summary className="site-control flex cursor-pointer list-none items-center border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800">
            Menu
          </summary>

          <div className="absolute right-0 top-12 z-50 max-h-[82vh] w-[calc(100vw-3rem)] max-w-[340px] overflow-y-auto rounded-lg border border-slate-200 bg-white p-4 shadow-xl">
            <div className="grid gap-2">
              <MobileSection title="Products">
                {productLinks.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    active={isPathActive(pathname, item.href)}
                    onNavigate={closeAllMenus}
                  >
                    {item.label}
                  </MobileLink>
                ))}
              </MobileSection>

              <MobileSection title="Main pages">
                <MobileLink
                  href="/oem-odm"
                  active={isPathActive(pathname, "/oem-odm")}
                  onNavigate={closeAllMenus}
                >
                  OEM/ODM
                </MobileLink>
                <MobileLink
                  href="/manufacturing-quality"
                  active={isPathActive(pathname, "/manufacturing-quality")}
                  onNavigate={closeAllMenus}
                >
                  Manufacturing & Quality
                </MobileLink>
                <MobileLink
                  href="/about"
                  active={pathname === "/about"}
                  onNavigate={closeAllMenus}
                >
                  About
                </MobileLink>
                <MobileLink
                  href="/contact"
                  active={isPathActive(pathname, "/contact")}
                  onNavigate={closeAllMenus}
                >
                  Contact
                </MobileLink>
              </MobileSection>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
