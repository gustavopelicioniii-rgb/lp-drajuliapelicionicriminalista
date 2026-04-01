import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20defesa%20criminal%20URGENTE.%20Vim%20pelo%20site.";

export default function FinalCTA() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="contato" ref={ref} className={`relative section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="container-custom text-center">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">
          NÃO ESPERE O PROBLEMA PIORAR. SUA LIBERDADE NÃO PODE ESPERAR.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground font-semibold">
          Entre em contato AGORA com a Advocacia S Silva e receba orientação jurídica imediata — sigilosa, sem compromisso e sem julgamento.
        </p>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 inline-block">
          <Button size="lg" className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 text-base px-8 font-bold" style={{ minHeight: 56 }}>
            <WhatsAppIcon size={20} /> FALAR COM ADVOGADA NO WHATSAPP AGORA
          </Button>
        </a>
        <p className="mt-3 text-sm text-muted-foreground">
          WhatsApp: (11) 97188-3485
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          📍 Atibaia – SP · ⏱️ Resposta em até 30 minutos · 🔒 Sigilo total garantido
        </p>
      </div>
    </section>
  );
}
