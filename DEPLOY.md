# 🚀 Deploy no GitHub Pages

## Opção 1: GitHub Pages (Gratuito)

### Passo 1: Instalar gh-pages
```bash
npm install --save-dev gh-pages
```

### Passo 2: Adicionar no package.json
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://kelvinoliveiracode.github.io/ats-resume-builder"
}
```

### Passo 3: Atualizar vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/ats-resume-builder/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

### Passo 4: Deploy
```bash
npm run deploy
```

---

## Opção 2: Vercel (Recomendado - Mais fácil)

### Passo 1: Instalar Vercel CLI
```bash
npm i -g vercel
```

### Passo 2: Login
```bash
vercel login
```

### Passo 3: Deploy
```bash
vercel
```

Ou importe direto pelo site: https://vercel.com/new

---

## Opção 3: Netlify

### Passo 1: Build
```bash
npm run build
```

### Passo 2: Arraste a pasta `dist/` para https://app.netlify.com/drop

---

## 📋 Comandos Git (resumo)

```bash
# Configurar remote
git remote add origin https://github.com/KelvinOliveiraCode/ats-resume-builder.git

# Verificar remote
git remote -v

# Enviar código
git add .
git commit -m "feat: ATS Resume Builder MVP"
git push -u origin master

# Atualizar código existente
git add .
git commit -m "feat: update"
git push
```
