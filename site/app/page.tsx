"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

const GH = "https://github.com/AutoZYX/chronicler";

const SAMPLE_OUTPUT = `10:12 – 11:27   🎓 jlu    ●●●   75 min
申报教授评审表密集编辑 + 2025-2026 新成果汇总
Heavy editing on the professor-title review form,
plus 2025-2026 new-results roll-up

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
    <div className="max-w-3xl">
      {/* Accent identity bar — four context colors as a visual motif */}
      <div className="accent-bar mb-5">
        <span style={{ background: "var(--acc-jlu)" }} />
        <span style={{ background: "var(--acc-zyt)" }} />
        <span style={{ background: "var(--acc-dr)" }} />
        <span style={{ background: "var(--acc-life)" }} />
      </div>

      {/* h1 + description — left-aligned, same rhythm as ROAM */}
      <h1 className="text-3xl mb-4">Chronicler · 观时者</h1>
      <p className="text-[var(--muted)] mb-8">
        {zh
          ? "一份你自己拥有的 AI 时间账本。观察你在多重身份间的真实工作流向——不评判，只记录。柳比歇夫时间账本法，在 AI 时代几乎零成本。"
          : "An AI-assisted time ledger you own. It watches how your work flows across the identities you switch between — witnessing, not judging. Lyubishchev's time-accounting method, made nearly free by AI."}
      </p>

      {/* Install hero CTA — mirrors ROAM's \"Ask ROAM\" accent box */}
      <div className="rounded-xl border-2 border-[var(--accent)]/40 bg-[var(--accent)]/5 p-5 mb-10">
        <div className="flex flex-wrap items-start gap-3 justify-between mb-3">
          <div>
            <p className="font-semibold text-[var(--text)] mb-1">
              {zh ? "一键安装 · Install" : "Install · 一键安装"}
            </p>
            <p className="text-sm text-[var(--muted)]">
              {zh
                ? "macOS 15+ · Python 3.11+ · 需要一个 Anthropic API key · 约 2 分钟"
                : "macOS 15+ · Python 3.11+ · needs an Anthropic API key · ~2 minutes"}
            </p>
          </div>
          <a
            href={GH}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-md bg-[var(--accent)] text-white text-sm font-medium no-underline hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            {zh ? "GitHub 仓库 →" : "GitHub repo →"}
          </a>
        </div>
        <pre className="rounded-lg bg-[var(--card-bg)] border border-[var(--border)] p-3 text-xs overflow-x-auto font-mono leading-relaxed text-[var(--text)]">
{`git clone https://github.com/AutoZYX/chronicler ~/projects/chronicle
bash ~/projects/chronicle/scripts/install.sh`}
        </pre>
      </div>

      {/* Section: What it is */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">{zh ? "这是什么" : "What it is"}</h2>
        <div className="space-y-3 text-sm leading-relaxed">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              {zh ? "多身份感知" : "Multi-identity aware"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "学者 / 工程师 / 创始人 / 家长 在同一天切换——AI 通过你的应用、窗口标题、时间模式自动识别。忘记手动切换也没关系。"
                : "Professor / engineer / founder / parent across a single day — AI infers which is which from app usage, window titles, and time patterns. You don't have to remember to switch manually."}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              {zh ? "本地优先" : "Local-first"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "原始事件（你打开过的应用与窗口标题）留在本机 SQLite，永不上云。只有派生摘要过网络到 Claude API。"
                : "Raw events (which apps and window titles) stay in a local SQLite file and never leave your Mac. Only derived summaries cross the network to the Claude API."}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              {zh ? "目标对齐（不评分）" : "Goal-aware (never scoring)"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "读你写下的 life_goals.md——季度 OKR、年度目标、5 年愿景、长期 commitments。每晚的 digest 会描述时间分配与目标的关系，但永远不评价。"
                : "Reads your life_goals.md — quarterly OKRs, annual goals, 5-year vision, long-term commitments. Nightly digests describe how time relates to goals, but never evaluate."}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              {zh ? "每月 $1–6" : "$1–6 per month"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "Claude Opus 4.7 + Anthropic prompt caching · $10 / 月硬性预算上限 · 超预算自动降级到本地关键词分类。"
                : "Claude Opus 4.7 with Anthropic prompt caching · hard $10/mo budget cap · graceful degradation to a local keyword classifier if the cap is hit."}
            </p>
          </div>
        </div>
      </section>

      {/* Section: Sample output */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "一段一小时的样子" : "What an hour looks like"}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)] mb-3">
          {zh
            ? "每晚 23:35，Claude Opus 读过去 24 小时事件流 + 你的 OKR 文件，产出双语分段。落到 Obsidian 的 Markdown 文件里——iCloud 同步，iOS Obsidian 可读。"
            : "Each night at 23:35, Claude Opus reads the day's event stream plus your OKR file and emits bilingual segments. Written as Markdown into your Obsidian vault — iCloud-synced, iOS-readable."}
        </p>
        <pre className="rounded-lg bg-[var(--badge-bg)] p-4 text-xs overflow-x-auto font-mono leading-relaxed">
          {SAMPLE_OUTPUT}
        </pre>
        <p className="text-xs text-[var(--muted)] mt-2 font-mono">
          Inferred / 2026-04-20.md
        </p>
      </section>

      {/* Section: How it works */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">{zh ? "工作流程" : "How it works"}</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 text-[var(--muted)]">
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "采集（Collect）—" : "Collect —"}
            </span>{" "}
            {zh
              ? "每 30s 记录前台应用 + 窗口标题到本机 SQLite。用户超过 5 分钟无操作自动暂停。"
              : "every 30s, record the frontmost app + window title to local SQLite. Auto-pauses after 5 min of inactivity."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "锚点（可选）—" : "Optional anchors —"}
            </span>{" "}
            {zh
              ? "ws jlu / zyt / dr / life 手动声明身份——作为高权重锚点，但不必每次都切。"
              : "ws jlu / zyt / dr / life as high-weight hints for the classifier. Never required."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "分类（Classify）—" : "Classify —"}
            </span>{" "}
            {zh
              ? "每晚一次，Claude Opus 读过去 24h 事件流 + 手动锚点 + OKR 文件，切成带置信度的身份时段。"
              : "nightly, Claude Opus reads the 24h event stream + anchors + OKR file, emits time segments with confidence."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "叙事（Reflect）—" : "Reflect —"}
            </span>{" "}
            {zh
              ? "写入你的 Obsidian：每日 digest、离场卡片、周报——中文在上，英文在下。"
              : "writes to your Obsidian: daily digests, exit cards, weekly rollups — bilingual, Chinese first."}
          </li>
        </ul>
      </section>

      {/* Section: Different from OpenAI's Chronicle */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh
            ? "和 OpenAI Chronicle 的不同"
            : "A different kind of Chronicle"}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)] mb-3">
          {zh
            ? "2026-04 OpenAI 在 Codex 里发布了一个同名的「Chronicle」——读你的屏幕，目的是让 Codex 更好地替你写代码。两个产品同名，但意图、哲学、归属完全不同。"
            : "In April 2026 OpenAI shipped a feature also called \u201cChronicle\u201d inside Codex — it reads your screen so Codex can write code for you. Same word, different intent, different philosophy."}
        </p>
        <ul className="list-disc list-inside text-sm space-y-1.5 text-[var(--muted)]">
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "替你做事 vs 替你看见" : "Acts for you vs. witnesses for you"}
            </span>
            {" — "}
            {zh
              ? "他们优化 Codex 的上下文推断；这个继承柳比歇夫传统，观察而不评判。"
              : "theirs optimizes Codex's context inference; this inherits Lyubishchev's tradition — observation, not evaluation."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "云端 vs 本地优先" : "Cloud vs. local-first"}
            </span>
            {" — "}
            {zh
              ? "他们云端为主且未加密；这个的原始事件永不离开你的 Mac。"
              : "theirs is cloud-first and unencrypted at rest; this one never lets raw events leave your Mac."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "封闭 $200/月 vs AGPLv3 开源" : "Closed at $200/mo vs. AGPLv3"}
            </span>
            {" — "}
            {zh
              ? "你付自己的 LLM 账单（约 $1–6/月），代码在 GitHub 公开。"
              : "you pay your own LLM bill (~$1–6/mo); the code lives open on GitHub."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">
              {zh ? "欧盟/英国/瑞士未发售 vs 任何地方可用" : "Not in EU/UK/CH vs. available anywhere"}
            </span>
            {" — "}
            {zh
              ? "中文与东亚用户、在英国访学的人，现在就能用。"
              : "Chinese + East-Asian users, UK-based academics — usable today."}
          </li>
        </ul>
        <p className="text-sm text-[var(--muted)] mt-4">
          <Link
            href="/about"
            className="text-[var(--accent)] hover:underline no-underline"
          >
            {zh ? "了解背后的哲学 →" : "Read the philosophy behind this →"}
          </Link>
        </p>
      </section>

      {/* Section: License & contributing */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "开源 · 贡献" : "Open source · contributing"}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)]">
          {zh ? (
            <>
              软件代码{" "}
              <a
                href={GH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub · AutoZYX/chronicler
              </a>
              （AGPLv3）。欢迎 Issue 反馈、PR 贡献、修正 classifier 的分类逻辑。
              学术合作 / 媒体咨询联系{" "}
              <a
                href="mailto:hello@autozyx.com"
                className="text-[var(--accent)] hover:underline"
              >
                hello@autozyx.com
              </a>
              。
            </>
          ) : (
            <>
              Source on{" "}
              <a
                href={GH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline"
              >
                GitHub · AutoZYX/chronicler
              </a>{" "}
              (AGPLv3). Issues, PRs, and classifier-logic improvements welcome.
              For academic or press inquiries:{" "}
              <a
                href="mailto:hello@autozyx.com"
                className="text-[var(--accent)] hover:underline"
              >
                hello@autozyx.com
              </a>
              .
            </>
          )}
        </p>
      </section>
    </div>
  );
}
