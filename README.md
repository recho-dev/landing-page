# Recho Landing Page

A Next.js landing page for Recho - Light Domain-Specific Code Editors for Coders and Artists.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/` - Next.js pages
  - `index.js` - Main landing page
  - `_app.js` - Custom App component
  - `_document.js` - Custom Document component
- `components/` - React components
  - `Header.js` - Navigation header with responsive menu
  - `Hero.js` - Hero section with tagline
  - `Features.js` - Feature cards section
- `styles/` - CSS files
  - `globals.css` - Global styles
- `public/` - Static assets
  - `notebook.png` - Recho Notebook screenshot

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

```bash
vercel
```

