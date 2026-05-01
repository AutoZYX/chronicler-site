"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

const GH_TOOL = "https://github.com/AutoZYX/chronicler";       // placeholder (coming soon)
const GH_SITE = "https://github.com/AutoZYX/chronicler-site";  // this landing page
const NOTIFY = "mailto:hello@autozyx.com?subject=Chronicler%20v0.1%20launch%20notify&body=Please%20let%20me%20know%20when%20Chronicler%20ships.";

const SAMPLE_OUTPUT = `Day: 2026-04-15 · Tuesday · what was on the screen

08:00 – 10:10   🛡 safety     ●●●     130 min
HARA review for L3 release — async team block
L3 项目 HARA 评审——异步团队时段

— SOTIF scenarios catalog                   68 min
  SOTIF 场景目录梳理
— Hazard log v4 review                      42 min
  危险分析日志 v4 评审
— Engineer threads on Lark                  20 min
  飞书工程师沟通

Hanging · Hazard log v4 — 5 项 risk 未签字
         Hazard log v4 — 5 risk items pending sign-off

───────────────────────────────────────────────

10:25 – 12:05   🎓 research   ●●●     100 min
Grant proposal revision — first focused block in two weeks
课题申请修订——两周来第一个集中块

— Overleaf · proposal.tex                   70 min
  Overleaf 改提案正文
— Literature cross-check                    20 min
  查相关先验文献
— Student DM reply                          10 min
  给学生简短回复

Hanging · Discussion section 还差一段——明天接着写
         Discussion section needs one more paragraph

───────────────────────────────────────────────

13:35 – 14:30   ✈️ founder    ●●○      55 min
Founder block — partner ping + blog draft
创始人时段——合作方对接 + 博客起草

— Email with potential partner              22 min
  合作方邮件沟通
— Substack draft (open-source post)         25 min
  Substack 草稿
— GitHub · 1 PR review                       8 min
  review 1 个 PR

───────────────────────────────────────────────

14:40 – 15:50   🛡 safety     ●●○      70 min
Weekly review + client memo v3
周会笔记 + 客户备忘录 v3

— Memo v3 — conclusion section              45 min
  Memo v3 结论章节
— Async DM with safety team                 25 min
  与安全团队异步沟通

Hanging · Memo v3 结论章节未完
         Memo v3 conclusion still pending

═══════════════════════════════════════════════

Summary · 一天总览

  🛡 safety   200 min / 3h 20m   HARA review + memo v3 + team async
  🎓 research 100 min / 1h 40m   Grant writing
  ✈️ founder   55 min / 0h 55m   Partner + blog + PR review

  Total observed on screen: 355 min / 5h 55m
  屏幕外的时间 (家人 / 孩子 / 散步 / 睡眠) 不进 Chronicler — by design.
  Off-screen life is left untracked — the tool does not surveil away from the keyboard.

  Cross-day threads · 跨天主线
    · Hazard log v4 sign-off (today → tomorrow)
    · Discussion section (today → tomorrow)
    · Memo v3 conclusion (started today, pending)

* identity keys (research / safety / founder) are user-configurable
  身份 key 完全由用户自定义，此处为虚构示例`;

