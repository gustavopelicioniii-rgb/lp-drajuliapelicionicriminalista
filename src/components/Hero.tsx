import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-handcuffs.jpg";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20uma%20advogada%20criminalista%20URGENTE.%20Vim%20pelo%20site.";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[90vh] items-center section-padding pt-36 md:pt-40">
      {/* Background image */}
      <img
        src={heroImg}
        alt="advogada criminalista Atibaia SP escritório Advocacia S Silva"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Advogada Criminalista em Atibaia SP — Defesa Criminal 24 Horas
          </h1>
          <h2 className="mt-5 font-body text-base font-normal leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
            Preso em flagrante? Sendo investigado? Cada minuto sem defesa técnica pode custar sua liberdade. Atendimento imediato em delegacias, audiências de custódia, Tribunal do Júri e Habeas Corpus em Atibaia e região.
          </h2>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto font-bold" style={{ minHeight: 48 }}>
                <WhatsAppIcon size={18} /> FALAR AGORA COM ADVOGADA
              </Button>
            </a>
            <a href="tel:+5511971883485">
              <Button size="lg" variant="outline" className="w-full gap-2 border-primary text-primary hover:bg-primary/10 sm:w-auto font-bold" style={{ minHeight: 48 }}>
                📞 (11) 97188-3485
              </Button>
            </a>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-destructive/50 bg-destructive/10 px-4 py-2 text-sm font-bold text-destructive">
            ⚡ ATENDIMENTO EM ATÉ 30 MINUTOS · PLANTÃO 24H · NÃO ESPERE
          </div>
        </div>
      </div>
    </section>
  );
}
