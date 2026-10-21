# Brainstorm Communications — Website

Next.js 15 (App Router) + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Contact form email

The contact form (`/contact`) posts to `src/app/api/contact/route.ts`, which sends mail through the
Titan (Hostinger) mailbox. Settings live in `.env.local` (not committed; see `.env.example`):

```
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_USER=imran@brainstormbd.com
SMTP_PASS='...'          # keep in single quotes
CONTACT_TO=imran@brainstormbd.com
```

Set the same variables in your hosting panel (Vercel / Hostinger Node.js app) when deploying.

## Where things are

- `src/lib/site.ts` — company info, menu, services, team, clients, brands
- `src/app/*/page.tsx` — Home, About, Services, Products, Partners, Contact
- `public/images/` — logo (from the .ai file) and photos taken from the profiles in `docs/`
- `scripts/gen-world-map.mjs` — regenerates the dotted world map used in the footer
