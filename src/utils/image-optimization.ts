/**
 * Image Optimization Utilities
 * Melhora performance via lazy loading, webp, e responsive images
 */

export interface ImageOptimizationProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  quality?: number;
}

/**
 * Gera srcset otimizado para imagens responsivas
 */
export const generateSrcSet = (src: string): string => {
  const ext = src.split(".").pop() || "jpg";
  const baseSrc = src.replace(`.${ext}`, "");

  return `
    ${baseSrc}-sm.${ext} 640w,
    ${baseSrc}-md.${ext} 1024w,
    ${baseSrc}-lg.${ext} 1920w
  `.trim();
};

/**
 * Gera formato picture com fallback para browsers antigos
 */
export const generatePictureHTML = (
  src: string,
  alt: string,
  className?: string
): string => {
  const baseSrc = src.replace(/\.[^.]+$/, "");

  return `
    <picture>
      <source srcset="${baseSrc}.webp" type="image/webp" />
      <source srcset="${baseSrc}.jpg" type="image/jpeg" />
      <img src="${baseSrc}.jpg" alt="${alt}" class="${className || ""}" loading="lazy" />
    </picture>
  `;
};

/**
 * Retorna configuração de lazy loading otimizada
 */
export const getLazyLoadingConfig = (): IntersectionObserverInit => ({
  root: null,
  rootMargin: "50px",
  threshold: 0.1,
});

/**
 * Gera URL otimizada para Google Cloud Storage
 */
export const generateOptimizedImageUrl = (
  originalUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: "webp" | "jpg" | "png";
  } = {}
): string => {
  const { width = 800, height = 600, quality = 85, format = "webp" } = options;

  // Se for URL do Google Cloud Storage
  if (originalUrl.includes("storage.googleapis.com")) {
    const params = new URLSearchParams();
    params.append("w", width.toString());
    params.append("h", height.toString());
    params.append("q", quality.toString());
    params.append("fm", format);

    return `${originalUrl}?${params.toString()}`;
  }

  return originalUrl;
};

/**
 * Hook para carregar imagens com retry
 */
export const loadImageWithRetry = async (
  src: string,
  maxRetries = 3
): Promise<void> => {
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
        img.src = src;
      });
    } catch (error) {
      lastError = error as Error;
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
    }
  }

  throw lastError;
};

/**
 * Preload imagens críticas acima do fold
 */
export const preloadCriticalImages = (srcs: string[]): void => {
  if (typeof window === "undefined") return;

  srcs.forEach(src => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
};
