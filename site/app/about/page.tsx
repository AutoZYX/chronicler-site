"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function About() {
  const { lang } = useLang();
  const zh = lang === "zh";

  return (
    <div className="max-w-3xl">
      <h1 className="text-3xl mb-4">
        {zh ? "关于 Chronicler" : "About Chronicler"}
      </h1>
      <p className="text-[var(--muted)] mb-8">
        {zh
          ? "为什么做这个工具，它想继承什么传统，以及它未来想连接什么。"
          : "Why this tool exists, what tradition it borrows from, and what it hopes to connect to."}
      </p>

      {/* Observation, never judgment */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "观察，不评判" : "Observation, never judgment"}
        </h2>
        <div className="text-sm leading-relaxed text-[var(--muted)] space-y-3">
          {zh ? (
            <>
              <p>
                大多数时间追踪工具都预设了「你应该更高效」。Chronicler 的语义只承诺{" "}
                <span className="text-[var(--text)]">「我会记下来」</span>——
                不承诺多做一些、少做一些、变得更好。
              </p>
              <p>
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
                <span className="text-[var(--text)]">
                  &ldquo;I&rsquo;ll write it down&rdquo;
                </span>
                &nbsp;— no implicit demand that you do more, do less, or get better.
              </p>
              <p>
                Rest, thinking, parenting, reading, conversation — all legitimate
                uses of a day. No generated narrative ever uses words like
                &ldquo;wasted,&rdquo; &ldquo;should have,&rdquo; or
                &ldquo;inefficient.&rdquo; This isn&rsquo;t a feature — it&rsquo;s
                the product&rsquo;s DNA.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Lyubishchev */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "柳比歇夫的账本" : "Lyubishchev's ledger"}
        </h2>
        <div className="text-sm leading-relaxed text-[var(--muted)] space-y-3">
          {zh ? (
            <>
              <p>
                1918 年，苏联昆虫学家 Alexander Lyubishchev 开始用笔纸做
                「时间账本法」（Time Accounting）。他坚持 56 年，每天 30 分钟记账，
                以一人之力做出 6 个领域的世界级科研。
              </p>
              <p>
                他的方法在当时是革命性的，但它有一个不可承受的代价——
                每天 30 分钟手工记账。
                <span className="text-[var(--text)]">AI 让这件事近乎零成本。</span>
              </p>
              <p>
                Chronicler 不要求你做任何记账。它观察、归档、写下。
                柳比歇夫的纪律，变成系统的副作用。
              </p>
            </>
          ) : (
            <>
              <p>
                In 1918, Soviet entomologist Alexander Lyubishchev began hand-logging
                his time with pen and paper. He kept it up for 56 years —
                30 minutes every day — and produced world-class research in six
                fields single-handedly.
              </p>
              <p>
                His method was revolutionary but carried an unacceptable cost:
                thirty minutes of manual accounting, daily.{" "}
                <span className="text-[var(--text)]">
                  AI makes this nearly free.
                </span>
              </p>
              <p>
                Chronicler asks nothing of you. It observes, files, writes down.
                Lyubishchev&rsquo;s discipline becomes a side-effect of the system.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Three privacy modes */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "三种模式 · 两个滑块" : "Three modes · two sliders"}
        </h2>
        <p className="text-sm leading-relaxed text-[var(--muted)] mb-4">
          {zh
            ? "不是三个独立产品，是一个产品两个配置维度：LLM 后端 + 公开范围。你可以随时切换。"
            : "Not three separate products — one product with two config dimensions: LLM backend and publish scope. You can switch anytime."}
        </p>
        <div className="space-y-3 text-sm leading-relaxed">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              Private · {zh ? "完全私有" : "fully local"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "搭配本地模型（Ollama / MLX / Apple Intelligence）。数据永不离开你的 Mac。适合保密度高的企业 / 科研 / 医疗 / 法律场景。"
                : "Paired with a local model (Ollama / MLX / Apple Intelligence). Data never leaves your Mac. Fits regulated work — enterprise, research, medical, legal."}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              Selective · {zh ? "选择性公开（默认）" : "publish what you choose (default)"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "按身份粒度决定哪些可公开——比如 DR 研究公开、学生信息私有。每天一次 review → commit 到你自己的 GitHub。"
                : "Pick publish scope per-identity — e.g., DR research public, student data private. Daily review → commit to your own GitHub."}
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
            <p className="font-semibold mb-1">
              Network · {zh ? "加入社群" : "join a community"}
            </p>
            <p className="text-[var(--muted)]">
              {zh
                ? "选择性 + 接入 chronicler.community 聚合层。看见同社群其他人的工作焦点；AI 帮你发现目标重叠的潜在合作者。"
                : "Selective + the chronicler.community aggregator. See what focus your community shares; AI surfaces potential collaborators with overlapping goals."}
            </p>
          </div>
        </div>
      </section>

      {/* 3rdX hook */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">
          {zh ? "一个更远的目的" : "A further purpose"}
        </h2>
        <div className="text-sm leading-relaxed text-[var(--muted)] space-y-3">
          {zh ? (
            <>
              <p>
                这个工具只是起点。维护者有一条延续 4+ 年的主线——
                <a
                  href="https://3rdx.autozyx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  第三探索（3rdX）
                </a>
                ：探索那些为人类命运共同体而努力的尝试，
                从智能运载工具延伸到无人机、矿山机械、eVTOL、月球车、火星载人车。
              </p>
              <p>
                v0.3 的 Network 模式本质上是为 3rdX 社群做的基础设施——
                <span className="text-[var(--text)]">
                  如果你的工作是为人类长期利益服务，Chronicler 帮你把自己这点时间看清楚；
                  也帮你找到同样在看另一颗星星的人。
                </span>
              </p>
              <p>
                如果这听起来和你的工作相关，欢迎去{" "}
                <a
                  href="https://github.com/AutoZYX/chronicler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  GitHub
                </a>{" "}
                关注，或发邮件到{" "}
                <a
                  href="mailto:hello@autozyx.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  hello@autozyx.com
                </a>
                。
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
                  className="text-[var(--accent)] hover:underline"
                >
                  The Third Exploration (3rdX)
                </a>
                : exploring attempts made on behalf of our long-term shared
                future — from intelligent vehicles out to drones, mining
                machinery, eVTOL, lunar rovers, and crewed Mars vehicles.
              </p>
              <p>
                Network mode in v0.3 is infrastructure for that community.{" "}
                <span className="text-[var(--text)]">
                  If your work is in service of humanity&rsquo;s longer future,
                  Chronicler helps you see your own hours clearly — and helps you
                  find others looking at the same star.
                </span>
              </p>
              <p>
                If that resonates, follow on{" "}
                <a
                  href="https://github.com/AutoZYX/chronicler"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--accent)] hover:underline"
                >
                  GitHub
                </a>
                , or drop a note to{" "}
                <a
                  href="mailto:hello@autozyx.com"
                  className="text-[var(--accent)] hover:underline"
                >
                  hello@autozyx.com
                </a>
                .
              </p>
            </>
          )}
        </div>
      </section>

      {/* Roadmap */}
      <section className="mb-10">
        <h2 className="text-xl mb-3">{zh ? "路线图" : "Roadmap"}</h2>
        <ul className="list-disc list-inside text-sm space-y-1.5 text-[var(--muted)]">
          <li>
            <span className="text-[var(--accent)] font-medium">v0.1</span>{" "}
            ({zh ? "本周发布" : "shipping this week"}) —{" "}
            {zh
              ? "核心全部就绪：collector / 分类器 / 双语 digest / ambient widget / menubar / toast。Selective 模式可用。"
              : "All core features: collector, AI classifier, bilingual digests, ambient widget, menu bar, toast. Selective mode ready."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">v0.2</span> —{" "}
            {zh
              ? "本地 LLM 支持（Ollama / MLX / Apple Intelligence）。Private 模式完整可用，零云端依赖。"
              : "Local-LLM support (Ollama / MLX / Apple Intelligence). Private mode fully usable with zero cloud dependency."}
          </li>
          <li>
            <span className="text-[var(--text)] font-medium">v0.3</span> —{" "}
            {zh
              ? "chronicler.community 聚合层 · 跨成员目标匹配 · 与第三探索 3rdX 社群的长期合作。"
              : "chronicler.community aggregator · cross-member goal matching · long-term partnership with 3rdX."}
          </li>
        </ul>
      </section>

      {/* Closing quote */}
      <section className="mb-10">
        <blockquote
          className="border-l-4 pl-5 py-2 italic text-[var(--muted)]"
          style={{
            borderColor: "var(--accent)",
            fontFamily: "Newsreader, Georgia, serif",
            fontSize: "1rem",
          }}
        >
          {zh
            ? "「一份你愿意的话可以共享的工作账本。它不会要你做得更多，只会让你看见你在做什么。」"
            : "\u201cA work ledger you can share if you want to. It won\u2019t ask you to do more \u2014 it will only let you see what you\u2019re doing.\u201d"}
        </blockquote>
      </section>

      <div className="text-sm">
        <Link href="/" className="text-[var(--accent)] hover:underline">
          {zh ? "← 返回首页" : "← Back to home"}
        </Link>
      </div>
    </div>
  );
}
