"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

const GH = "https://github.com/AutoZYX/chronicler";

/** A real-looking Inferred segment output used as the hero demo. */
const SAMPLE_OUTPUT = `10:12 – 11:27   🎓 jlu    ●●●   75 min
申报教授评审表密集编辑 + 2025-2026 新成果汇总
Heavy editing on the professor-title review form, plus
2025-2026 new-results roll-up

— 编辑申报教授评审表                45 min
  Editing the professor review form
— 整理 2025-2026 新成果              15 min
  Aggregating 2025-2026 publications
— LetPub 期刊 IF 速查                 8 min
  Checking LetPub impact factors

未完事项 · Hanging threads
  · 评审表 2025 成果章节仍在对齐
    2025-results section still needs alignment`;

export default function Home() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <div>
      {/* ─────────── Hero (centered) ─────────── */}
      <section className="text-center pt-6 pb-12">
        <div className="accent-bar mx-auto mb-7">
          <span style={{ background: "var(--acc-jlu)" }} />
          <span style={{ background: "var(--acc-zyt)" }} />
          <span style={{ background: "var(--acc-dr)" }} />
          <span style={{ background: "var(--acc-life)" }} />
        </div>

        <h1
          className="text-4xl sm:text-5xl mb-3"
          style={{ fontFamily: "Playfair Display, Georgia, serif" }}
        >
          Chronicler
        </h1>
        <div className="text-lg text-[var(--muted)] mb-6">观时者</div>

        <p className="text-[var(--text)] text-base max-w-xl mx-auto leading-relaxed mb-8">
          {zh
            ? "一份你自己拥有的 AI 时间账本。观察你在多重身份间的真实工作流向——不评判，只记录。"
            : "An AI-assisted time ledger you own. It watches how your work flows across the identities you switch between — witnessing, not judging."}
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={GH}
            className="px-5 py-2 rounded-md bg-[var(--accent)] text-white text-sm font-medium no-underline hover:opacity-90 transition-opacity"
          >
            {zh ? "GitHub 仓库 →" : "GitHub repo →"}
          </a>
          <a
            href="#install"
            className="px-5 py-2 rounded-md border border-[var(--border)] bg-[var(--card-bg)] text-sm font-medium no-underline text-[var(--text)] hover:bg-[var(--badge-bg)] transition-colors"
          >
            {zh ? "一键安装" : "Install"}
          </a>
        </div>
      </section>

      {/* ─────────── Hero feature: sample output ─────────── */}
      <section className="mb-14">
        <div className="rounded-xl border-2 border-[var(--accent)]/30 bg-[var(--accent)]/5 overflow-hidden">
          <div className="px-5 pt-5 pb-4">
            <div className="flex items-center justify-between mb-1">
              <div className="text-sm font-semibold text-[var(--text)]">
                {zh ? "昨天一小时的样子" : "What an hour looks like"}
              </div>
              <div className="text-xs text-[var(--muted)] font-mono">
                Inferred / 2026-04-20.md
              </div>
            </div>
            <div className="text-xs text-[var(--muted)]">
              {zh
                ? "每晚 23:35，Claude Opus 读过去 24 小时事件流 + 你的 OKR 文件，产出双语分段。"
                : "Every night at 23:35, Claude Opus reads the day's event stream plus your OKR file and produces bilingual segments."}
            </div>
          </div>
          <pre className="mx-0 mb-0 rounded-none bg-[#1a1a18] text-[#ece5d4] px-5 py-4 text-xs leading-relaxed overflow-x-auto font-mono">
            {SAMPLE_OUTPUT}
          </pre>
        </div>
      </section>

      {/* ─────────── What it is ─────────── */}
      <section className="mb-12">
        <h2 className="text-xl mb-3">{zh ? "这是什么" : "What it is"}</h2>

        <p className="text-sm text-[var(--text)] mb-4 leading-relaxed">
          {zh ? (
            <>
              一个 macOS 开源工具。每 30 秒记录你的前台应用 + 窗口标题，
              加上你写下的季度 OKR，每晚让 Claude 把这一天切成带置信度的身份时段，
              并产出中英双语叙事——存进你自己的 Obsidian 仓库。
            </>
          ) : (
            <>
              A macOS open-source tool. Every 30s, it records the frontmost app and
              window title. Combined with the quarterly OKRs you&apos;ve written, Claude
              slices each day into confidence-scored identity segments overnight and
              writes bilingual narratives — into your own Obsidian vault.
            </>
          )}
        </p>

        <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-[var(--muted)]">
          <li>
            {zh
              ? "多身份感知：学者 / 工程师 / 创始人 / 家长在同一天切换，AI 自动识别"
              : "Multi-identity aware: professor / engineer / founder / parent in one day — AI figures out which is which"}
          </li>
          <li>
            {zh
              ? "本地优先：原始事件留在本机 SQLite；只有派生摘要过网到 Claude"
              : "Local-first: raw events stay in local SQLite; only derived summaries cross the network"}
          </li>
          <li>
            {zh
              ? "目标对齐：读你的 life_goals.md，把时间分配与长期 OKR 做描述性关联（不评分）"
              : "Goal-aware: reads your life_goals.md and describes how time relates to your OKRs (never scoring)"}
          </li>
          <li>
            {zh
              ? "每月成本 $1–6：Opus 4.7 + prompt caching + $10 月度预算硬上限"
              : "Costs $1–6/month: Opus 4.7 + prompt caching + hard $10/mo budget cap"}
          </li>
        </ul>
      </section>

      {/* ─────────── Install ─────────── */}
      <section id="install" className="mb-12">
        <h2 className="text-xl mb-3">{zh ? "安装" : "Install"}</h2>

        <p className="text-sm text-[var(--muted)] mb-3">
          {zh
            ? "单命令，约 2 分钟。要求 macOS 15+、Python 3.11+、Anthropic API key。"
            : "One command, ~2 minutes. Requires macOS 15+, Python 3.11+, an Anthropic API key."}
        </p>

        <pre className="rounded-lg bg-[var(--badge-bg)] p-4 text-xs overflow-x-auto font-mono leading-relaxed">
{`git clone https://github.com/AutoZYX/chronicler ~/projects/chronicle
bash ~/projects/chronicle/scripts/install.sh

# then add to ~/.zshrc:
export ANTHROPIC_API_KEY="sk-ant-..."
alias ws="$HOME/projects/chronicle/.venv/bin/ws"`}
        </pre>

        <p className="text-xs text-[var(--muted)] mt-3">
          {zh
            ? "脚本会创建 venv、pip install、初始化本地 SQLite、写入 launchd agents（collector + menu bar + ambient widget）开机自启。"
            : "The script creates a venv, pip installs, initializes local SQLite, and registers launchd agents (collector + menu bar + ambient widget) to start at login."}
        </p>
      </section>

      {/* ─────────── A different kind of Chronicle ─────────── */}
      <section className="mb-12">
        <h2 className="text-xl mb-3">
          {zh
            ? "和 OpenAI Chronicle 的不同"
            : "A different kind of Chronicle"}
        </h2>

        <p className="text-sm text-[var(--muted)] mb-4">
          {zh ? (
            <>
              2026-04 OpenAI 在 Codex 里发布了一个同名的「Chronicle」——读你的屏幕，
              目的是让 Codex 更好地替你写代码。两个产品同名，但意图、
              哲学、归属完全不同。
            </>
          ) : (
            <>
              In April 2026 OpenAI shipped a feature also called &ldquo;Chronicle&rdquo;
              inside Codex — it reads your screen so Codex can write code for you.
              Same word, different intent, different philosophy.
            </>
          )}
        </p>

        <ul className="list-disc list-outside ml-5 space-y-1.5 text-sm text-[var(--muted)]">
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "他们替你做事；这个替你看见。" : "Theirs acts for you. This one witnesses for you."}
            </span>
            {" "}
            {zh
              ? "（柳比歇夫传统 · 观察，不评判）"
              : "(Lyubishchev tradition — observation, never judgment)"}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "他们云端为主，未加密；这个本地优先。" : "Theirs is cloud-first, not encrypted at rest. This one is local-first."}
            </span>
            {" "}
            {zh ? "只有派生摘要过网。" : "Only derived summaries cross the wire."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "他们 $200/月封闭；这个 AGPLv3 开源。" : "Theirs: closed, $200/mo. This one: AGPLv3, free."}
            </span>
            {" "}
            {zh ? "你付自己的 LLM 账单，约 $1-6/月。" : "You pay your own LLM bill — roughly $1–6/mo."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "他们欧盟/英国/瑞士未发售；这个任何地方能用。" : "Theirs isn&apos;t available in EU/UK/CH. This one works anywhere."}
            </span>
          </li>
        </ul>

        <p className="text-xs text-[var(--muted)] mt-3">
          <Link href="/about" className="text-[var(--accent)] hover:underline">
            {zh ? "了解背后的哲学 →" : "Read the philosophy behind this →"}
          </Link>
        </p>
      </section>

      {/* ─────────── Footer links / read more ─────────── */}
      <section className="mb-4 pt-6 border-t border-[var(--border)]">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <Link
            href="/about"
            className="no-underline text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            <div className="font-semibold mb-1">
              {zh ? "关于 · 背后的哲学" : "About · the philosophy"}
            </div>
            <div className="text-xs text-[var(--muted)]">
              {zh
                ? "柳比歇夫 · 观察不评判 · 第三探索 · 三种公开模式"
                : "Lyubishchev · observation vs judgment · 3rdX · three privacy modes"}
            </div>
          </Link>
          <Link
            href="/architecture"
            className="no-underline text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            <div className="font-semibold mb-1">
              {zh ? "架构 · 四层管线" : "Architecture · four-layer pipeline"}
            </div>
            <div className="text-xs text-[var(--muted)]">
              {zh
                ? "采集 → 存储 → 推断 → 呈现"
                : "Collect → store → infer → present"}
            </div>
          </Link>
          <a
            href={GH}
            target="_blank"
            rel="noopener"
            className="no-underline text-[var(--text)] hover:text-[var(--accent)] transition-colors"
          >
            <div className="font-semibold mb-1">GitHub →</div>
            <div className="text-xs text-[var(--muted)]">
              {zh ? "源码 · 文档 · 路线图 · Issues" : "Source · docs · roadmap · issues"}
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
