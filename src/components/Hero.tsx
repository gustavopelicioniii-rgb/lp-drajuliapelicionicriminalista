import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import heroImg from "@/assets/hero-handcuffs.jpg";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20uma%20advogada%20criminalista%20URGENTE.%20Vim%20pelo%20site.";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[100svh] items-end overflow-hidden px-0 pb-10 pt-24 md:min-h-[90vh] md:items-center md:pb-14 md:pt-40">
      {/* Background image */}
      <img
        src={heroImg}
        alt="Dra Julia Pelicioni — advogada criminalista Atibaia SP"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background md:bg-gradient-to-r md:from-background md:via-background/90 md:to-background/60" />

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-bold leading-[1.05] text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Advogada Criminalista em Atibaia SP — Defesa Criminal 24 Horas
          </h1>
          <h2 className="mt-4 font-body text-sm font-normal leading-relaxed text-muted-foreground sm:text-lg md:mt-5 md:text-xl">
            Preso em flagrante? Sendo investigado? Cada minuto sem defesa técnica pode custar sua liberdade. Dra Julia Pelicioni — atendimento imediato em delegacias, audiências de custódia, Tribunal do Júri e Habeas Corpus em Atibaia e região.
          </h2>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full justify-center gap-2 bg-whatsapp text-sm font-bold text-whatsapp-foreground hover:bg-whatsapp/90 sm:w-auto sm:text-base" style={{ minHeight: 48 }}>
                <WhatsAppIcon size={18} /> FALAR AGORA COM ADVOGADA
              </Button>
            </a>
            <a href="tel:+5511971883485" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full justify-center gap-2 border-primary text-sm font-bold text-primary hover:bg-primary/10 sm:w-auto sm:text-base" style={{ minHeight: 48 }}>
                📞 (11) 97188-3485
              </Button>
            </a>
          </div>

          <div className="mt-5 inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-full border border-destructive/50 bg-destructive/10 px-4 py-2 text-center text-xs font-bold text-destructive sm:text-sm">
            ⚡ ATENDIMENTO EM ATÉ 30 MINUTOS · PLANTÃO 24H · NÃO ESPERE
          </div>
        </div>
      </div>
    </section>
  );
}
