# 🔧 Troubleshooting — Sitemap.xml não está acessível no GSC

**Problema:** Google Search Console mostra erro ao tentar acessar `sitemap.xml`

---

## 🔍 CAUSAS COMUNS E SOLUÇÕES

### 1️⃣ **Arquivo não está sendo servido (MAIS COMUM)**

#### Problema
```
Error: The sitemap URL was not accessible
404 Not Found
```

#### Solução

O Vite **não copia automaticamente** arquivos de `/public/` para `/dist/` durante o build.

**Opção A: Usar Netlify (Recomendado)**
```bash
1. Faça deploy no Netlify conectando seu GitHub
2. Ele usará netlify.toml automaticamente
3. Sitemap.xml será servido em: https://seu-dominio.com/sitemap.xml
```

**Opção B: Usar Vercel**
```bash
1. Faça deploy no Vercel conectando seu GitHub
2. Ele usará vercel.json automaticamente
3. Sitemap.xml será servido corretamente
```

**Opção C: Hosting Manual (CPanel, Servidor próprio)**
```bash
1. Após: npm run build
2. Copie o arquivo: public/sitemap.xml
3. Para: dist/ (mesmo nível que index.html)
4. Publique tudo em seu servidor
5. Verifique: https://seu-dominio.com/sitemap.xml
```

---

### 2️⃣ **HTTPS não está ativo**

#### Problema
```
Error: The sitemap URL was not accessible
SSL Certificate Error
```

#### Solução
```bash
Google Search Console requer HTTPS obrigatoriamente

1. Use Netlify/Vercel (HTTPS automático)
2. Ou adicione SSL ao seu servidor
3. Force HTTPS em seu hosting
```

---

### 3️⃣ **Robots.txt está bloqueando o sitemap**

#### Problema
```
Error: Blocked by robots.txt
```

#### Solução
```
Verificar /public/robots.txt:
✅ Correto:
   User-agent: Googlebot
   Allow: /
   Sitemap: https://seu-dominio.com/sitemap.xml

❌ Errado:
   User-agent: *
   Disallow: /
```

---

### 4️⃣ **Sitemap URL está incorreta no GSC**

#### Problema
```
Você copiou a URL errada ao submeter
```

#### Solução
```
URL correta deve ser:
https://advocaciassilva.adv.br/sitemap.xml

NÃO:
https://advocaciassilva.adv.br/public/sitemap.xml
https://advocaciassilva.adv.br/dist/sitemap.xml
```

---

### 5️⃣ **Conteúdo do sitemap está vazio ou inválido**

#### Problema
```
Error: The sitemap appears to be empty
```

#### Solução
```
Verificar /public/sitemap.xml:
✅ Deve conter:
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
     <loc>https://advocaciassilva.adv.br</loc>
     ...
   </url>
   </urlset>

❌ Se arquivo vazio: recrie com conteúdo válido
```

---

## ✅ PASSO-A-PASSO PARA RESOLVER

### PASSO 1: Verificar Arquivo Local
```bash
1. Abra: /public/sitemap.xml
2. Confirme que tem conteúdo (não vazio)
3. Verifique XML válido (sem erros de syntax)
```

### PASSO 2: Testar Localm
```bash
1. npm run build
2. npm run preview
3. Acesse: http://localhost:4173/sitemap.xml
4. Deve abrir o XML (não erro 404)
```

### PASSO 3: Fazer Deploy

**Se usar Netlify:**
```bash
1. Conecte seu GitHub ao Netlify
2. Deploy automático de main branch
3. Espere build completar
4. Acesse: https://seu-dominio.com/sitemap.xml
```

**Se usar Vercel:**
```bash
1. Conecte seu GitHub ao Vercel
2. Deploy automático de main branch
3. Espere build completar
4. Acesse: https://seu-dominio.com/sitemap.xml
```

**Se usar Hosting Manual:**
```bash
1. npm run build
2. Copie /dist/ para seu servidor
3. Copie /public/sitemap.xml para raiz (mesmo nível que index.html)
4. Acesse: https://seu-dominio.com/sitemap.xml
```

### PASSO 4: Testar em Google Search Console

```
1. Google Search Console → Robots.txt Tester
2. Verifique: Googlebot pode acessar /sitemap.xml
3. Resposta esperada: ALLOWED ✅
```

