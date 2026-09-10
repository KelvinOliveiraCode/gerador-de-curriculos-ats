# ats-resume-builder — Gerador de currículos que passam pelo filtro das ATS

![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3-646cff?style=flat-square&logo=vite&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Live-GitHub_Pages-121013?style=flat-square&logo=githubpages&logoColor=white)

**ats-resume-builder** é um gerador de currículos ATS-friendly em React 18.3 + TypeScript 5.5, com Vite 5.3 no build e Tailwind 3.4 no estilo. A premissa é direta: a maioria dos currículos é descartada por sistemas de triagem automática (ATS) antes de chegar a um recrutador — tabelas, colunas múltiplas e hierarquia de cabeçalhos malfeita quebram o parsing. Este app resolve isso com um template de coluna única e semântica correta, preview em tempo real e export PDF em A4 via html2pdf.js 0.10. Interface bilíngue (PT/EN) tanto no editor quanto no documento gerado. Está no ar: [kelvinoliveiracode.github.io/ats-resume-builder](https://kelvinoliveiracode.github.io/ats-resume-builder).

---

## 🇧🇷 Português

### O que é

Um MVP de gerador de currículos com foco deliberado em simplicidade: o usuário preenche formulários, vê o resultado instantaneamente no preview e exporta em PDF. Nenhuma conta, nenhum servidor — a persistência é `localStorage`, feita através de um hook `useLocalStorage` dedicado.

### Funcionalidades

- **Preview em tempo real** — cada tecla digitada reflete imediatamente no currículo renderizado ao lado.
- **Template ATS** — coluna única, sem tabelas, hierarquia `h1`/`h2`/`h3` e fontes legíveis: a estrutura que parsers de ATS leem sem erro.
- **Export PDF A4** — via html2pdf.js 0.10, direto do DOM.
- **Persistência local** — hook `useLocalStorage` mantém o rascunho entre sessões.
- **PT/EN** — interface e documento em português ou inglês.
- **Dados demo** — utilitário `demoData` preenche o currículo com conteúdo de exemplo.

### Formulários e componentes

Formulários:

- **Personal** — dados pessoais de contato.
- **Education** — formação.
- **Experience** — múltiplas experiências, adicionar/remover dinamicamente.
- **Skills** — tags interativas.
- **Languages** — níveis Básico, Intermediário, Avançado, Fluente e Nativo.

Componentes:

- **Section** — seção colapsável que organiza o formulário sem sobrecarregar a tela.
- **Input** — input reutilizável, base de todos os campos.
- **ResumePreview** — renderização fiel do documento final.
- **icons/** — ícones SVG próprios, sem dependência de lib externa.

Utils: `exportPDF` (encapsula o html2pdf.js) e `demoData`. Os contratos de dados vivem em `types/` com TypeScript.

### Arquitetura

```
src/
├── components/   # Section, Input, ResumePreview, icons/
├── utils/        # exportPDF, demoData
├── types/        # contratos TypeScript dos dados do currículo
└── ...
```

Fluxo: formulários → estado tipado (`types/`) → `ResumePreview` renderiza → `exportPDF` serializa para A4. O `useLocalStorage` intercepta mudanças de estado e sincroniza com o storage do navegador.

### Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

Deploy é GitHub Pages — o app estático do build é servido direto em [kelvinoliveiracode.github.io/ats-resume-builder](https://kelvinoliveiracode.github.io/ats-resume-builder).

### Roadmap

- Validação com React Hook Form + Zod
- Múltiplos templates
- Análise ATS de palavras-chave
- Drag-and-drop de seções
- Dark mode
- i18n completo
- GitHub Actions

### Decisões técnicas

- **MVP enxuto** — cada feature presente resolve um problema real do fluxo (editar, visualizar, exportar); o resto fica no roadmap.
- **Template único e rígido** — em vez de oferecer dezenas de templates medíocres, um só, correto do ponto de vista de parsing ATS.
- **ícones próprios** — SVGs em `icons/` em vez de lib externa: menos peso no bundle, controle total do traço.

---

## 🇺🇸 English

### What it is

A resume generator MVP with deliberate focus on simplicity: fill in forms, see the result instantly in the preview, export to PDF. No account, no server — persistence is `localStorage` via a dedicated `useLocalStorage` hook.

### Features

- **Real-time preview** — every keystroke immediately reflects in the resume rendered alongside.
- **ATS template** — single column, no tables, `h1`/`h2`/`h3` hierarchy, readable fonts: the structure ATS parsers read without errors.
- **A4 PDF export** — via html2pdf.js 0.10, straight from the DOM.
- **Local persistence** — the `useLocalStorage` hook keeps the draft across sessions.
- **PT/EN** — interface and document in Portuguese or English.
- **Demo data** — a `demoData` utility fills the resume with sample content.

### Forms and components

Forms:

- **Personal** — personal contact data.
- **Education** — education entries.
- **Experience** — multiple experiences, add/remove dynamically.
- **Skills** — interactive tags.
- **Languages** — levels Basic, Intermediate, Advanced, Fluent, and Native.

Components:

- **Section** — collapsible section organizing the form without crowding the screen.
- **Input** — reusable input, the base of every field.
- **ResumePreview** — faithful render of the final document.
- **icons/** — custom SVG icons, no external library dependency.

Utils: `exportPDF` (wraps html2pdf.js) and `demoData`. Data contracts live in `types/` with TypeScript.

### Architecture

```
src/
├── components/   # Section, Input, ResumePreview, icons/
├── utils/        # exportPDF, demoData
├── types/        # TypeScript contracts for resume data
└── ...
```

Flow: forms → typed state (`types/`) → `ResumePreview` renders → `exportPDF` serializes to A4. The `useLocalStorage` hook intercepts state changes and syncs with browser storage.

### Running it

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Deployment is GitHub Pages — the static build output is served directly at [kelvinoliveiracode.github.io/ats-resume-builder](https://kelvinoliveiracode.github.io/ats-resume-builder).

### Roadmap

- Validation with React Hook Form + Zod
- Multiple templates
- ATS keyword analysis
- Section drag-and-drop
- Dark mode
- Full i18n
- GitHub Actions

### Technical decisions

- **Lean MVP** — every shipped feature solves a real step of the flow (edit, preview, export); the rest stays on the roadmap.
- **One rigid template** — instead of dozens of mediocre templates, a single one that is correct from an ATS parsing standpoint.
- **Custom icons** — SVGs in `icons/` instead of an external library: less bundle weight, full control over the stroke.

---

## Autor

**Kelvin Oliveira**

- GitHub: [KelvinOliveiraCode](https://github.com/KelvinOliveiraCode)
- LinkedIn: [kelvin-oliveira-0282033b4](https://www.linkedin.com/in/kelvin-oliveira-0282033b4/)

## Licença

Distribuído sob a licença MIT. Consulte o arquivo de licença do repositório para detalhes.
