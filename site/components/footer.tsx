"use client";

import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const zh = lang === "zh";
  return (
    <footer className="border-t border-[var(--border)] mt-16 py-8 text-sm text-[var(--muted)]">
      <div className="mx-auto max-w-3xl px-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className="font-medium text-[var(--text)]">Chronicler</span>
          <span className="mx-1.5">·</span>
          <span>观时者</span>
          <span className="mx-1.5">·</span>
          <span>AGPLv3</span>
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/AutoZYX/chronicler" target="_blank" rel="noopener">
            GitHub
          </a>
          <a href="https://autozyx.com" target="_blank" rel="noopener">
            AutoZyx
          </a>
          <a href="https://driveresearch.tech" target="_blank" rel="noopener">
            DRIVEResearch
          </a>
          <a href="https://roam.autozyx.com" target="_blank" rel="noopener">
            ROAM
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 mt-3 text-xs">
        {zh
          ? "由 张玉新 维护 · 本站内容本身 CC BY 4.0，软件代码 AGPLv3"
          : "Maintained by Yuxin Zhang · Site content CC BY 4.0, software code AGPLv3"}
      </div>
    </footer>
  );
}
