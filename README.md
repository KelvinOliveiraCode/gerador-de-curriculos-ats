# ATS Resume Builder

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![html2pdf.js](https://img.shields.io/badge/html2pdf.js-0.10-blue)](https://ekoopmans.github.io/html2pdf.js/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Aplicação web de página única para criar currículos compatíveis com sistemas ATS (Applicant Tracking Systems), com editor e pré-visualização lado a lado, exportação para PDF em A4 e interface em português ou inglês.

## Problema / Por que existe

Sistemas ATS leem e filtram currículos automaticamente antes de chegarem a um recrutador. Layouts com colunas, tabelas, imagens, gráficos ou fontes incomuns podem ser interpretados incorretamente por esses parsers e fazer com que informações relevantes sejam ignoradas. Este aplicativo gera um documento de coluna única, texto puro e hierarquia clara de títulos, priorizando que o conteúdo seja lido corretamente pelo sistema de triagem.

## O que faz

- Dados pessoais: nome completo, cargo desejado, resumo profissional, e-mail, telefone, cidade, LinkedIn e GitHub.
- Experiência profissional: empresa, cargo, período e descrição; itens adicionados e removidos dinamicamente.
- Formação acadêmica: instituição, curso e período; suporte a múltiplos itens.
- Habilidades: lista de tags, digitando o termo e pressionando Enter.
- Idiomas: nome do idioma e nível (Básico, Intermediário, Avançado, Fluente, Nativo em português; Basic, Intermediate, Advanced, Fluent, Native em inglês).
- Pré-visualização em tempo real do currículo ao lado do formulário de edição.
- Alternância de idioma da interface e dos títulos do currículo entre português e inglês.
- Exportação do currículo para PDF no formato A4, retrato, com nome de arquivo baseado no nome do candidato.
- Persistência automática em localStorage; dados de demonstração são carregados na primeira visita.
- Layout responsivo: painel dividido (edição e pré-visualização) em desktop; modo alternar entre editar e visualizar em mobile.

## Stack

- React 18.3 — construção da interface
- TypeScript 5.5 — tipagem estática
- Vite 5.3 — servidor de desenvolvimento e build de produção
- Tailwind CSS 3.4 — estilos utilitários
- html2pdf.js 0.10 com html2canvas — exportação para PDF
- gh-pages — publicação em GitHub Pages

## Como funciona

O estado da aplicação vive em `src/App.tsx` e contém os blocos `personal`, `education`, `experience`, `skills`, `languages` e `resumeLang`. O hook `src/hooks/useLocalStorage.ts` carrega os dados do `localStorage` na chave `ats-resume-data` e grava automaticamente a cada alteração; quando não há dado salvo, `src/utils/demoData.ts` preenche o formulário com um currículo de exemplo.

Cada bloco de dados tem seu próprio formulário (`PersonalForm`, `ExperienceForm`, `EducationForm`, `SkillsForm`, `LanguagesForm`) que atualiza o slice correspondente do estado. `src/components/ResumePreview.tsx` renderiza o currículo com base nos mesmos dados e em um elemento de referência (`ref`); o botão Exportar PDF chama `src/utils/exportPDF.ts`, que renderiza esse elemento com html2pdf.js em escala 2, formato A4, retrato, e dispara o download.

As traduções da interface e dos títulos do currículo estão em `src/types/index.ts` no objeto `UI_LABELS`, com chaves `pt` e `en`. O componente `Section` controla seções colapsáveis do editor. O Vite está configurado com alias `@` apontando para `src/` e base `/ats-resume-builder/`, adequado a hospedagem em subpasta do GitHub Pages.

## Como rodar

Pré-requisitos: Node.js 18 ou superior e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/KelvinOliveiraCode/ats-resume-builder.git

# 2. Acesse o diretório do projeto
cd ats-resume-builder

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev

# 5. Abra no navegador
# http://localhost:5173
```

Comandos úteis

```bash
npm run build   # build de produção (tsc + vite build), saída em dist/
npm run preview # pré-visualiza o build localmente
npm run deploy  # build e publica em GitHub Pages via gh-pages
```

## Estrutura do projeto

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
├── dist/                 # resultado do build de produção
└── src/
    ├── main.tsx          # ponto de entrada (ReactDOM.createRoot)
    ├── App.tsx           # estado global, formulários, preview, exportação, idioma
    ├── html2pdf.d.ts
    ├── vite-env.d.ts
    ├── components/
    │   ├── index.ts
    │   ├── Section.tsx           # seção colapsável do editor
    │   ├── Input.tsx             # campo de entrada reutilizável
    │   ├── PersonalForm.tsx      # dados pessoais
    │   ├── ExperienceForm.tsx    # experiência profissional
    │   ├── EducationForm.tsx     # formação acadêmica
    │   ├── SkillsForm.tsx        # lista de habilidades
    │   ├── LanguagesForm.tsx     # idiomas e níveis
    │   ├── ResumePreview.tsx     # renderização do currículo e ref para PDF
    │   └── icons/                # ícones SVG (Mail, Phone, MapPin, LinkedIn, GitHub, Download, Eye, FileText, ChevronDown)
    ├── hooks/
    │   └── useLocalStorage.ts    # persistência em localStorage
    ├── types/
    │   └── index.ts              # interfaces de dados, UI_LABELS (pt/en), LEVELS
    ├── styles/
    │   └── global.css
    └── utils/
        ├── exportPDF.ts          # html2pdf.js, A4 retrato, escala 2
        └── demoData.ts           # dados de demonstração da primeira visita
```

## Trade-offs e decisões

- Estado centralizado em `App.tsx` sem biblioteca de formulários: menos dependências e controle direto, mas sem validação de campos; o currículo pode ser exportado com dados vazios ou incompletos.
- Persistência apenas em `localStorage`: os dados ficam no navegador do usuário, não há conta, login, backend nem exportação de arquivo de backup; limpar o navegador apaga os dados.
- Exportação por captura de tela (html2canvas + jsPDF): o texto do PDF gerado pode não ser selecionável ou acessível em todos os leitores, e o resultado depende do navegador e da resolução da tela.
- Um único template de coluna única: maximiza a compatibilidade com ATS e parsers de currículo, sem opção de layout criativo, de duas colunas ou elementos gráficos.
- Tradução PT/EN estática em um único objeto de rótulos, sem framework de i18n: simples de estender, mas sem escopo para mais idiomas ou carregamento sob demanda.
- Dados de demonstração carregados automaticamente na primeira visita para mostrar o resultado imediatamente.

## Limitações conhecidas

- Não há validação de campos obrigatórios nem mensagens de erro.
- O PDF gerado por captura de tela pode não conter texto selecionável ou acessível em leitores de PDF e tecnologias assistivas.
- Sem backend ou autenticação: nada sai do navegador do usuário e não há sincronização entre dispositivos.
- Não há reordenação por arrastar e soltar de seções nem múltiplos templates de currículo.
- O build está configurado com base `/ats-resume-builder/`, feito para hospedagem em subpasta do GitHub Pages.

## Licença

MIT.

## Autor

Kelvin Oliveira — https://github.com/KelvinOliveiraCode
