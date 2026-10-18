
# gerador-de-curriculos-ats

![language: JavaScript/TypeScript](https://img.shields.io/badge/language-JS-TS-yellow?logo=javascript)   ![status: done](https://img.shields.io/badge/status-done-green)   ![license: MIT](https://img.shields.io/badge/license-MIT-blue)

## Summary

Web application in JavaScript/TypeScript. Gerador de currículos ATS-friendly com React, TypeScript e Tailwind | ATS-friendly resume builder with live preview and PDF export

## Problem / why it exists

The project delivers a web interface or utility for a specific scope, with focus on the browser as runtime and no dependency on its own server.

## Architecture

- Presentation layer: components and pages that render the interface.
- Logic layer: functions and hooks that process data and state.
- Communication: HTTP requests to external APIs or local data, when applicable.

The build is done with Vite (or equivalent tool), generating static files ready for hosting.

## Technologies

- JavaScript / TypeScript
- html2pdf.js
- react
- react-dom
- @types/react
- @types/react-dom
- @vitejs/plugin-react
- autoprefixer
- gh-pages
- postcss
- tailwindcss
- typescript
- vite

- No CI configured in this repository.

No automated tests detected in the scan.

## What it does

Gerador de currículos ATS-friendly com React, TypeScript e Tailwind | ATS-friendly resume builder with live preview and PDF export

## How to run

Requirements: Node.js and npm (or yarn/pnpm).

```
# install dependencies
npm install

# run in development
vite

# production build
tsc && vite build

# run tests
pytest
```

## Project structure

- src/ (19 arquivo(s))
- .gitignore, DEPLOY.md, index.html, LICENSE, package-lock.json, package.json, postcss.config.js, README.en.md, README.md, screenshot.png e mais 4


## Trade-offs and decisions

- Static build: easy to host (GitHub Pages, Vercel, Netlify) without a server.
- Minimal dependencies to reduce maintenance surface.
- Browser as the only runtime required.

## Known limitations

- Runs in the browser; depends on internet connection for external resources.
- No automated tests detected.


## Tests

```
pytest
```

## License

Distributed under the MIT License. See the `LICENSE` file in this repository.

## Author

Kelvin Oliveira, https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
