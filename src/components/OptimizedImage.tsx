import React, { useState, useEffect, useRef, ImgHTMLAttributes } from "react";
import { generateOptimizedImageUrl, getLazyLoadingConfig } from "@/utils/image-optimization";

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  quality?: number;
  priority?: boolean;
  srcset?: string;
  sizes?: string;
}

/**
 * Componente de imagem otimizada com:
 * - Lazy loading automático
 * - Suporte a WebP com fallback
 * - Responsive images (srcset)
 * - Preload para images críticas
 * - Otimização de performance
 */
export const OptimizedImage = React.forwardRef<HTMLImageElement, OptimizedImageProps>(
  (
    {
      src,
      alt,
      width = 800,
      height = 600,
      quality = 85,
      priority = false,
      className = "",
      srcset,
      sizes,
      ...props
    },
    ref
  ) => {
    const [imageSrc, setImageSrc] = useState<string>(
      priority ? src : `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='${width} ${height}'%3E%3C/svg%3E`
    );
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    // Mescla refs
    useEffect(() => {
      if (ref) {
        if (typeof ref === "function") {
          ref(imgRef.current);
        } else {
          ref.current = imgRef.current;
        }
      }
    }, [ref]);

    // Lazy loading com Intersection Observer
    useEffect(() => {
      if (priority) {
        setImageSrc(src);
        return;
      }

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.unobserve(entry.target);
        }
      }, getLazyLoadingConfig());

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, [src, priority]);

    // Otimizar URL da imagem
    const optimizedSrc = generateOptimizedImageUrl(src, { width, height, quality, format: "webp" });
    const fallbackSrc = generateOptimizedImageUrl(src, { width, height, quality, format: "jpg" });

    const handleImageLoad = () => {
      setIsLoaded(true);
    };

    const handleImageError = () => {
      // Fallback para JPG se WebP falhar
      if (imageSrc.includes("fm=webp")) {
        setImageSrc(fallbackSrc);
      }
    };

    return (
      <picture>
        {/* WebP para browsers modernos */}
        <source srcSet={optimizedSrc} type="image/webp" />

        {/* JPEG fallback */}
        <source srcSet={fallbackSrc} type="image/jpeg" />

        {/* Imagem principal */}
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          srcSet={srcset}
          sizes={sizes}
          className={`${className} ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
          loading={priority ? "eager" : "lazy"}
          onLoad={handleImageLoad}
          onError={handleImageError}
          decoding="async"
          {...props}
        />
      </picture>
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
