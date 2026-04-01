import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/551144136900?text=Olá!%20Preciso%20de%20um%20advogado%20criminalista.%20Vim%20pelo%20site.";

const cards = [
  { icon: "🚨", title: "Preso em Flagrante", desc: "Situação de extrema urgência. A defesa precisa estar presente na delegacia e na audiência de custódia imediatamente." },
  { icon: "🚔", title: "Conduzido à Delegacia", desc: "Mesmo sem prisão formal, seus direitos precisam ser garantidos desde o primeiro momento na delegacia." },
  { icon: "🔍", title: "Investigado em Inquérito", desc: "Ser alvo de investigação policial exige estratégia desde o início para evitar indiciamento." },
  { icon: "⚖️", title: "Réu em Processo Criminal", desc: "Uma defesa técnica sólida faz toda a diferença entre condenação e absolvição." },
  { icon: "🔒", title: "Preso Preventivamente", desc: "A prisão preventiva pode ser revista. Atuamos com pedidos de revogação e Habeas Corpus." },
  { icon: "📋", title: "Intimado para Depor", desc: "Nunca vá a um depoimento sem orientação jurídica. O direito ao silêncio é seu." },
];

export default function PainSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Você ou alguém que você conhece está passando por isso?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Cada hora sem orientação jurídica pode comprometer o resultado do caso. A Advocacia S Silva atua de forma imediata.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_hsl(43,52%,54%,0.2)]">
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-4 text-lg font-semibold text-primary">Não enfrente isso sozinho. Cada minuto importa.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90" style={{ minHeight: 48 }}>
              <MessageCircle size={18} /> Quero falar com um especialista agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
