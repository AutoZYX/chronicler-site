# Deploy to chronicler.autozyx.com

## One-time setup

### 1. GitHub repo

```bash
cd ~/projects/chronicler-site
git init
git add .
git commit -m "initial landing page for Chronicler"
gh repo create AutoZYX/chronicler-site --public --source=. --push
```

### 2. Vercel project

**Option A — CLI (fastest):**

```bash
cd site
pnpm install
npx vercel                 # answer prompts; link to AutoZYX/chronicler-site
npx vercel --prod
```

**Option B — dashboard:**

1. https://vercel.com/new → import `AutoZYX/chronicler-site`
2. Root directory: `site/`
3. Framework preset: Next.js (auto-detected)
4. Build command: `next build` (default)
5. Deploy

### 3. Custom domain

In the Vercel project → Settings → Domains → add `chronicler.autozyx.com`.

At your DNS provider (Cloudflare, since `autozyx.com` lives there) add an
**A record** — Vercel prefers this over CNAME for subdomain routing:

```
Type:    A
Name:    chronicler
Target:  76.76.21.21
Proxy:   DNS only (grey cloud)  — Vercel handles TLS
TTL:     Auto
```

Wait ~30s for DNS propagation; Vercel auto-issues the Let's Encrypt cert.

## Subsequent deploys

Just `git push origin main`. Vercel auto-deploys on push.

## Smoke test after deploy

- https://chronicler.autozyx.com loads
- Language toggle works (top-right, `EN ↔ 中`)
- `/about` and `/architecture` pages resolve
- GitHub links resolve to `github.com/AutoZYX/chronicler`
- Architecture SVG renders full-width on desktop, scrollable on mobile
- The comparison bullets are scannable on mobile

## Rolling back

Vercel keeps every deploy. If something breaks:

```bash
npx vercel rollback
```

or use the dashboard's Deployments list → Promote to Production on an older deploy.
