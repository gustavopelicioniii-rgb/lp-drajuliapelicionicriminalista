/**
 * Configuração de Headers HTTP para otimização SEO e segurança
 * Adicionar ao vite.config.ts nas configurações do servidor
 */

export const httpHeaders = {
  // === Segurança ===
  "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // === Performance ===
  "Cache-Control": "public, max-age=3600, s-maxage=31536000",
  "Content-Encoding": "gzip",

  // === SEO ===
  "Content-Language": "pt-BR",

  // === Prefetch / Preconnect (sinais para browser) ===
  "Link": [
    '<https://fonts.googleapis.com>; rel=preconnect',
    '<https://fonts.gstatic.com>; rel=preconnect',
    '<https://www.google-analytics.com>; rel=preconnect',
    '<https://www.googletagmanager.com>; rel=preconnect',
    '<https://maps.googleapis.com>; rel=preconnect',
  ].join(", "),

  // === Compressão ===
  "Accept-CH": "DPR, Viewport-Width, Width",

  // === Mobile ===
  "Vary": "Accept-Encoding, Accept, User-Agent",
};

/**
 * Configuração detalhada para vite.config.ts
 */
export const viteServerConfig = {
  middlewares: [
    // Middleware customizado para headers
    (req: any, res: any, next: any) => {
      // Headers de segurança
      res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
      res.setHeader("X-Content-Type-Options", "nosniff");
      res.setHeader("X-Frame-Options", "SAMEORIGIN");
      res.setHeader("X-XSS-Protection", "1; mode=block");
      res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

      // Headers de SEO
      res.setHeader("Content-Language", "pt-BR");

      // Headers de performance
      res.setHeader("Cache-Control", "public, max-age=3600");
      res.setHeader("Vary", "Accept-Encoding");

      // Preconnect
      res.setHeader(
        "Link",
        [
          '<https://fonts.googleapis.com>; rel=preconnect; crossorigin',
          '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
          '<https://www.google-analytics.com>; rel=dns-prefetch',
          '<https://www.googletagmanager.com>; rel=dns-prefetch',
        ].join(", ")
      );

      next();
    },
  ],

  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, HEAD, PUT, PATCH, POST, DELETE",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "X-Powered-By": "Vite",
  },
};

/**
 * Configuração para produção (Netlify, Vercel, etc)
 * Exemplo para _headers file (Netlify)
 */
export const productionHeaders = `
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Content-Language: pt-BR
  Cache-Control: public, max-age=3600, s-maxage=31536000
  Link: <https://fonts.googleapis.com>; rel=preconnect, <https://fonts.gstatic.com>; rel=preconnect
  Vary: Accept-Encoding, Accept, User-Agent

# Imagens (cache agressivo)
/assets/images/*
  Cache-Control: public, max-age=31536000, immutable

# Fontes (cache permanente)
/fonts/*
  Cache-Control: public, max-age=31536000, immutable

# Arquivos versioned (bundle.js, etc)
/*.js
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: text/javascript; charset=utf-8

/*.css
  Cache-Control: public, max-age=31536000, immutable
  Content-Type: text/css; charset=utf-8

# Mapas de origem (development apenas)
/*.map
  Cache-Control: private, max-age=0, must-revalidate

# Sitemap e robots
/sitemap.xml
  Content-Type: application/xml
  Cache-Control: public, max-age=86400

/robots.txt
  Content-Type: text/plain
  Cache-Control: public, max-age=86400
`;

/**
 * Configuração para Vercel (vercel.json)
 */
export const vercelHeaders = {
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains; preload",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          key: "Content-Language",
          value: "pt-BR",
        },
      ],
    },
    {
      source: "/assets/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=31536000, immutable",
        },
      ],
    },
    {
      source: "/api/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "no-cache, no-store, must-revalidate",
        },
      ],
    },
  ],
};

export default {
  httpHeaders,
  viteServerConfig,
  productionHeaders,
  vercelHeaders,
};
