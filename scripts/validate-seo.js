#!/usr/bin/env node

/**
 * Script de Validação SEO Automática
 * Verifica sitemap, robots.txt, schema markup e meta tags
 *
 * Uso: node scripts/validate-seo.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const COLORS = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

const LOG = {
  success: (msg) => console.log(`${COLORS.green}✅ ${msg}${COLORS.reset}`),
  error: (msg) => console.log(`${COLORS.red}❌ ${msg}${COLORS.reset}`),
  warning: (msg) => console.log(`${COLORS.yellow}⚠️  ${msg}${COLORS.reset}`),
  info: (msg) => console.log(`${COLORS.cyan}ℹ️  ${msg}${COLORS.reset}`),
  section: (msg) => console.log(`\n${COLORS.blue}━━━ ${msg} ━━━${COLORS.reset}\n`),
};

let passedChecks = 0;
let failedChecks = 0;
let warningChecks = 0;

// ============================================================================
// 1. Verificar Sitemap.xml
// ============================================================================

function validateSitemap() {
  LOG.section('VALIDAÇÃO: SITEMAP.XML');

  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    LOG.error('Arquivo sitemap.xml não encontrado em /public/sitemap.xml');
    failedChecks++;
    return;
  }

  LOG.success('Arquivo sitemap.xml encontrado');
  passedChecks++;

  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  // Verificações básicas
  const checks = [
    {
      name: 'Declaração XML válida',
      test: sitemapContent.includes('<?xml version="1.0"'),
    },
    {
      name: 'Namespace correto',
      test: sitemapContent.includes('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9'),
    },
    {
      name: 'URLs incluídas',
      test: sitemapContent.includes('<url>') && sitemapContent.includes('</url>'),
    },
    {
      name: 'Closing tag <urlset>',
      test: sitemapContent.includes('</urlset>'),
    },
    {
      name: 'Prioridades definidas',
      test: sitemapContent.includes('<priority>'),
    },
    {
      name: 'Data de modificação',
      test: sitemapContent.includes('<lastmod>'),
    },
  ];

  checks.forEach((check) => {
    if (check.test) {
      LOG.success(`${check.name}`);
      passedChecks++;
    } else {
      LOG.error(`${check.name}`);
      failedChecks++;
    }
  });

  // Contar URLs
  const urlMatches = sitemapContent.match(/<loc>https?:\/\/[^<]+<\/loc>/g) || [];
  LOG.info(`Total de URLs no sitemap: ${urlMatches.length}`);

  if (urlMatches.length < 5) {
    LOG.warning('Recomendado: adicione mais URLs ao sitemap (mínimo 5)');
    warningChecks++;
  } else {
    passedChecks++;
  }
}

// ============================================================================
// 2. Verificar Robots.txt
// ============================================================================

function validateRobots() {
  LOG.section('VALIDAÇÃO: ROBOTS.TXT');

  const robotsPath = path.join(__dirname, '../public/robots.txt');

  if (!fs.existsSync(robotsPath)) {
    LOG.error('Arquivo robots.txt não encontrado em /public/robots.txt');
    failedChecks++;
    return;
  }

  LOG.success('Arquivo robots.txt encontrado');
  passedChecks++;

  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');

  const checks = [
    {
      name: 'Sitemap URL incluída',
      test: robotsContent.includes('Sitemap:'),
    },
    {
      name: 'User-agent para Googlebot',
      test: robotsContent.includes('User-agent: Googlebot'),
    },
    {
      name: 'Allow rule para /)',
      test: robotsContent.includes('Allow: /'),
    },
    {
      name: 'User-agent genérico (*)',
      test: robotsContent.includes('User-agent: *'),
    },
  ];

  checks.forEach((check) => {
    if (check.test) {
      LOG.success(`${check.name}`);
      passedChecks++;
    } else {
      LOG.warning(`${check.name} - recomendado adicionar`);
      warningChecks++;
    }
  });
}

// ============================================================================
// 3. Verificar index.html
// ============================================================================

function validateIndexHTML() {
  LOG.section('VALIDAÇÃO: INDEX.HTML');

  const indexPath = path.join(__dirname, '../index.html');

  if (!fs.existsSync(indexPath)) {
    LOG.error('Arquivo index.html não encontrado');
    failedChecks++;
    return;
  }

  LOG.success('Arquivo index.html encontrado');
  passedChecks++;

  const indexContent = fs.readFileSync(indexPath, 'utf-8');

  // Meta tags
  const metaTags = [
    { name: 'charset', test: 'charset="UTF-8"' },
    { name: 'viewport', test: 'viewport' },
    { name: 'description', test: 'name="description"' },
    { name: 'keywords', test: 'name="keywords"' },
    { name: 'robots', test: 'name="robots"' },
    { name: 'author', test: 'name="author"' },
    { name: 'google-site-verification', test: 'google-site-verification' },
  ];

  LOG.info('Verificando Meta Tags:');
  metaTags.forEach((tag) => {
    if (indexContent.includes(tag.test)) {
      LOG.success(`Meta tag: ${tag.name}`);
      passedChecks++;
    } else {
      LOG.warning(`Meta tag ${tag.name} não encontrada`);
      warningChecks++;
    }
  });

  // Schema Markup
  const schemas = [
    { name: 'LegalService', test: '"@type": "LegalService"' },
    { name: 'FAQPage', test: '"@type": "FAQPage"' },
    { name: 'BreadcrumbList', test: '"@type": "BreadcrumbList"' },
    { name: 'LocalBusiness', test: '"@type": "LocalBusiness"' },
    { name: 'Person', test: '"@type": "Person"' },
    { name: 'Organization', test: '"@type": "Organization"' },
  ];

  LOG.info('Verificando Schema Markup (JSON-LD):');
  schemas.forEach((schema) => {
    if (indexContent.includes(schema.test)) {
      LOG.success(`Schema: ${schema.name}`);
      passedChecks++;
    } else {
      LOG.error(`Schema ${schema.name} não encontrado`);
      failedChecks++;
    }
  });

  // Open Graph
  const ogTags = [
    { name: 'og:title', test: 'property="og:title"' },
    { name: 'og:description', test: 'property="og:description"' },
    { name: 'og:image', test: 'property="og:image"' },
    { name: 'og:type', test: 'property="og:type"' },
  ];

  LOG.info('Verificando Open Graph Tags:');
  ogTags.forEach((tag) => {
    if (indexContent.includes(tag.test)) {
      LOG.success(`OG Tag: ${tag.name}`);
      passedChecks++;
    } else {
      LOG.warning(`OG Tag ${tag.name} não encontrada`);
      warningChecks++;
    }
  });

  // H1
  if (indexContent.includes('<h1')) {
    LOG.success('H1 tag encontrada');
    passedChecks++;
  } else {
    LOG.error('H1 tag não encontrada (crítico para SEO)');
    failedChecks++;
  }

  // Lang attribute
  if (indexContent.includes('lang="pt-BR"')) {
    LOG.success('Language attribute: pt-BR');
    passedChecks++;
  } else {
    LOG.warning('Language attribute (lang) não encontrado ou incorreto');
    warningChecks++;
  }
}

// ============================================================================
// 4. Verificar Componentes React
// ============================================================================

function validateComponents() {
  LOG.section('VALIDAÇÃO: COMPONENTES REACT');

  const files = [
    {
      name: 'OptimizedImage.tsx',
      path: 'src/components/OptimizedImage.tsx',
    },
    {
      name: 'useSEOMeta Hook',
      path: 'src/hooks/useSEOMeta.ts',
    },
    {
      name: 'Image Optimization Utils',
      path: 'src/utils/image-optimization.ts',
    },
    {
      name: 'Keywords Strategy',
      path: 'src/data/keywords-strategy.ts',
    },
    {
      name: 'Analytics Library',
      path: 'src/lib/analytics.ts',
    },
  ];

  files.forEach((file) => {
    const filePath = path.join(__dirname, '../', file.path);
    if (fs.existsSync(filePath)) {
      LOG.success(`${file.name} encontrado`);
      passedChecks++;
    } else {
      LOG.error(`${file.name} não encontrado em ${file.path}`);
      failedChecks++;
    }
  });
}

// ============================================================================
// 5. Verificar package.json
// ============================================================================

function validatePackageJSON() {
  LOG.section('VALIDAÇÃO: BUILD CONFIGURATION');

  const packagePath = path.join(__dirname, '../package.json');

  if (!fs.existsSync(packagePath)) {
    LOG.error('package.json não encontrado');
    failedChecks++;
    return;
  }

  const packageContent = JSON.parse(fs.readFileSync(packagePath, 'utf-8'));

  const requiredDeps = [
    'react',
    'react-dom',
    'react-router-dom',
    '@tanstack/react-query',
  ];

  LOG.info('Verificando dependências:');
  requiredDeps.forEach((dep) => {
    if (packageContent.dependencies && packageContent.dependencies[dep]) {
      LOG.success(`${dep} instalado`);
      passedChecks++;
    } else {
      LOG.warning(`${dep} não encontrado`);
      warningChecks++;
    }
  });

  const scripts = ['build', 'dev', 'lint'];
  LOG.info('Verificando scripts:');
  scripts.forEach((script) => {
    if (packageContent.scripts && packageContent.scripts[script]) {
      LOG.success(`Script: npm run ${script}`);
      passedChecks++;
    } else {
      LOG.warning(`Script npm run ${script} não encontrado`);
      warningChecks++;
    }
  });
}

// ============================================================================
// MAIN
// ============================================================================

console.clear();
console.log(`
╔═══════════════════════════════════════════════════════════╗
║          🔍 VALIDAÇÃO SEO AUTOMÁTICA                      ║
║        Dra Julia Pelicioni — Advocacia Criminal           ║
╚═══════════════════════════════════════════════════════════╝
`);

validateSitemap();
validateRobots();
validateIndexHTML();
validateComponents();
validatePackageJSON();

// ============================================================================
// SUMMARY
// ============================================================================

LOG.section('RESUMO FINAL');

const total = passedChecks + failedChecks + warningChecks;
const percentage = Math.round((passedChecks / total) * 100);

console.log(`
Checks executados:  ${total}
✅ Passou:          ${passedChecks}
❌ Falhou:          ${failedChecks}
⚠️  Avisos:         ${warningChecks}

Pontuação: ${percentage}%
`);

if (failedChecks === 0 && warningChecks === 0) {
  LOG.success('TUDO PERFEITO! Seu SEO está 100% pronto! 🎉');
} else if (failedChecks === 0) {
  LOG.warning(`${warningChecks} itens recomendados para melhorar`);
} else {
  LOG.error(`${failedChecks} erros críticos encontrados`);
}

console.log(`
${COLORS.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}

📚 PRÓXIMOS PASSOS:

1. Se você viu erros ❌: corrija os arquivos mencionados
2. Se você viu avisos ⚠️: recomendações para melhorar
3. Se tudo passou ✅: seu SEO está pronto para produção!

🚀 Para publicar:
   npm run build

📤 Para submeter Sitemap ao Google Search Console:
   https://search.google.com/search-console
   → Sitemaps → Add/Test Sitemap
   → https://advocaciassilva.adv.br/sitemap.xml

${COLORS.blue}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${COLORS.reset}
`);

process.exit(failedChecks > 0 ? 1 : 0);
