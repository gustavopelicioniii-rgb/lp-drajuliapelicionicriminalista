import { MessageCircle, Phone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK = "https://wa.me/551144136900?text=Olá!%20Preciso%20de%20um%20advogado%20criminalista.%20Vim%20pelo%20site.";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[90vh] items-center section-padding pt-28 md:pt-32">
      {/* Overlay bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Advogado Criminalista em Atibaia SP — Defesa Criminal 24 Horas
          </h1>
          <h2 className="mt-5 font-body text-base font-normal leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Atendimento imediato em prisão em flagrante, inquérito policial, audiências e Tribunal do Júri. Estratégia, sigilo e agilidade para proteger seus direitos em Atibaia e região.
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto" style={{ minHeight: 48 }}>
                <MessageCircle size={18} /> Falar Agora no WhatsApp
              </Button>
            </a>
            <a href="tel:+551144136900">
              <Button size="lg" variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary/10 sm:w-auto" style={{ minHeight: 48 }}>
                <Phone size={18} /> (11) 4413-6900
              </Button>
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary">
            <Zap size={14} /> Atendimento em até 30 minutos · Disponível 24h
          </div>
        </div>
      </div>
    </section>
  );
}