```
2. Google Search Console → Sitemaps
3. Clique: Add/Test Sitemap
4. Cole: https://advocaciassilva.adv.br/sitemap.xml
5. Clique: Submit
6. Aguarde 30 segundos
7. Resultado esperado: ✅ Sitemap successfully submitted
```

---

## 🚀 CONFIGURAÇÃO RECOMENDADA (PASSO-A-PASSO)

### Para Netlify (Mais Fácil)

```bash
# 1. Push para GitHub
git add -A
git commit -m "feat: fix sitemap deployment"
git push

# 2. Conectar no Netlify
# → https://app.netlify.com/
# → New site from Git
# → Conecte seu GitHub
# → Selecione repo: lp-drajuliapelicioni
# → Build command: npm run build
# → Publish directory: dist
# → Deploy

# 3. Espere 2-3 minutos
# 4. Teste: https://seu-dominio.com/sitemap.xml
# 5. Se erro 404, verifique netlify.toml
```

### Para Vercel (Também Fácil)

```bash
# 1. Push para GitHub
git add -A
git commit -m "feat: fix sitemap deployment"
git push

# 2. Conectar no Vercel
# → https://vercel.com/dashboard
# → Add New → Project
# → Import Git Repository
# → Selecione seu repo
# → Deploy

# 3. Espere 2-3 minutos
# 4. Teste: https://seu-dominio.com/sitemap.xml
# 5. Vercel usará vercel.json automaticamente
```

---

## ✨ CHECKLIST FINAL

```
Arquivo Sitemap:
  [ ] /public/sitemap.xml existe
  [ ] Arquivo não está vazio
  [ ] XML é válido (sem erros)
  [ ] URLs incluem seu domínio
  [ ] Fechamento </urlset>

Configuração Vite:
  [ ] vite.config.ts atualizado
  [ ] publicDir: "public" configurado
  [ ] npm run build executa sem erros
  [ ] npm run preview mostra sitemap
  [ ] Teste: http://localhost:4173/sitemap.xml

Configuração Deploy:
  [ ] netlify.toml criado (ou vercel.json)
  [ ] _redirects criado (para Netlify)
  [ ] Arquivo está em /public/sitemap.xml
  [ ] Commit feito: git push
  [ ] Deploy ativo

Verificação Google:
  [ ] HTTPS ativo
  [ ] Domínio acessível: https://seu-dominio.com
  [ ] Sitemap acessível: https://seu-dominio.com/sitemap.xml
  [ ] Robots.txt OK: /robots.txt
  [ ] Google Robots.txt Tester: ALLOWED
  [ ] GSC Sitemap: ✅ Successfully submitted
```

---

## 📞 SE AINDA NÃO FUNCIONAR

### Debug Steps:

1. **Verifique logs no Netlify/Vercel:**
   ```
   Netlify → Site Overview → Deploy logs
   Vercel → Deployments → Logs
   ```

2. **Teste com curl:**
   ```bash
   curl https://seu-dominio.com/sitemap.xml -v

   Esperado: HTTP 200 OK + XML content
   ```

3. **Verifique Google Search Console:**
   ```
   GSC → URL Inspection
   Cole: https://seu-dominio.com
   Clique: "Test live URL"
   Se erro: veja detalhes exatos
   ```

4. **Contate suporte:**
   - Netlify Support: https://support.netlify.com
   - Vercel Support: https://vercel.com/support
   - Google Support: https://support.google.com/webmasters

---

## 🎯 SOLUÇÃO FINAL GARANTIDA

Se nenhuma solução acima funcionar:

**Opção: Usar Dynamic Sitemap (Próxima Fase)**

Em vez de arquivo estático, gerar sitemap dinamicamente:

```javascript
// src/pages/SitemapPage.tsx
export default function SitemapPage() {
  useEffect(() => {
    const xml = generateSitemap();
    document.body.innerHTML = xml;
  }, []);
  return null;
}

// routes
<Route path="/sitemap.xml" element={<SitemapPage />} />
```

Isso garante que o sitemap sempre será encontrado, mesmo em SPAs!

---

**Status:** ✅ Configuração pronta
**Próximo passo:** Deploy no Netlify ou Vercel
**Tempo estimado:** 5 minutos
