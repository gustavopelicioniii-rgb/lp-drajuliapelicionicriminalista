import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20uma%20advogada%20criminalista%20URGENTE.%20Vim%20pelo%20site.";

const cards = [
  { title: "PRESO EM FLAGRANTE", desc: "A polícia prendeu você ou alguém da sua família? A defesa precisa agir AGORA na delegacia e na audiência de custódia. Cada hora preso sem advogada é uma hora perdida." },
  { title: "CONDUZIDO À DELEGACIA", desc: "Levaram você para a delegacia? NÃO FALE NADA sem orientação jurídica. Seus direitos estão sendo violados e você precisa de proteção imediata." },
  { title: "INVESTIGADO EM INQUÉRITO", desc: "A polícia está investigando você? O indiciamento pode acontecer a qualquer momento. Uma estratégia de defesa AGORA pode mudar todo o rumo do caso." },
  { title: "RÉU EM PROCESSO CRIMINAL", desc: "Você está sendo processado criminalmente? Sem defesa técnica agressiva, a condenação é quase certa. Não arrisque sua liberdade." },
  { title: "PRESO PREVENTIVAMENTE", desc: "Preso sem prazo para sair? A prisão preventiva pode e DEVE ser combatida. Habeas Corpus URGENTE pode ser a sua única chance de liberdade." },
  { title: "INTIMADO PARA DEPOR", desc: "Recebeu intimação? NUNCA vá a um depoimento sozinho. Uma palavra errada pode transformar você de testemunha em réu. O silêncio é seu direito." },
];

export default function PainSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Você ou alguém da sua família está passando por isso AGORA?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground font-semibold">
          Cada hora sem uma advogada criminalista pode custar a liberdade. A Advocacia S Silva atua de forma imediata — 24 horas por dia, 7 dias por semana.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_hsl(43,52%,54%,0.2)]">
              <h3 className="font-display text-lg font-bold text-primary">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg font-bold text-destructive">⚠️ NÃO ENFRENTE ISSO SOZINHO. CADA MINUTO CONTA.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90 font-bold" style={{ minHeight: 48 }}>
              <WhatsAppIcon size={18} /> QUERO FALAR COM A ADVOGADA AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
