# gerador-de-curriculos-ats

![JavaScript/TypeScript](https://img.shields.io/badge/JS-TS-yellow?logo=javascript)   ![status: concluido](https://img.shields.io/badge/status-concluido-green)   ![licenca: MIT](https://img.shields.io/badge/licenca-MIT-blue)

## Resumo

Aplicacao web em JavaScript/TypeScript. Gerador de currículos ATS-friendly com React, TypeScript e Tailwind | ATS-friendly resume builder with live preview and PDF export

## Problema / por que existe

O projeto entrega uma interface ou utilitario web para um recorte especifico, com foco em navegador como ambiente de execucao e sem dependencia de servidor proprio.

## Arquitetura

- Camada de apresentacao: componentes e paginas que renderizam a interface.
- Camada de logica: funcoes e hooks que processam dados e estado.
- Comunicacao: requisicoes HTTP a APIs externas ou dados locais, quando aplicavel.

O build e feito com Vite (ou ferramenta equivalente), gerando arquivos estaticos prontos para hospedagem.

## Tecnologias

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

- Sem CI configurado neste repositorio.

Nenhum teste automatizado detectado na varredura.

## O que faz

Gerador de currículos ATS-friendly com React, TypeScript e Tailwind | ATS-friendly resume builder with live preview and PDF export

## Como rodar

Requisitos: Node.js e npm (ou yarn/pnpm).

```
# instalar dependencias
npm install

# rodar em desenvolvimento
vite

# build para producao
tsc && vite build

# rodar testes
pytest
```

## Estrutura do projeto

- src/ (19 arquivo(s))
- .gitignore, DEPLOY.md, index.html, LICENSE, package-lock.json, package.json, postcss.config.js, README.en.md, README.md, screenshot.png e mais 4


## Trade-offs e decisões

- Build estatico: facil de hospedar (GitHub Pages, Vercel, Netlify) sem servidor.
- Dependencias minimas para reduzir superficie de manutencao.
- Navegador como unico ambiente de execucao necessario.

## Limitações conhecidas

- Funciona no navegador; depende de conexao a internet para recursos externos.
- Nenhum teste automatizado detectado.


## Testes

```
pytest
```

## Licença

Distribuído sob a licenca MIT. Consulte o arquivo `LICENSE` do repositorio.

## Autor

Kelvin Oliveira, https://github.com/KelvinOliveiraCode
Portfolio: https://kelvinoliveiracode.github.io/portfolio/