export default function Home() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <>
      {/* ═══════════════════════════ HERO ═══════════════════════════ */}
      <header className="hero container">
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
          <div className="accent-bar">
            <span style={{ background: "var(--acc-jlu)" }} />
            <span style={{ background: "var(--acc-zyt)" }} />
            <span style={{ background: "var(--acc-dr)" }} />
            <span style={{ background: "var(--acc-life)" }} />
          </div>
        </div>

        <h1>Chronicler</h1>

        <p className="tagline-loud">
          {zh ? "观时者" : "AN AI-ASSISTED TIME LEDGER"}
        </p>

        <p className="tagline main">
          {zh
            ? "你自己拥有的 AI 时间账本。观察多重身份间的真实工作流向——不评判，只记录。柳比歇夫的时间账本法，在 AI 时代几乎零成本。"
            : "Observes your work across the identities you switch between. Writes bilingual daily digests into your Obsidian vault. Witnessing, never judging. Lyubishchev's time-accounting method, made nearly free by AI."}
        </p>

        <p
          className="tagline"
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            fontStyle: "italic",
            marginTop: -4,
          }}
        >
          {zh
            ? "不替你写代码。不喂别的 Agent。它给你——多身份知识工作者——写每日简报。"
            : "Not for AI. Not for Agents. For you — the multi-identity knowledge worker — written into your inbox every night."}
        </p>

        <div className="hero-buttons">
          <a
            href={GH_TOOL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            {zh ? "Star on GitHub ★" : "Star on GitHub ★"}
          </a>
          <a href={NOTIFY} className="btn btn-outline">
            {zh ? "期待上线 · Notify me" : "Notify me on launch"}
          </a>
          <a href="#why" className="btn btn-outline">
            {zh ? "了解更多" : "Learn more"}
          </a>
        </div>
      </header>

      {/* ═══════════════════════════ STATS BAR ═══════════════════════════ */}
      <div className="stats container">
        <div className="stat">
          <span className="stat-number">v0.1</span>
          <span className="stat-label">
            {zh ? "当前版本" : "Current version"}
          </span>
        </div>
        <div className="stat">
          <span className="stat-number">Q2 &apos;26</span>
          <span className="stat-label">
            {zh ? "预计发布" : "Expected ship"}
          </span>
        </div>
        <div className="stat">
          <span className="stat-number">AGPLv3</span>
          <span className="stat-label">
            {zh ? "许可证" : "License"}
          </span>
        </div>
        <div className="stat">
          <span className="stat-number">$1–6</span>
          <span className="stat-label">
            {zh ? "月度成本" : "Per month"}
          </span>
        </div>
      </div>

      <main className="container">
        {/* ═══════════════════════════ WHY THIS EXISTS ═══════════════════════════ */}
        <section id="why" className="divider">
          <div className="alert">
            <div className="alert-title">
              {zh ? "为什么做这个项目？" : "Why does this project exist?"}
            </div>
            <div className="alert-text">
              {zh ? (
                <>
                  1918 年苏联昆虫学家柳比歇夫（Alexander Lyubishchev）开始用笔纸做
                  「时间账本法」。他坚持 56 年，每天 30 分钟手工记账，
                  以一人之力做出 6 个领域的世界级科研。
                  <strong>他的方法在当时是革命性的，但有一个不可承受的代价——每天 30 分钟。</strong>
                  {" "}AI 让这件事几乎零成本。Chronicler 不要求你做任何记账：
                  它观察、归档、写下。柳比歇夫的纪律，变成系统的副作用。
                </>
              ) : (
                <>
                  In 1918 Soviet entomologist Alexander Lyubishchev began hand-logging
                  his time with pen and paper. He kept it up for 56 years, producing
                  world-class research in six fields single-handedly.
                  <strong> His method was revolutionary — but cost 30 minutes
                    of daily accounting.</strong>{" "}
                  AI makes that cost nearly zero. Chronicler asks nothing of you:
                  it observes, files, writes down. Lyubishchev&rsquo;s discipline
                  becomes a side-effect of the system.
                </>
              )}
            </div>
          </div>

          <h2 className="section-title">
            {zh ? "四大支柱" : "Four Pillars"}
          </h2>

          <div className="pillars">
            <div className="pillar-card">
              <span className="pillar-icon">🎭</span>
              <h3>{zh ? "多身份感知" : "Multi-identity aware"}</h3>
              <p>
                {zh
                  ? "学者 / 工程师 / 创始人 / 家长 在同一天切换——AI 自动识别。忘记手动切也没关系。"
                  : "Professor / engineer / founder / parent in a single day — the AI infers which is which. No need to remember to switch."}
              </p>
            </div>
            <div className="pillar-card">
              <span className="pillar-icon">🏠</span>
              <h3>{zh ? "本地优先" : "Local-first"}</h3>
              <p>
                {zh
                  ? "原始事件留在本机 SQLite，永不上云。只有派生摘要过网到 Claude API。"
                  : "Raw events stay in local SQLite — never leave your Mac. Only derived summaries cross the network."}
              </p>
            </div>
            <div className="pillar-card">
              <span className="pillar-icon">🎯</span>
              <h3>{zh ? "目标对齐" : "Goal-aware"}</h3>
              <p>
                {zh
                  ? "读你的 life_goals.md——OKR、5 年愿景、长期承诺。描述时间与目标的关系，但永不评分。"
                  : "Reads your life_goals.md — OKRs, 5-year vision, long-term commitments. Describes the relationship. Never scores it."}
              </p>
            </div>
            <div className="pillar-card">
              <span className="pillar-icon">⚡</span>
              <h3>{zh ? "低成本" : "$1–6 a month"}</h3>
              <p>
                {zh
                  ? "Claude Opus 4.7 + Anthropic prompt caching。$10 月度预算硬上限。超预算自动降级。"
                  : "Claude Opus 4.7 with prompt caching. Hard $10/mo budget cap with graceful degradation if exceeded."}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ SAMPLE OUTPUT ═══════════════════════════ */}
        <section className="divider">
          <h2 className="section-title">
            {zh ? "一天的样子" : "What a day looks like"}
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: 18,
              maxWidth: 720,
            }}
          >
            {zh ? (
              <>
                虚构示例——一位学者 / 安全工程师 / 独立创始人在屏幕前的典型一天。
                每晚 23:35，Claude Opus 读过去 24 小时事件流 + 你的 OKR 文件，
                产出双语分段。写进你自己的 Obsidian vault——iCloud 同步，iOS 可读。
                屏幕之外的时间——家人、孩子、散步、睡眠——不进 Chronicler。
              </>
            ) : (
              <>
                A fictional example — one day at the keyboard for someone who is
                simultaneously an academic, a safety engineer, and an indie founder.
                Each night at 23:35, Claude Opus reads the day&rsquo;s event stream
                plus your OKR file and emits bilingual segments into your Obsidian
                vault (iCloud-synced, iOS-readable). Time away from the screen —
                family, kids, walks, sleep — stays out of Chronicler by design.
              </>
            )}
          </p>
          <div className="code-block">
            <pre style={{ margin: 0, whiteSpace: "pre" }}>{SAMPLE_OUTPUT}</pre>
          </div>
          <p
            style={{
              marginTop: 10,
              fontFamily: "SF Mono, Menlo, monospace",
              fontSize: "0.85rem",
              color: "var(--muted)",
            }}
          >
            Inferred / 2026-04-15.md
          </p>
        </section>

        {/* ═══════════════════════════ Three Chronicles ═══════════════════════════ */}
        <section className="divider">
          <h2 className="section-title">
            {zh
              ? "三种 Chronicle · 三种哲学"
              : "Three Chronicles, three philosophies"}
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: 20,
              maxWidth: 760,
            }}
          >
            {zh ? (
              <>
                2026-04-20 OpenAI 在 Codex 里发布了同名的「Chronicle」（让 AI 替你写代码）；48 小时后，Vida 团队发布了「
                <a
                  href="https://github.com/Einsia/OpenChronicle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenChronicle
                </a>
                」（把记忆做成可被任意 Agent 调用的基础设施）。同样是「读屏幕」，但所在层、目标用户、输出形式完全不同。Chronicler 是其中第三条路：不喂 AI · 不替你做 ·{" "}
                <strong>给你写每日简报</strong>。
              </>
            ) : (
              <>
                On 2026-04-20 OpenAI shipped a feature called {"“"}Chronicle{"”"} inside Codex (lets AI write code for you). 48 hours later, the Vida team released{" "}
                <a
                  href="https://github.com/Einsia/OpenChronicle"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OpenChronicle
                </a>{" "}
                (turns memory into infrastructure for any AI agent). Same idea of {"“"}reading the screen{"”"}, totally different layer. Chronicler is the third path — neither a tool for AI nor automation for you, but a daily{" "}
                <strong>witness writing back to your inbox</strong>.
              </>
            )}
          </p>

          <div style={{ overflowX: "auto" }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>{zh ? "维度" : "Dimension"}</th>
                  <th>OpenAI Chronicle</th>
                  <th>OpenChronicle</th>
                  <th style={{ color: "var(--accent)" }}>
                    Chronicler · 观时者
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>{zh ? "动机" : "Intent"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "让 AI 替你做事" : "AI acts for you"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "给 AI 喂上下文" : "Feed context to AI"}
                  </td>
                  <td>{zh ? "让 AI 替你看见" : "AI witnesses for you"}</td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "给谁用" : "Built for"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "ChatGPT Pro 订阅用户" : "ChatGPT Pro subscribers"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh
                      ? "AI 开发者 · Cursor / Codex 用户"
                      : "AI developers · Cursor / Codex users"}
                  </td>
                  <td>
                    {zh
                      ? "多身份知识工作者"
                      : "Multi-identity knowledge workers"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "你拿到什么" : "What you get"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "Codex 写代码更准" : "Smarter Codex completions"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh
                      ? "可被多 Agent 共享的记忆层 (MCP)"
                      : "A memory layer any agent can call (MCP)"}
                  </td>
                  <td>
                    {zh
                      ? "每日双语简报 · OKR 对齐 · 金句"
                      : "Daily bilingual briefing · OKR alignment · pithy quote"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "哲学" : "Philosophy"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "“比你更懂你”" : "“Knows you better”"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "记忆是基础设施" : "Memory is infrastructure"}
                  </td>
                  <td>
                    {zh
                      ? "观察，不评判（柳比歇夫）"
                      : "Observation, not judgment (Lyubishchev)"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "数据归属" : "Data ownership"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "OpenAI 服务器" : "OpenAI servers"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh
                      ? "本地 · Markdown + SQLite"
                      : "Local · Markdown + SQLite"}
                  </td>
                  <td>
                    {zh
                      ? "你的 Obsidian · 你的 GitHub"
                      : "Your Obsidian · your GitHub"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "开源 / 价格" : "Open / pricing"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "封闭 · $200 / 月" : "Closed · $200/mo"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "MIT 开源 · 免费" : "MIT · free"}
                  </td>
                  <td>
                    {zh ? "AGPLv3 · 约 $1–6 / 月" : "AGPLv3 · ~$1–6/mo"}
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>{zh ? "可用" : "Availability"}</strong>
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "欧盟 / 英国 / 瑞士未发售" : "Not in EU / UK / CH"}
                  </td>
                  <td style={{ color: "var(--muted)" }}>
                    {zh ? "任何地方" : "Anywhere"}
                  </td>
                  <td>{zh ? "任何地方" : "Anywhere"}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            style={{
              marginTop: 18,
              fontSize: "0.95rem",
              color: "var(--muted)",
              maxWidth: 760,
              fontStyle: "italic",
            }}
          >
            {zh
              ? "三个项目互为补充，不是 zero-sum。OpenChronicle 让别的 Agent 拥有上下文；Chronicler 让你自己看清自己的时间。"
              : "These three are complements, not rivals. OpenChronicle gives other agents context; Chronicler gives you back a view of your own time."}
          </p>

          <p style={{ marginTop: 12, fontSize: "0.95rem" }}>
            <Link href="/about">
              {zh ? "了解背后的哲学 →" : "Read the philosophy behind this →"}
            </Link>
          </p>
        </section>

        {/* ═══════════════════════════ WHO IS THIS FOR ═══════════════════════════ */}
        <section className="divider">
          <h2 className="section-title">
            {zh ? "面向用户" : "Who is this for?"}
          </h2>
          <div className="card-grid">
            <div className="card">
              <span className="emoji">🎓</span>
              <h3>
                {zh ? "多重身份工作者" : "Multi-identity workers"}
              </h3>
              <p>
                {zh
                  ? "学者 + 顾问 + 创始人 + 家长在同一天里切换的人——最初的核心用户。"
                  : "People who switch between academic / consulting / founder / parenting in a single day — the original core users."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">📚</span>
              <h3>
                {zh ? "独立研究者 / 作者" : "Indie researchers & writers"}
              </h3>
              <p>
                {zh
                  ? "Gwern / Simon Willison 式的长期公开工作者——按自己意愿选择哪些段落公开给世界。"
                  : "Gwern / Simon Willison — long-haul public-work practitioners. Publish the parts you choose, on your own terms."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">🌍</span>
              <h3>
                {zh ? "使命驱动者" : "Mission-driven folks"}
              </h3>
              <p>
                {zh
                  ? "工作服务于人类长期利益——气候、健康、安全、教育、行星探索。Chronicler 是未来 3rdX 社群的基础设施。"
                  : "Work in service of humanity's longer future — climate, health, safety, education, planetary exploration. Chronicler is future infrastructure for the 3rdX community."}
              </p>
            </div>
            <div className="card">
              <span className="emoji">🕰️</span>
              <h3>
                {zh ? "柳比歇夫传承者" : "Lyubishchev practitioners"}
              </h3>
              <p>
                {zh
                  ? "Quantified Self · Bullet journal 社群——已经在做时间账本，只是想让它零手工负担。"
                  : "Quantified Self, Bullet-journal communities — already keeping time ledgers, want the manual burden to disappear."}
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ COMING SOON CTA ═══════════════════════════ */}
        <section className="divider">
          <div className="coming-soon">
            <span className="coming-soon-kicker">
              {zh ? "期待上线" : "Coming Soon"}
            </span>
            <h3>{zh ? "v0.1 预计 2026 Q2 开源发布" : "v0.1 expected Q2 2026"}</h3>
            <p>
              {zh
                ? "核心功能已完成并在作者本机日用测试中。正在打磨分类器准确率、本地模型 fallback、以及完整的 macOS 安装体验。Star 仓库获取发布通知，或发邮件加入 early-preview 名单。"
                : "Core is built and in daily use on the author's own machine. Polishing classifier accuracy, local-model fallback, and the full macOS install experience. Star the repo to get release notifications, or drop an email for early-preview access."}
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 12,
                flexWrap: "wrap",
              }}
            >
              <a
                href={GH_TOOL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                {zh ? "Star · AutoZYX/chronicler" : "Star · AutoZYX/chronicler"}
              </a>
              <a href={NOTIFY} className="btn btn-outline">
                {zh ? "写信请求 early preview" : "Request early preview"}
              </a>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════ OPEN SOURCE STATUS ═══════════════════════════ */}
        <section className="divider">
          <h2 className="section-title">
            {zh ? "开源 · 相关项目" : "Open source · related projects"}
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              marginBottom: 16,
              maxWidth: 720,
            }}
          >
            {zh
              ? "Chronicler 与作者其他开源项目共享品牌与方法论——都是围绕「AD 安全 / SOTIF / 开源知识基础设施」主题的小型单人公司项目。"
              : "Chronicler shares methodology with the author's other open-source projects — a family of small-team efforts around AD safety, SOTIF, and open knowledge infrastructure."}
          </p>
          <ul
            style={{
              listStyle: "disc",
              paddingLeft: 22,
              color: "var(--muted)",
              fontSize: "0.95rem",
              lineHeight: 1.8,
            }}
          >
            <li>
              <a
                href="https://roam.autozyx.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ROAM
              </a>
              {" — "}
              {zh
                ? "L4 Robotaxi 远程运营事件数据库 + 27 场景分类 + 三层参考架构"
                : "L4 robotaxi incident database + 27-scenario taxonomy + 3-layer reference architecture"}
            </li>
            <li>
              <a
                href="https://standards.autozyx.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                AD Standards Tracker
              </a>
              {" — "}
              {zh
                ? "全球自动驾驶法规 / 标准 / 征求意见稿动态追踪（中英双语）"
                : "Global bilingual tracker for AD regulations, standards, consultations"}
            </li>
            <li>
              <a
                href="https://3rdx.autozyx.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                3rdX · 第三探索
              </a>
              {" — "}
              {zh
                ? "脚踏实地，仰望星空——从量产安全到行星探索的使命连续体"
                : "From production-grade safety to planetary exploration — a continuity of long-horizon missions"}
            </li>
            <li>
              <a
                href={GH_SITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                This site (source)
              </a>
              {" — "}
              {zh
                ? "Next.js + Tailwind，AGPLv3，贡献欢迎"
                : "Next.js + Tailwind, AGPLv3, contributions welcome"}
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
