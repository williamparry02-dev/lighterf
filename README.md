# Lighter Finance website

The lighterfinance.com.au website, rebuilt on the [AstroWind](https://github.com/arthelokyo/astrowind) template (Astro + Tailwind CSS). Every page is made from AstroWind's ready-made sections, styled with the Lighter Finance brand.

## Where to change things

| To change…                                                  | Edit                                                                                       |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Phone, email, hours, licence number, brokers, FAQs, reviews | `src/data/business.ts`                                                                     |
| An industry page (or add a new industry)                    | `src/data/industries.ts`                                                                   |
| Menu and footer links                                       | `src/navigation.ts`                                                                        |
| Brand colours and fonts                                     | `src/components/CustomStyles.astro` (fonts are set up in `astro.config.ts`)                |
| Logo                                                        | `src/assets/images/brand/logo.png` and `logo-white.png`                                    |
| Homepage, About, Industries, Apply, Contact                 | `src/pages/index.astro`, `about.astro`, `industries.astro`, `apply.astro`, `contact.astro` |
| Site name, SEO title and description                        | `src/config.yaml`                                                                          |
| Privacy policy                                              | `src/pages/privacy.md`                                                                     |

The Apply and Contact forms send to the email registered with the Web3Forms key in `src/data/business.ts`.

## Before going live

- Replace `Australian Credit Licence #000000` in `src/data/business.ts` with your real number.
- Add your privacy policy to `src/pages/privacy.md`.

## Working on it

```bash
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # production build in ./dist
npm run check    # type, lint and formatting checks
```

Requires Node.js 22.22.3 or newer (24 recommended).

## Publishing

Pushing to `main` builds the site and publishes it to GitHub Pages through `.github/workflows/deploy.yml`.
One-time setup in the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The custom domain comes from `public/CNAME`.

Old page addresses (`/about.html`, `/hospitality.html`…) still work, so existing links and search results don't break.

## AI assistants

`AGENTS.md` and `.agents/skills/` explain how AstroWind is put together, so Claude Code or other coding assistants can make changes in the same style.
