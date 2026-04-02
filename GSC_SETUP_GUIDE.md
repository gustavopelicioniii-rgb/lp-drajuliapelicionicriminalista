# 📝 Guia Passo a Passo — Google Search Console Setup

**Data:** 2026-04-02
**Status:** Verificado ✅ | Sitemap pendente | Rich Results pendente

---

## ✅ VERIFICAÇÃO JÁ COMPLETA

Seu Google Search Console **já está verificado** com a meta tag:

```html
<meta name="google-site-verification" content="KlqJO3e5TbxnYcDkmvH7KH6J9TPwcU6tqJfhEgIzu7o" />
```

Agora você precisa:
1. ✅ Submeter Sitemap.xml
2. ✅ Validar Rich Results
3. ✅ Monitorar Coverage
4. ✅ Verificar Mobile Usability

---

## 📋 PASSO 1: ENVIAR SITEMAP.XML

### A. Acessar Google Search Console

1. Abra: https://search.google.com/search-console
2. Selecione sua propriedade: `https://advocaciassilva.adv.br`
3. Menu esquerdo → **Sitemaps**

```
┌─────────────────────────────┐
│ Google Search Console       │
├─────────────────────────────┤
│ 📊 Overview                 │
│ 🔍 Search Appearance        │
│ 📈 Performance              │
│ 🛠️  Tools & Settings        │
│   └─ Sitemaps ← CLIQUE AQUI │
│   └─ Robots.txt Tester      │
│   └─ Coverage               │
└─────────────────────────────┘
```

### B. Adicionar Sitemap

1. Clique em **"Add/Test Sitemap"** (botão laranja)
2. Cole a URL do sitemap:
   ```
   https://advocaciassilva.adv.br/sitemap.xml
   ```
3. Clique **"Submit"** (Enviar)

### C. Confirmação

Você verá a mensagem:
```
✅ Sitemap successfully submitted
Status: Success
Indexed: X URLs
```

---

## 🧪 PASSO 2: TESTAR ROBOTS.TXT

### A. Acessar Robots.txt Tester

1. Google Search Console → Menu esquerdo
2. Clique em **"Tools & Settings"** → **"Robots.txt Tester"**

```
Ou acesse diretamente:
https://search.google.com/search-console/robots-txt-tester
```

### B. Verificar Permissões

Você verá:
```
User-agent: Googlebot
Sitemap: https://advocaciassilva.adv.br/sitemap.xml
Allow: /
```

Esperado: ✅ **ALLOWED** (verde)

Se aparecer vermelho ❌ BLOCKED, há um problema.

---

## ✨ PASSO 3: VALIDAR RICH RESULTS

### A. Testar Schema Markup

1. Abra: https://search.google.com/test/rich-results
2. Cole seu domínio:
   ```
   https://advocaciassilva.adv.br
   ```
3. Clique **"Test URL"**

### B. Resultado Esperado

```
✅ Page qualifies for the following rich results:

  ✅ LegalService
  ✅ FAQPage
  ✅ BreadcrumbList
  ✅ LocalBusiness
  ✅ Organization
  ✅ Person

No errors found
No warnings
```

### C. Se houver erros

Se aparecer ❌ **ERRORS**:

1. Copie o código de erro
2. Verifique em `/index.html`:
   - Linhas 27-47: LegalService schema
   - Linhas 49-64: FAQPage schema
   - Linhas 68-88: BreadcrumbList schema
   - Linhas 90-165: LocalBusiness schema
   - Linhas 167-197: Person schema
   - Linhas 199-222: Organization schema

3. Corrija conforme necessário
4. Re-teste

---

## 📊 PASSO 4: VERIFICAR COVERAGE

### A. Coverage Report

Google Search Console → Menu esquerdo → **Coverage**

```
Expected status:
✅ Valid: 5-7 páginas (home + seções)
⚠️ Valid with warnings: 0
❌ Error: 0
❌ Excluded: 0
```

### B. Se houver problemas

Erros comuns:

| Erro | Solução |
|------|---------|
| `Excluded by robots.txt` | Verifique `/public/robots.txt` |
| `Crawled but not indexed` | Adicione mais conteúdo |
| `Server error (5xx)` | Verifique hosting/servidor |
| `Soft 404` | Página vazia ou sem conteúdo |

---

## 📱 PASSO 5: TESTAR MOBILE USABILITY

### A. Mobile-Friendly Test

Google Search Console → Menu esquerdo → **Mobile Usability**

```
Esperado: ✅ MOBILE FRIENDLY (100%)
```

Ou teste em: https://search.google.com/test/mobile-friendly

### B. Resultado esperado

```
✅ Page is mobile friendly

✓ Viewport configured
✓ Text is readable
✓ Touch buttons appropriately sized
✓ Content wider than screen
```

---

## 🔗 PASSO 6: ENVIAR LINKS PARA INDEXAÇÃO (Opcional)

### A. Solicitar Indexação

Se quiser acelerar indexação:

1. Google Search Console → Home
2. Clique na barra de busca no topo
3. Cole sua URL:
   ```
   https://advocaciassilva.adv.br
   ```
4. Clique **"Test live URL"** ou **"Request Indexing"**

### B. Resultado

```
✅ Indexation requested
Google will crawl this URL in the coming days
```

---

