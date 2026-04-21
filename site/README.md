# chronicler-site

Landing page for [Chronicler / 观时者](https://chronicler.autozyx.com), the open-source AI time ledger.

## Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS 4
- Inter + Playfair Display + Newsreader (Google Fonts)
- Bilingual (中文/English) via `lib/i18n.tsx`
- Static site — no API routes, no runtime data

Matches the visual language of sister sites like
[roam.autozyx.com](https://roam.autozyx.com) and the broader AutoZyx brand.

## Local dev

```bash
pnpm install          # or npm install
pnpm dev              # http://localhost:3000
```

## Deploy to Vercel

See `DEPLOY.md`.

## Editing content

- Main copy is in `app/page.tsx` — bilingual inline (both languages present, toggled by `useLang()`)
- Navigation / footer: `components/nav.tsx`, `components/footer.tsx`
- Palette / typography: `app/globals.css`
- Architecture diagram: `public/architecture.svg` (overridable)

## Adding new languages

The current i18n is minimal — two languages, toggled via localStorage. If you
need more locales later, swap the pattern for `next-intl` or similar.

## License

AGPLv3 (matches the Chronicler project itself).
