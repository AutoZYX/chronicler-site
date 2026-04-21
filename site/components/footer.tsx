"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const zh = lang === "zh";
  return (
    <footer className="border-t border-[var(--border)] mt-16 py-8 text-center text-sm text-[var(--muted)]">
      <div className="mx-auto max-w-5xl px-4">
        <p>
          <strong style={{ fontFamily: "Playfair Display, serif" }}>
            Chronicler
          </strong>{" "}
          &mdash;{" "}
          {zh
            ? "观时者 · 你自己拥有的 AI 时间账本"
            : "An AI-assisted time ledger you own"}
        </p>
        <p className="mt-1">
          {zh ? "由 张玉新 维护 · " : "Maintained by Yuxin Zhang · "}
          <a
            href="https://github.com/AutoZYX/chronicler"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:underline"
          >
            GitHub
          </a>{" "}
          &middot; AGPLv3
        </p>
      </div>
    </footer>
  );
}
