# My Website

I (Max Bielstein) created this website to have a centralized location where others can see my projects and access their source code.

I also am building some of my smaller projects directly into this website such as my Project Tracker.

## Technology

This website was built using React and Node.js. The code is mostly typescript along with some [Sassy CSS](https://sass-lang.com/guide/) for styling. I plan to eventually migrate to using a [NextJs](https://nextjs.org/) Framework, so I am building this website in such a way that it should be easy to migrate.

## Hosting/CICD

This Website is hosted on Vercel currently. Eventually I might move it over to AWS, but this was a quick and easy solution to get my website up and running. 

I am also utilizing Vercel's continuous integration workflows for deploying after every commit to main.

## Website Link

You can access this website at https://www.maxbielstein.com/

## Pages

#### Home

This is the landing page in which I share a little bit of information about myself and also allow users to download my resume.

#### Project Tracker

I am currently hosting my Project Tracker project on this page.  The Project Tracker is to allow myself to keep track of all of my project ideas and track my progress on my current projects.

#### Portfolio

I plan to put my finished projects on this page eventually.

# Setup

## Prerequisites

* **Node.js**: `22.18.0` (enforced via `engines`)
* **npm**: v10+ (bundled with Node 22)
* **Git** (to clone the repo)

**Recommended:** use `nvm` to match the Node version exactly.

```bash
nvm install 22.18.0
nvm use 22.18.0
```

---

## Getting Started

1. **Clone & install**

```bash
git clone <your-repo-url> max-website
cd max-website
npm install
```

2. **Run in development**

```bash
npm start
```

* App dev server: [http://localhost:3000](http://localhost:3000)
* API proxy (dev only): requests not handled by the dev server are proxied to **[http://localhost:8080](http://localhost:8080)** (see `proxy` in `package.json`).

**Example:** `fetch('/api/health')` from the client will go to `http://localhost:8080/api/health` during `npm start`.

---

## Available Scripts

* `npm start` – Start the dev server with fast refresh.
* `npm run build` – Create an optimized production build in `build/`.
* `npm test` – Run tests in watch mode (Jest + Testing Library).

### Preview the production build locally

```bash
npm run build
npx serve -s build   # or any static file server
```

---

## Project Structure (typical CRA)

```
max-website/
├─ public/
│  ├─ index.html
│  └─ ...static assets
├─ src/
│  ├─ index.tsx        # App entry
│  ├─ App.tsx
│  ├─ pages/          # Different pages
│  ├─ components/ 
│  ├─ theme.ts         # Main website theming
│  tests/           # I don't have any tests written yet
├─ package.json
└─ README.md
```


## Styling Notes

* **MUI 6** is installed alongside **styled-components** and **Emotion**.


## Testing

Not implemented yet


## Browser Support

Defined in `package.json > browserslist`:

* **Production:** `>0.2%`, `not dead`, `not op_mini all`
* **Development:** last 1 version of Chrome/Firefox/Safari

