"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Lang = "zh" | "en";

const I18nCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "zh", setLang: () => {} });

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("zh");

  useEffect(() => {
    const saved = (typeof window !== "undefined"
      ? (localStorage.getItem("chronicler.lang") as Lang | null)
      : null);
    if (saved === "zh" || saved === "en") setLang(saved);
  }, []);

  const set = (l: Lang) => {
    setLang(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("chronicler.lang", l);
    }
  };

  return (
    <I18nCtx.Provider value={{ lang, setLang: set }}>
      {children}
    </I18nCtx.Provider>
  );
}

export function useLang() {
  return useContext(I18nCtx);
}

export function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "zh" ? "en" : "zh")}
      className="text-sm px-2.5 py-1 rounded-md border border-[var(--border)] bg-[var(--bg)] hover:bg-[var(--bg-alt)] transition-colors text-[var(--text-muted)]"
      aria-label="toggle language"
    >
      {lang === "zh" ? "EN" : "中"}
    </button>
  );
}
