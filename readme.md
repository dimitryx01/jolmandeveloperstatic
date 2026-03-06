# Jolman Developer — Production (Static Build)

This repository contains the **production deployment** of **jolmandeveloper.com** — the live personal website/portfolio of *Jolman Developer* (freelance web developer).

> ✅ **Important:** This repo is the **PRODUCTION build output** (compiled & minified).  
> The source code (React + Vite) is maintained separately.

## Live Website
- https://jolmandeveloper.com

## What This Repository Is
- A **static SPA (Single Page Application)** build, ready to be served by **GitHub Pages**
- A **deployment artifact** repository (optimized files under `/assets/`)
- Includes all production-ready SEO and platform metadata (sitemap, robots, social cards, etc.)

## Tech & Deployment
- **Frontend:** React + Vite (SPA)
- **Hosting:** GitHub Pages
- **Custom Domain:** `jolmandeveloper.com` (see `CNAME`)
- **Analytics:** Google Tag Manager (G-F0FVVFEQPT)

## Key Features
- **Bilingual content:** Spanish and English (`/es/` and `/en/`)
- **SEO optimized:**
  - Meta tags + Open Graph + Twitter Cards
  - `sitemap.xml`
  - `robots.txt`
- **Custom 404 page**
- **Legal pages:** Legal notice and privacy policy
- **Thank-you page:** `gracias.html` (useful for conversion tracking / forms)

## Repository Structure (Production Output)
- `index.html` — SPA entry point
- `assets/` — compiled/minified JS/CSS and optimized static files
- `es/`, `en/` — language routes/entry points
- `CNAME` — GitHub Pages custom domain config
- `robots.txt`, `sitemap.xml` — SEO files
- `favicon.ico` — favicon

## Local Preview (Optional)
You can preview the production build locally:

```bash
# Node.js
npx serve .

# Python
python3 -m http.server 8080
Then open:

http://localhost:8080
Notes for Reviewers

Since this is a production build, the code inside /assets/ is minified and optimized.
For readability and development workflows (components, hooks, routing, etc.), please refer to the source repository.

Maintained by Jolman Gordillo (Jolman Developer)
Website: https://jolmandeveloper.com