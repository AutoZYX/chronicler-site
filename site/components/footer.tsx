"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { lang } = useLang();
  const zh = lang === "zh";
  return (
    <footer>
      <div className="container">
        <p>
          <strong style={{ fontFamily: "Playfair Display, serif" }}>
            Chronicler
          </strong>{" "}
          &mdash;{" "}
          {zh
            ? "观时者 · 你自己拥有的 AI 时间账本"
            : "An AI-assisted time ledger you own"}
        </p>
        <p>
          {zh ? "由 " : "Maintained by "}
          <a
            href="https://autozyx.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {zh ? "张玉新 · AutoZyx" : "Yuxin Zhang · AutoZyx"}
          </a>
          {zh ? " 维护 · " : " · "}
          <a
            href="https://github.com/AutoZYX/chronicler"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          &middot; AGPLv3
        </p>
        <p style={{ marginTop: 12 }}>
          <Link href="/">{zh ? "首页" : "Home"}</Link>
          {" · "}
          <Link href="/about">{zh ? "关于" : "About"}</Link>
          {" · "}
          <Link href="/architecture">{zh ? "架构" : "Architecture"}</Link>
          {" · "}
          <a
            href="https://roam.autozyx.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            ROAM
          </a>
          {" · "}
          <a
            href="https://autozyx.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            AutoZyx
          </a>
        </p>
      </div>
    </footer>
  );
}
