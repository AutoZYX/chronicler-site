"use client";

import { useLang } from "@/lib/i18n";

/**
 * Floating top-right language toggle — matches roam.autozyx.com pattern.
 * Circular pill, fixed-position, subtle shadow. Shows the OPPOSITE
 * language (so pressing it switches TO that language).
 */
export default function FloatingLangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      className="lang-toggle"
      aria-label="Toggle language"
    >
      {lang === "zh" ? "EN" : "中文"}
    </button>
  );
}