## 📈 PASSO 7: MONITORAR PERFORMANCE

### A. Performance Report

Google Search Console → **Performance**

```
Monitore diariamente:
- Total Clicks
- Total Impressions
- Average CTR
- Average Position
```

### B. Esperado após 7 dias

```
Dia 1-3:   Primeiras impressões
Dia 4-7:   +10-20 impressões/dia
Dia 8-14:  +50-100 impressões/dia
Dia 15+:   +200-500 impressões/dia
```

---

## ✅ CHECKLIST COMPLETO

```
Google Search Console Setup
═══════════════════════════════════════════════════════════

Verificação:
  ✅ Meta tag Google verificada

Sitemap:
  [ ] Acessar https://search.google.com/search-console
  [ ] Ir para Sitemaps
  [ ] Clicar "Add/Test Sitemap"
  [ ] Cole: https://advocaciassilva.adv.br/sitemap.xml
  [ ] Clique "Submit"
  [ ] Confirme: ✅ Sitemap successfully submitted

Robots.txt:
  [ ] Ir para Tools & Settings → Robots.txt Tester
  [ ] Verifique: Allow: /
  [ ] Status: ✅ ALLOWED (verde)

Rich Results:
  [ ] Abra: https://search.google.com/test/rich-results
  [ ] Cole: https://advocaciassilva.adv.br
  [ ] Clique: "Test URL"
  [ ] Confirme: ✅ 6 rich result types válidos
  [ ] Erros: 0 ❌ ERROS

Coverage:
  [ ] Ir para Coverage
  [ ] Verifique: ✅ Valid: 5-7 páginas
  [ ] Sem erros ❌

Mobile Usability:
  [ ] Ir para Mobile Usability
  [ ] Confirme: ✅ MOBILE FRIENDLY

Indexação:
  [ ] Ir para Performance
  [ ] Espere 7 dias
  [ ] Monitore impressões
  [ ] Esperado: +50-100 impressões

═══════════════════════════════════════════════════════════
Status Geral: ⏳ Aguardando submissão de sitemap
```

---

## 🎯 TIMELINE ESPERADA

```
Hoje:
  → Enviar Sitemap.xml
  → Validar Rich Results
  → Testar Robots.txt

Dia 1-3:
  → Google começa a rastrear
  → Primeiras impressões aparecem
  → Coverage mostra páginas indexadas

Dia 7:
  → +50% search visibility
  → 15-20 impressões/dia
  → Avg position #15-18

Dia 30:
  → +30% organic traffic
  → 100+ impressões/dia
  → Avg position #8-10

Dia 90:
  → 5000+ impressões/mês
  → +50 organic visits/dia
  → Ranking #1-3 (keywords core)
```

---

## ⚠️ DICAS IMPORTANTES

### O que evitar:

❌ Não submeta sitemap.xml múltiplas vezes no mesmo dia
❌ Não altere drasticamente a estrutura do site
❌ Não remova páginas indexadas sem redirect 301
❌ Não adicione conteúdo duplicado
❌ Não mude o domínio sem migração adequada

### O que fazer:

✅ Monitore Coverage regularmente
✅ Responda a todas as notificações do GSC
✅ Atualize sitemap.xml quando adicionar páginas
✅ Adicione conteúdo de qualidade regularmente
✅ Compartilhe urls novas no GSC (Request Indexing)

---

## 🔗 LINKS ÚTEIS

### Google Tools
- **Google Search Console:** https://search.google.com/search-console
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Robots.txt Tester:** https://search.google.com/search-console/robots-txt-tester
- **URL Inspection Tool:** https://support.google.com/webmasters/answer/9012289

### Schema.org Validation
- **Schema Validator:** https://validator.schema.org
- **JSON-LD Validator:** https://jsonld.com/validator/
- **Schema.org Documentation:** https://schema.org

### Analytics
- **Google Analytics 4:** https://analytics.google.com
- **Google Tag Manager:** https://tagmanager.google.com

---

## 📞 SE TIVER PROBLEMAS

### Erro: "Sitemap could not be read"

1. Verifique se `/public/sitemap.xml` existe
2. Acesse: `https://advocaciassilva.adv.br/sitemap.xml` no navegador
3. Deve aparecer XML puro (não erro 404)
4. Se erro 404: arquivo não está publicado no servidor

### Erro: "No rich results found"

1. Abra DevTools (F12)
2. Vá para "Elements"
3. Procure por `<script type="application/ld+json">`
4. Verifique se há 6 scripts JSON-LD
5. Se faltam: verifique `index.html` linhas 27-222

### Erro: "Robots.txt blocked"

1. Verifique `/public/robots.txt`
2. Certifique que `Allow: /` está para Googlebot
3. Se `Disallow: /`, Google não pode rastrear

---

## 📊 PRÓXIMAS AÇÕES

1. **Hoje:** Enviar sitemap.xml + validar rich results
2. **Amanhã:** Verificar coverage report
3. **Dia 7:** Revisar performance report
4. **Dia 30:** Analisar impressões e cliques
5. **Dia 90:** Revisar rankings e tráfego

---

**Status:** ✅ Pronto para implementação
**Próxima Ação:** Enviar Sitemap.xml em GSC
**Data:** 2026-04-02
**Tempo Estimado:** 5-10 minutos
