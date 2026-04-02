/**
 * Google Analytics 4 e Google Tag Manager Configuration
 * Rastreamento avançado de conversões, eventos e comportamento de usuário
 */

// IDs de rastreamento
export const GA4_ID = "G-XXXXXXXXXX"; // Substitua com seu ID GA4
export const GTM_ID = "GTM-XXXXXXXXX"; // Substitua com seu ID GTM

/**
 * Tipos de eventos para rastreamento
 */
export enum AnalyticsEventType {
  // Conversões
  CALL_NOW = "call_now",
  WHATSAPP_CLICK = "whatsapp_click",
  CONTACT_FORM_SUBMIT = "contact_form_submit",

  // Engajamento
  SECTION_VIEW = "section_view",
  SCROLL_DEPTH = "scroll_depth",
  TIME_ON_PAGE = "time_on_page",

  // Busca e SEO
  SEARCH = "search",
  FILTER = "filter",
  SORT = "sort",

  // Social
  SOCIAL_SHARE = "social_share",
  VIDEO_PLAY = "video_play",
  VIDEO_COMPLETE = "video_complete",

  // Erro e performance
  ERROR = "error",
  PERFORMANCE_METRIC = "performance_metric",
}

/**
 * Interface para dados de evento customizado
 */
export interface AnalyticsEvent {
  action: AnalyticsEventType;
  category?: string;
  label?: string;
  value?: number;
  customData?: Record<string, unknown>;
}

/**
 * Carregar Google Tag Manager
 */
export const loadGTM = (): void => {
  if (typeof window === "undefined") return;

  // GTM script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);

  // GTM noscript iframe
  const noscript = document.createElement("noscript");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
  iframe.height = "0";
  iframe.width = "0";
  iframe.style.display = "none";
  iframe.style.visibility = "hidden";
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};

/**
 * Rastrear evento customizado (GA4 + GTM)
 */
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  const { action, category, label, value, customData } = event;

  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
    ...customData,
  });

  // Enviar também para GTM dataLayer
  if (window.dataLayer) {
    window.dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
      ...customData,
    });
  }
};

/**
 * Rastrear vista de página
 */
export const trackPageView = (pagePath: string, pageTitle?: string): void => {
  if (typeof window === "undefined" || !window.gtag) return;

  window.gtag("event", "page_view", {
    page_path: pagePath,
    page_title: pageTitle || document.title,
  });
};

/**
 * Rastrear conversão (lead, telefone, WhatsApp)
 */
export const trackConversion = (
  conversionType: "call" | "whatsapp" | "form",
  details?: Record<string, unknown>
): void => {
  trackEvent({
    action:
      conversionType === "call"
        ? AnalyticsEventType.CALL_NOW
        : conversionType === "whatsapp"
          ? AnalyticsEventType.WHATSAPP_CLICK
          : AnalyticsEventType.CONTACT_FORM_SUBMIT,
    category: "conversion",
    label: `${conversionType}_conversion`,
    customData: details,
  });
};

/**
 * Rastrear profundidade de scroll
 */
export const trackScrollDepth = (percentage: number): void => {
  trackEvent({
    action: AnalyticsEventType.SCROLL_DEPTH,
    category: "engagement",
    label: `scroll_${percentage}%`,
    value: percentage,
  });
};

/**
 * Rastrear visualização de seção
 */
export const trackSectionView = (sectionId: string, sectionName: string): void => {
  trackEvent({
    action: AnalyticsEventType.SECTION_VIEW,
    category: "engagement",
    label: sectionName,
    customData: {
      section_id: sectionId,
    },
  });
};

/**
 * Rastrear erro
 */
export const trackError = (errorMessage: string, errorType?: string): void => {
  trackEvent({
    action: AnalyticsEventType.ERROR,
    category: "error",
    label: errorType || "general_error",
    customData: {
      error_message: errorMessage,
    },
  });
};

/**
 * Rastrear métrica de performance (Core Web Vitals)
 */
export const trackPerformanceMetric = (
  metricName: string,
  metricValue: number,
  unit?: string
): void => {
  trackEvent({
    action: AnalyticsEventType.PERFORMANCE_METRIC,
    category: "performance",
    label: metricName,
    value: Math.round(metricValue),
    customData: {
      unit: unit || "ms",
    },
  });
};

/**
 * Rastrear compartilhamento em redes sociais
 */
export const trackSocialShare = (platform: string, itemTitle?: string): void => {
  trackEvent({
    action: AnalyticsEventType.SOCIAL_SHARE,
    category: "social",
    label: platform,
    customData: {
      content: itemTitle,
    },
  });
};

/**
 * Hook para rastrear tempo na página
 */
export const trackTimeOnPage = (): (() => void) => {
  let startTime = Date.now();

  return () => {
    const timeOnPage = Math.round((Date.now() - startTime) / 1000);
    trackEvent({
      action: AnalyticsEventType.TIME_ON_PAGE,
      category: "engagement",
      value: timeOnPage,
      customData: {
        page_title: document.title,
      },
    });
  };
};

/**
 * Inicializar rastreamento
 */
export const initializeAnalytics = (): void => {
  if (typeof window === "undefined") return;

  // Carregar GTM
  loadGTM();

  // Rastrear página inicial
  trackPageView(window.location.pathname, document.title);

  // Rastrear Core Web Vitals se disponível
  if ("web-vital" in window) {
    const reportWebVitals = (metric: any) => {
      trackPerformanceMetric(metric.name, metric.value, metric.unit);
    };

    // Listener para Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        // LCP
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          trackPerformanceMetric("LCP", lastEntry.renderTime || lastEntry.loadTime);
        });
        lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            trackPerformanceMetric("FID", entry.processingDuration);
          });
        });
        fidObserver.observe({ entryTypes: ["first-input"] });

        // CLS
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          trackPerformanceMetric("CLS", clsValue);
        });
        clsObserver.observe({ entryTypes: ["layout-shift"] });
      } catch (e) {
        console.debug("Web Vitals tracking not available", e);
      }
    }
  }
};

/**
 * Adicionar tipos globais para window
 */
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    "web-vital"?: boolean;
  }
}
