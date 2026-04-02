import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cards = [
  { title: "Defesa Técnica Agressiva", desc: "Estratégias jurídicas individualizadas para cada caso. Atuamos em inquéritos, audiências, júri e tribunais superiores com profundidade técnica e combatividade máxima." },
  { title: "Sigilo Absoluto", desc: "Seu caso é tratado com total confidencialidade. Ninguém saberá que você nos procurou. Discrição e respeito são inegociáveis — do primeiro contato ao encerramento." },
  { title: "Atendimento Imediato 24h", desc: "Madrugada, fim de semana, feriado — não importa. Quando sua liberdade está em jogo, a Dra Julia está pronta para agir. Presença imediata em delegacias e audiências." },
];

const steps = [
  "Contato via WhatsApp",
  "Análise imediata do caso",
  "Estratégia de defesa personalizada",
  "Atuação imediata e agressiva",
];

export default function Differentials() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="text-center font-display text-xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Por que a Dra Julia Pelicioni é diferente?
        </h2>

        <div className="mt-8 grid gap-4 md:mt-12 md:grid-cols-3 md:gap-6">
          {cards.map((c, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-12px_hsl(43,52%,54%,0.2)] md:p-7">
              <h3 className="font-display text-base font-bold text-primary md:text-lg">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-12 md:mt-16">
          <h3 className="mb-6 text-center font-display text-lg font-bold text-foreground md:mb-8 md:text-xl">Como funciona o atendimento</h3>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-4 md:flex-col md:bg-transparent md:px-3 md:py-0 md:text-center">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground md:h-10 md:w-10">
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-foreground md:text-center">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
