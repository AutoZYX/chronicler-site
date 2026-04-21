"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LangToggle } from "@/lib/i18n";

const LINKS = [
  { href: "/about", zh: "关于", en: "About" },
  { href: "/architecture", zh: "架构", en: "Architecture" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/92 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-baseline gap-2 no-underline text-[var(--text)]"
        >
          <span
            className="text-[var(--accent)] font-bold text-xl"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Chronicler
          </span>
          <span className="text-sm text-[var(--muted)] hidden sm:inline">
            观时者
          </span>
        </Link>

        <div className="flex items-center gap-1">
          {LINKS.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md text-sm no-underline transition-colors ${
                  active
                    ? "text-[var(--text)] bg-[var(--badge-bg)]"
                    : "text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--badge-bg)]"
                }`}
              >
                {l.en}
              </Link>
            );
          })}
          <a
            href="https://github.com/AutoZYX/chronicler"
            target="_blank"
            rel="noopener"
            className="px-3 py-1.5 rounded-md text-sm no-underline text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--badge-bg)] transition-colors"
          >
            GitHub
          </a>
          <LangToggle />
        </div>
      </div>
    </nav>
  );
}
