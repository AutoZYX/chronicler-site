"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Architecture() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <>
      <header className="hero container">
        <h1 style={{ fontSize: "3.5vw", minHeight: 0 }}>
          {zh ? "架构" : "Architecture"}
        </h1>
        <p className="tagline main">
          {zh
            ? "四层管线 · 采集 → 存储 → 推断 → 呈现。除 Claude API 调用外，全部在本机。"
            : "Four-layer pipeline · collect → store → infer → present. Everything stays local except the Claude API call."}
        </p>
      </header>

      <main className="container">
        <section className="divider">
          <div
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              padding: 16,
              boxShadow: "var(--card-shadow)",
              overflowX: "auto",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/architecture.svg"
              alt={zh ? "Chronicler 架构图" : "Chronicler architecture diagram"}
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">
            {zh ? "四层管线" : "Four layers"}
          </h2>
          <div className="card-grid">
            <div className="card">
              <span className="emoji">📝</span>
              <h3>{zh ? "采集" : "Collect"}</h3>
              <p>
                {zh
                  ? "三个独立采集源（菜单栏、ambient widget、后台轮询）由 launchd 托管开机自启。5 分钟无操作自动暂停，整夜挂机不算入任何身份。"
                  : "Three independent sources (menu bar, ambient widget, background poller) managed by launchd at login. Auto-pauses after 5 min of inactivity."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">💾</span>
              <h3>{zh ? "存储" : "Store"}</h3>
              <p>
                {zh
                  ? "单文件 SQLite（~/.chronicle/chronicle.db）· 6 个表 · WAL 模式 · 零配置 · 完全离线可用。"
                  : "Single-file SQLite (~/.chronicle/chronicle.db) · 6 tables · WAL mode · zero config · fully offline-capable."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">🧠</span>
              <h3>{zh ? "推断" : "Infer"}</h3>
              <p>
                {zh
                  ? "Classifier（主，LLM）+ Heuristic（降级，纯关键词）+ Budget（守门，$10 / 月上限）。唯一跨网络的层。"
                  : "Classifier (LLM primary) + Heuristic (keyword fallback) + Budget (gate, $10/mo cap). The only networked layer."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">📖</span>
              <h3>{zh ? "呈现" : "Present"}</h3>
              <p>
                {zh
                  ? "每日 digest、离场卡片、周报、inferred 分段。全部以 Markdown 写入 Obsidian vault（iCloud 同步，iOS 可读）。"
                  : "Daily digests, exit cards, weekly rollups, inferred segments — all Markdown in your Obsidian vault (iCloud-synced, iOS-readable)."}
              </p>
            </div>
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">{zh ? "技术栈" : "Tech stack"}</h2>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: 22,
              color: "var(--muted)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            <li>Python 3.11+ · pyobjc (AppKit / Quartz) · AppleScript (osascript)</li>
            <li>SQLite 3 (stdlib) · WAL mode · 6 tables</li>
            <li>pywebview 6.2.1 · rumps 0.4 · PyYAML · python-dateutil</li>
            <li>Anthropic SDK · Claude Opus 4.7 · prompt caching</li>
            <li>launchd · 4 plist agents (collector / menubar / lobby / classify)</li>
          </ul>
        </section>

        <section className="divider">
          <h2 className="section-title">{zh ? "数据模型" : "Data model"}</h2>
          <div className="code-block light">
            <pre
              style={{ margin: 0, whiteSpace: "pre", fontSize: "0.82rem" }}
            >{`events                  -- 30s poll rows (app + title + ts + context)
sessions                -- manual switches; may carry an exit-card
state                   -- singleton: current context
inferred_segments       -- classifier output (per-day time slices)
classifier_corrections  -- user overrides, fed back as few-shot
llm_calls               -- cost tracking + budget cap`}</pre>
          </div>
        </section>

        <section className="divider" style={{ textAlign: "center" }}>
          <Link href="/" className="btn btn-outline">
            {zh ? "← 返回首页" : "← Back to home"}
          </Link>
        </section>
      </main>
    </>
  );
}
