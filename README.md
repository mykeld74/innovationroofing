# Innovation Roofing & Shades LLC

Marketing website for **Innovation Roofing & Shades LLC**, a residential and commercial roofing company serving the greater Tucson and Phoenix areas.

## What's included

- Home page with services overview and CTAs
- About Us (company values and team)
- Our Projects
- FAQs & Testimonials
- Contact page and modal contact form
- Contact submissions emailed via Nodemailer (Gmail SMTP)

## Stack

- [SvelteKit](https://svelte.dev/docs/kit) + TypeScript
- [Vite](https://vitejs.dev/)
- [@sveltejs/adapter-netlify](https://svelte.dev/docs/kit/adapter-netlify) for deployment
- [Nodemailer](https://nodemailer.com/) for contact form email
- pnpm, Prettier, ESLint

## Developing

```sh
pnpm install
pnpm dev
```

Open the app with:

```sh
pnpm dev -- --open
```

## Environment variables

Create a `.env` file in the project root for the contact form:

```env
GOOGLE_EMAIL=
GOOGLE_EMAIL_PASSWORD=
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
```

`MAIL_HOST` and `MAIL_PORT` are optional (defaults shown above). Submissions are sent to `info@innovationroofingllc.com`.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `pnpm dev`     | Start the dev server     |
| `pnpm build`   | Production build         |
| `pnpm preview` | Preview the production build |
| `pnpm check`   | Type-check with svelte-check |
| `pnpm lint`    | Run Prettier + ESLint    |
| `pnpm format`  | Format with Prettier     |

## Deploying

The project is configured for **Netlify** via `@sveltejs/adapter-netlify`. Set the same environment variables in the Netlify project settings so the contact form can send mail in production.
