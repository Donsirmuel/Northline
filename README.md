# Northline Boilerplate

Modern website scaffold built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui.

Use this repository as a quick starter for landing pages, product websites, SaaS marketing sites, or content-first web fronts.

## Stack

- React 18 + TypeScript + Vite
- Tailwind CSS + shadcn/ui components
- React Router
- TanStack Query (ready for API workflows)

## Quick Start

### 1) Clone and install

```sh
git clone https://github.com/Donsirmuel/Northline.git
cd Northline
npm install
```

### 2) Run locally

```sh
npm run dev
```

Default dev URL: `http://localhost:8080`

## First 10-Minute Customization

1. Update brand metadata in `src/lib/siteConfig.ts`
2. Replace text/content blocks in:
   - `src/pages/Home.tsx`
   - `src/pages/About.tsx`
   - `src/pages/Contact.tsx`
3. Adjust visual tokens in `src/index.css`
4. Edit SEO/social tags in `index.html`

## Scripts

- `npm run dev` - start local development server
- `npm run build` - create production build in `dist/`
- `npm run build:dev` - build with development mode settings
- `npm run preview` - preview production build
- `npm run lint` - run ESLint checks

## Deployment Notes

### Static hosts

```sh
npm run build
```

Deploy the `dist/` folder to Netlify, Vercel, GitHub Pages, or any static hosting platform.

### Base path

If your app is hosted under a sub-path, set:

```sh
VITE_BASE_PATH=/your-sub-path/
```

## Optional Environment Variables

- `VITE_APP_URL`
- `VITE_API_BASE_URL`
- `VITE_ENABLE_ANALYTICS`
- `VITE_BASE_PATH`

## License

MIT
