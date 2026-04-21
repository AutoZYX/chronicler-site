"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Architecture() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <div>
      <h1 className="text-3xl mb-3">{zh ? "架构" : "Architecture"}</h1>
      <p className="text-[var(--muted)] mb-8">
        {zh
          ? "四层管线 · 采集 → 存储 → 推断 → 呈现。除 Claude API 调用外，全部在本机。"
          : "Four-layer pipeline · collect → store → infer → present. Everything stays local except the Claude API call."}
      </p>

      <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-3 mb-8 overflow-x-auto">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/architecture.svg"
          alt={zh ? "Chronicler 架构图" : "Chronicler architecture diagram"}
          className="w-full h-auto"
        />
      </div>

      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "每一层做什么" : "What each layer does"}
        </h2>
        <ul className="list-disc list-outside ml-5 space-y-2 text-sm text-[var(--muted)]">
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "采集（Collect）" : "Collect"}
            </span>{" "}
            — {zh
              ? "三个独立采集源（菜单栏切换、环境 widget 切换、后台轮询），全部由 launchd 托管开机自启。5 分钟无操作自动暂停记录。"
              : "Three independent capture sources (menu bar, ambient widget, background poller). All managed by launchd at login. Auto-pauses after 5 minutes of inactivity."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "存储（Store）" : "Store"}
            </span>{" "}
            — {zh
              ? "单文件 SQLite（~/.chronicle/chronicle.db）· 6 个表 · WAL 模式 · 零配置 · 完全离线可用。"
              : "Single-file SQLite (~/.chronicle/chronicle.db) · 6 tables · WAL mode · zero config · fully offline-capable."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "推断（Infer）" : "Infer"}
            </span>{" "}
            — {zh
              ? "Classifier（主，LLM）+ Heuristic（降级，纯关键词）+ Budget（守门，$10 月上限）。唯一跨网络的层。"
              : "Classifier (LLM primary) + Heuristic (keyword fallback) + Budget (gate, $10/mo cap). The only layer that crosses the network."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "呈现（Present）" : "Present"}
            </span>{" "}
            — {zh
              ? "四种输出形态，全部落到 Obsidian vault 的 Markdown 文件（iCloud 同步，iOS Obsidian 可读）。"
              : "Four output surfaces, all landing as Markdown in an Obsidian vault (iCloud-synced, readable on iOS Obsidian)."}
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl mb-3">{zh ? "技术栈" : "Tech stack"}</h2>
        <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-[var(--muted)]">
          <li>Python 3.11+ · pyobjc (AppKit / Quartz) · AppleScript (osascript)</li>
          <li>SQLite 3 (stdlib) · WAL mode · 6 tables</li>
          <li>pywebview 6.2.1 · rumps 0.4 · PyYAML · python-dateutil</li>
          <li>Anthropic SDK · Claude Opus 4.7 · prompt caching</li>
          <li>launchd · 4 plist agents (collector / menubar / lobby / classify)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "数据模型" : "Data model"}
        </h2>
        <pre className="rounded-lg bg-[var(--badge-bg)] p-4 text-xs overflow-x-auto font-mono leading-relaxed">
{`events                  -- 30s poll rows (app + title + ts + context)
sessions                -- manual switches; may carry an exit-card
state                   -- singleton: current context
inferred_segments       -- classifier output (per-day time slices)
classifier_corrections  -- user overrides, fed back as few-shot
llm_calls               -- cost tracking + budget cap`}
        </pre>
      </section>

      <div className="text-sm">
        <Link href="/" className="text-[var(--accent)]">
          {zh ? "← 返回首页" : "← Back to home"}
        </Link>
      </div>
    </div>
  );
}
