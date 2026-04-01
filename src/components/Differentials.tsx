import { Shield, Lock, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { icon: Shield, title: "Defesa Técnica de Alto Nível", desc: "Estratégias jurídicas desenvolvidas individualmente para cada caso. Atuamos em inquéritos, audiências, júri e tribunais superiores com profundidade técnica." },
  { icon: Lock, title: "Sigilo Absoluto", desc: "Seu caso é tratado com total confidencialidade. Do primeiro contato ao encerramento do processo, discrição e respeito são inegociáveis." },
  { icon: Zap, title: "Atendimento Imediato 24h", desc: "Estamos disponíveis quando você mais precisa — inclusive madrugadas, fins de semana e feriados. Presença imediata em delegacias e audiências." },
];

const steps = [
  "Contato via WhatsApp",
  "Análise gratuita do caso",
  "Estratégia de defesa personalizada",
  "Atuação imediata",
];

export default function Differentials() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Por que escolher a Advocacia S Silva?
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_hsl(43,52%,54%,0.2)]">
              <c.icon className="text-primary" size={32} />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-16">
          <h3 className="text-center font-display text-xl font-bold text-foreground mb-8">Como funciona o atendimento</h3>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 md:flex-col md:text-center md:flex-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-foreground">{step}</span>
                {i < steps.length - 1 && <div className="hidden md:block absolute" />}
              </div>
            ))}
          </div>
          {/* Connector line desktop */}
          <div className="hidden md:block mx-auto mt-[-28px] mb-4 h-0.5 bg-primary/20" style={{ width: "70%", marginLeft: "15%" }} />
        </div>
      </div>
    </section>
  );
}
