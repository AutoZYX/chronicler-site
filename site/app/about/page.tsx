"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <>
      <header className="hero container">
        <h1 style={{ fontSize: "3.5vw", minHeight: 0 }}>
          {zh ? "关于 Chronicler" : "About Chronicler"}
        </h1>
        <p className="tagline main">
          {zh
            ? "为什么做这个工具，它想继承什么传统，以及它未来想连接什么。"
            : "Why this tool exists, what tradition it borrows from, and what it hopes to connect to."}
        </p>
      </header>

      <main className="container">
        <section className="divider">
          <h2 className="section-title">
            {zh ? "观察，不评判" : "Observation, never judgment"}
          </h2>
          <div className="content-prose">
            {zh ? (
              <>
                <p>
                  大多数时间追踪工具都预设了「你应该更高效」。
                  Chronicler 的语义只承诺
                  <strong>「我会记下来」</strong>——不承诺多做一些、少做一些、变得更好。
                </p>
                <p className="muted">
                  休息、思考、带娃、阅读、聊天都是一天合法的使用方式。
                  任何生成的叙事都不会使用「浪费」「应该」「不够高效」这类词。
                  这不是一个产品特性，这是产品 DNA。
                </p>
              </>
            ) : (
              <>
                <p>
                  Most time-tracking tools assume{" "}
                  <em>you should be more productive</em>. Chronicler only promises{" "}
                  <strong>&ldquo;I&rsquo;ll write it down&rdquo;</strong> — no
                  implicit demand that you do more, do less, or get better.
                </p>
                <p className="muted">
                  Rest, thinking, parenting, reading, conversation — all legitimate
                  uses of a day. No generated narrative uses words like
                  &ldquo;wasted,&rdquo; &ldquo;should have,&rdquo; or
                  &ldquo;inefficient.&rdquo; This isn&rsquo;t a feature — it&rsquo;s the
                  product&rsquo;s DNA.
                </p>
              </>
            )}
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">
            {zh ? "柳比歇夫的账本" : "Lyubishchev's ledger"}
          </h2>
          <div className="content-prose">
            {zh ? (
              <>
                <p>
                  1918 年，苏联昆虫学家 Alexander Lyubishchev
                  开始用笔纸做「时间账本法」（Time Accounting）。
                  他坚持 56 年，每天 30 分钟记账，
                  以一人之力做出 6 个领域的世界级科研。
                </p>
                <p>
                  他的方法在当时是革命性的，但它有一个不可承受的代价——
                  每天 30 分钟手工记账。
                  <strong>AI 让这件事近乎零成本。</strong>
                </p>
                <p className="muted">
                  Chronicler 不要求你做任何记账。它观察、归档、写下。
                  柳比歇夫的纪律，变成系统的副作用。
                </p>
              </>
            ) : (
              <>
                <p>
                  In 1918, Soviet entomologist Alexander Lyubishchev began
                  hand-logging his time with pen and paper. He kept it up for
                  56 years — 30 minutes every day — and produced world-class
                  research in six fields single-handedly.
                </p>
                <p>
                  His method was revolutionary but carried an unacceptable cost:
                  thirty minutes of manual accounting, daily.{" "}
                  <strong>AI makes this nearly free.</strong>
                </p>
                <p className="muted">
                  Chronicler asks nothing of you. It observes, files, writes down.
                  Lyubishchev&rsquo;s discipline becomes a side-effect of the system.
                </p>
              </>
            )}
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">
            {zh ? "三种模式 · 两个滑块" : "Three modes · two sliders"}
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "1rem",
              maxWidth: 720,
              marginBottom: 20,
            }}
          >
            {zh
              ? "不是三个独立产品，是一个产品两个配置维度：LLM 后端 + 公开范围。随时切换。"
              : "Not three separate products — one product with two config dimensions: LLM backend and publish scope. Switch anytime."}
          </p>
          <div className="card-grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
            <div className="card">
              <h3>Private</h3>
              <p>
                {zh
                  ? "搭配本地模型（Ollama / MLX / Apple Intelligence）。数据永不离开你的 Mac。适合保密度高的企业 / 科研 / 医疗 / 法律场景。"
                  : "Paired with a local model (Ollama / MLX / Apple Intelligence). Data never leaves your Mac. Fits regulated work."}
              </p>
            </div>
            <div className="card">
              <h3>
                Selective{" "}
                <span
                  style={{
                    fontSize: "0.7em",
                    color: "var(--accent)",
                    fontWeight: 600,
                  }}
                >
                  {zh ? "· 默认" : "· default"}
                </span>
              </h3>
              <p>
                {zh
                  ? "按身份粒度决定哪些可公开。每天一次 review → commit 到你自己的 GitHub。"
                  : "Pick publish scope per-identity. Daily review → commit to your own GitHub."}
              </p>
            </div>
            <div className="card">
              <h3>Network</h3>
              <p>
                {zh
                  ? "选择性 + 接入 chronicler.community 聚合层。AI 帮你发现目标重叠的潜在合作者。"
                  : "Selective + chronicler.community aggregator. AI surfaces potential collaborators with overlapping goals."}
              </p>
            </div>
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">
            {zh ? "一个更远的目的" : "A further purpose"}
          </h2>
          <div className="content-prose">
            {zh ? (
              <>
                <p>
                  这个工具只是起点。维护者有一条延续 4+ 年的主线——
                  <a
                    href="https://3rdx.autozyx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    第三探索（3rdX）
                  </a>
                  ：探索那些为人类命运共同体而努力的尝试，
                  从智能运载工具延伸到无人机、矿山机械、eVTOL、月球车、火星载人车。
                </p>
                <p>
                  v0.3 的 Network 模式本质上是为 3rdX 社群做的基础设施——
                  <strong>
                    如果你的工作是为人类长期利益服务，Chronicler
                    帮你把自己这点时间看清楚；也帮你找到同样在看另一颗星星的人。
                  </strong>
                </p>
                <p className="muted">
                  如果这听起来和你的工作相关，欢迎去{" "}
                  <a
                    href="https://github.com/AutoZYX/chronicler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  关注，或发邮件到{" "}
                  <a href="mailto:hello@autozyx.com">hello@autozyx.com</a>。
                </p>
              </>
            ) : (
              <>
                <p>
                  This tool is only a starting point. The maintainer has a
                  four-year dormant thread —{" "}
                  <a
                    href="https://3rdx.autozyx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Third Exploration (3rdX)
                  </a>
                  : exploring attempts made on behalf of our long-term shared future —
                  from intelligent vehicles out to drones, mining machinery, eVTOL,
                  lunar rovers, and crewed Mars vehicles.
                </p>
                <p>
                  Network mode in v0.3 is infrastructure for that community.{" "}
                  <strong>
                    If your work is in service of humanity&rsquo;s longer future,
                    Chronicler helps you see your own hours clearly — and helps you
                    find others looking at the same star.
                  </strong>
                </p>
                <p className="muted">
                  If that resonates, follow on{" "}
                  <a
                    href="https://github.com/AutoZYX/chronicler"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  , or drop a note to{" "}
                  <a href="mailto:hello@autozyx.com">hello@autozyx.com</a>.
                </p>
              </>
            )}
          </div>
        </section>

        <section className="divider">
          <h2 className="section-title">{zh ? "路线图" : "Roadmap"}</h2>
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
              <strong style={{ color: "var(--accent)" }}>v0.1</strong>{" "}
              ({zh ? "2026 Q2 · 期待上线" : "Q2 2026 · shipping soon"}) —{" "}
              {zh
                ? "collector / 分类器 / 双语 digest / ambient widget / menubar / toast / Selective 模式"
                : "collector, AI classifier, bilingual digests, ambient widget, menu bar, toast, Selective mode"}
            </li>
            <li>
              <strong>v0.2</strong> —{" "}
              {zh
                ? "本地 LLM 支持（Ollama / MLX / Apple Intelligence）· Private 模式完整可用"
                : "local-LLM support (Ollama / MLX / Apple Intelligence) · Private mode fully usable"}
            </li>
            <li>
              <strong>v0.3</strong> —{" "}
              {zh
                ? "chronicler.community 聚合层 · 跨成员目标匹配 · 与 3rdX 社群合作"
                : "chronicler.community aggregator · cross-member goal matching · 3rdX partnership"}
            </li>
          </ul>
        </section>

        <section className="divider">
          <div className="content-prose">
            <blockquote
              style={{
                borderLeft: "4px solid var(--accent)",
                paddingLeft: 20,
                fontStyle: "italic",
                color: "var(--muted)",
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: "1.1rem",
                margin: "8px 0",
              }}
            >
              {zh
                ? "「一份你愿意的话可以共享的工作账本。它不会要你做得更多，只会让你看见你在做什么。」"
                : "\u201cA work ledger you can share if you want to. It won\u2019t ask you to do more \u2014 it will only let you see what you\u2019re doing.\u201d"}
            </blockquote>
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
