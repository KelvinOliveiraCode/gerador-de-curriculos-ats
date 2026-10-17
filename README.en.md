# ATS Resume Builder

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![html2pdf.js](https://img.shields.io/badge/html2pdf.js-0.10-blue)](https://ekoopmans.github.io/html2pdf.js/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Single-page web application to create resumes compatible with ATS (Applicant Tracking Systems), with side-by-side editor and preview, A4 PDF export, and interface in Portuguese or English.

## Problem / Why it exists

ATS systems read and filter resumes automatically before they reach a recruiter. Layouts with columns, tables, images, graphics, or uncommon fonts can be misinterpreted by these parsers and cause relevant information to be ignored. This application generates a single-column, plain-text document with a clear heading hierarchy, prioritizing that content is read correctly by the screening system.

## What it does

- Personal data: full name, desired position, professional summary, email, phone, city, LinkedIn, and GitHub.
- Professional experience: company, position, period, and description; items added and removed dynamically.
- Academic background: institution, course, and period; support for multiple items.
- Skills: tag list, typing the term and pressing Enter.
- Languages: language name and level (Basic, Intermediate, Advanced, Fluent, Native in Portuguese; Basic, Intermediate, Advanced, Fluent, Native in English).
- Real-time resume preview next to the editing form.
- Interface and resume heading language toggle between Portuguese and English.
- Resume export to PDF in A4 format, portrait, with filename based on the candidate's name.
- Automatic persistence in localStorage; demo data loads on first visit.
- Responsive layout: split panel (editing and preview) on desktop; toggle mode between edit and view on mobile.

## Stack

- React 18.3 — interface building
- TypeScript 5.5 — static typing
- Vite 5.3 — development server and production build
- Tailwind CSS 3.4 — utility styles
- html2pdf.js 0.10 with html2canvas — PDF export
- gh-pages — publication on GitHub Pages

## How it works

Application state lives in `src/App.tsx` and contains the blocks `personal`, `education`, `experience`, `skills`, `languages`, and `resumeLang`. The hook `src/hooks/useLocalStorage.ts` loads data from `localStorage` under key `ats-resume-data` and saves automatically on each change; when no saved data exists, `src/utils/demoData.ts` fills the form with an example resume.

Each data block has its own form (`PersonalForm`, `ExperienceForm`, `EducationForm`, `SkillsForm`, `LanguagesForm`) that updates the corresponding slice of state. `src/components/ResumePreview.tsx` renders the resume based on the same data and a reference element (`ref`); the Export PDF button calls `src/utils/exportPDF.ts`, which renders that element with html2pdf.js at scale 2, A4 format, portrait, and triggers the download.

Interface and resume heading translations are in `src/types/index.ts` in object `UI_LABELS`, with keys `pt` and `en`. The `Section` component controls collapsible editor sections. Vite is configured with alias `@` pointing to `src/` and base `/ats-resume-builder/`, suitable for subfolder hosting on GitHub Pages.

## How to run

Prerequisites: Node.js 18 or higher and npm.

```bash
# 1. Clone the repository
git clone https://github.com/KelvinOliveiraCode/ats-resume-builder.git

# 2. Enter the project directory
cd ats-resume-builder

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

Useful commands

```bash
npm run build   # production build (tsc + vite build), output in dist/
npm run preview # previews the build locally
npm run deploy  # builds and publishes to GitHub Pages via gh-pages
```

## Project structure

```
ats-resume-builder/
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── screenshot.png
├── README.md
├── DEPLOY.md
├── dist/                 # production build output
└── src/
    ├── main.tsx          # entry point (ReactDOM.createRoot)
    ├── App.tsx           # global state, forms, preview, export, language
    ├── html2pdf.d.ts
    ├── vite-env.d.ts
    ├── components/
    │   ├── index.ts
    │   ├── Section.tsx           # collapsible editor section
    │   ├── Input.tsx             # reusable input field
    │   ├── PersonalForm.tsx      # personal data
    │   ├── ExperienceForm.tsx    # professional experience
    │   ├── EducationForm.tsx     # academic background
    │   ├── SkillsForm.tsx        # skills list
    │   ├── LanguagesForm.tsx     # languages and levels
    │   ├── ResumePreview.tsx     # resume rendering and ref for PDF
    │   └── icons/                # SVG icons (Mail, Phone, MapPin, LinkedIn, GitHub, Download, Eye, FileText, ChevronDown)
    ├── hooks/
    │   └── useLocalStorage.ts    # persistence in localStorage
    ├── types/
    │   └── index.ts              # data interfaces, UI_LABELS (pt/en), LEVELS
    ├── styles/
    │   └── global.css
    └── utils/
        ├── exportPDF.ts          # html2pdf.js, A4 portrait, scale 2
        └── demoData.ts           # first-visit demo data
```

## Trade-offs and decisions

- Centralized state in `App.tsx` without a form library: fewer dependencies and direct control, but no field validation; the resume can be exported with empty or incomplete data.
- Persistence only in `localStorage`: data stays in the user's browser; no account, login, backend, or backup file export; clearing the browser deletes the data.
- Export via screenshot capture (html2canvas + jsPDF): text in the generated PDF may not be selectable or accessible in all readers, and the result depends on the browser and screen resolution.
- Single single-column template: maximizes compatibility with ATS and resume parsers, without option for creative layout, two-column layout, or graphic elements.
- Static PT/EN translation in a single labels object, without i18n framework: simple to extend, but no scope for more languages or on-demand loading.
- Demo data loaded automatically on first visit to show the result immediately.

## Known limitations

- No validation of required fields or error messages.
- PDF generated by screenshot capture may not contain selectable or accessible text in PDF readers and assistive technologies.
- No backend or authentication: nothing leaves the user's browser and there is no sync between devices.
- No drag-and-drop section reordering or multiple resume templates.
- The build is configured with base `/ats-resume-builder/`, made for GitHub Pages subfolder hosting.

## License

MIT.

## Author

Kelvin Oliveira — https://github.com/KelvinOliveiraCode
