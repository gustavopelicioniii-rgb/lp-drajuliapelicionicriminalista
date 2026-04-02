import { useEffect } from "react";

/**
 * Hook para gerenciar metadados SEO dinamicamente
 * Suporta: title, description, Open Graph, Twitter, structured data
 */

export interface SEOMetaProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article" | "business";
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
  locale?: string;
  canonicalUrl?: string;
  alternates?: Array<{ lang: string; href: string }>;
  robots?: string;
  structuredData?: Record<string, unknown>;
}

/**
 * Hook para atualizar metadados SEO
 */
export const useSEOMeta = (config: SEOMetaProps) => {
  useEffect(() => {
    // Title
    document.title = config.title;
    updateMeta("og:title", config.title);
    updateMeta("twitter:title", config.title);

    // Description
    if (config.description) {
      updateMeta("description", config.description);
      updateMeta("og:description", config.description);
      updateMeta("twitter:description", config.description);
    }

    // Keywords
    if (config.keywords && config.keywords.length > 0) {
      updateMeta("keywords", config.keywords.join(", "));
    }

    // Image
    if (config.image) {
      updateMeta("og:image", config.image);
      updateMeta("twitter:image", config.image);
    }

    // URL
    if (config.url) {
      updateMeta("og:url", config.url);
    }

    // Type
    if (config.type) {
      updateMeta("og:type", config.type);
    }

    // Author
    if (config.author) {
      updateMeta("author", config.author);
    }

    // Published date
    if (config.publishedDate) {
      updateMeta("article:published_time", config.publishedDate);
    }

    // Updated date
    if (config.updatedDate) {
      updateMeta("article:modified_time", config.updatedDate);
    }

    // Locale
    if (config.locale) {
      updateMeta("og:locale", config.locale);
    }

    // Canonical URL
    if (config.canonicalUrl) {
      updateLinkTag("canonical", config.canonicalUrl);
    }

    // Alternate hreflang
    if (config.alternates && config.alternates.length > 0) {
      config.alternates.forEach(alt => {
        const link = document.createElement("link");
        link.rel = "alternate";
        link.hrefLang = alt.lang;
        link.href = alt.href;
        document.head.appendChild(link);
      });
    }

    // Robots
    if (config.robots) {
      updateMeta("robots", config.robots);
    }

    // Structured data
    if (config.structuredData) {
      updateStructuredData(config.structuredData);
    }

    return () => {
      // Cleanup alternates
      if (config.alternates) {
        config.alternates.forEach(alt => {
          const links = document.querySelectorAll(`link[hreflang="${alt.lang}"]`);
          links.forEach(link => link.remove());
        });
      }
    };
  }, [config]);
};

/**
 * Utilitário para atualizar meta tags
 */
const updateMeta = (name: string, content: string) => {
  let meta = document.querySelector(
    `meta[name="${name}"], meta[property="${name}"]`
  ) as HTMLMetaElement;

  if (!meta) {
    meta = document.createElement("meta");
    if (name.startsWith("og:")) {
      meta.setAttribute("property", name);
    } else {
      meta.setAttribute("name", name);
    }
    document.head.appendChild(meta);
  }

  meta.content = content;
};

/**
 * Utilitário para atualizar link tags
 */
const updateLinkTag = (rel: string, href: string) => {
  let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
};

/**
 * Utilitário para adicionar structured data JSON-LD
 */
const updateStructuredData = (data: Record<string, unknown>) => {
  // Remover script anterior
  const existingScript = document.getElementById("structured-data");
  if (existingScript) {
    existingScript.remove();
  }

  // Adicionar novo script
  const script = document.createElement("script");
  script.id = "structured-data";
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
};

/**
 * Hook para adicionar breadcrumb schema dinamicamente
 */
export const useBreadcrumb = (items: Array<{ name: string; url: string }>) => {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    };

    updateStructuredData(breadcrumbSchema);
  }, [items]);
};

/**
 * Hook para adicionar article schema dinamicamente
 */
export const useArticleSchema = (config: {
  title: string;
  description: string;
  image: string;
  author: string;
  publishedDate: string;
  updatedDate?: string;
  articleBody?: string;
}) => {
  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: config.title,
      description: config.description,
      image: config.image,
      author: {
        "@type": "Person",
        name: config.author,
      },
      datePublished: config.publishedDate,
      ...(config.updatedDate && { dateModified: config.updatedDate }),
      ...(config.articleBody && { articleBody: config.articleBody }),
    };

    updateStructuredData(articleSchema);
  }, [config]);
};

/**
 * Hook para adicionar review/rating schema
 */
export const useReviewSchema = (config: {
  itemReviewed: string;
  reviewRating: number;
  ratingValue: number;
  reviewCount?: number;
  author?: string;
  reviewBody?: string;
}) => {
  useEffect(() => {
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": "LocalBusiness",
        name: config.itemReviewed,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: config.ratingValue,
        bestRating: 5,
        worstRating: 1,
      },
      ...(config.reviewCount && { reviewCount: config.reviewCount }),
      ...(config.author && { author: { "@type": "Person", name: config.author } }),
      ...(config.reviewBody && { reviewBody: config.reviewBody }),
    };

    updateStructuredData(reviewSchema);
  }, [config]);
};

export default useSEOMeta;
