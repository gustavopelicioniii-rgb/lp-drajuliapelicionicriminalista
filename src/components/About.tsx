import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const seals = ["OAB/SP", "Atibaia – SP", "Defesa Criminal", "Atendimento 24h"];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="sobre" ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Image placeholder */}
          <div className="aspect-[4/3] rounded-lg border border-border bg-secondary flex items-center justify-center">
            <span className="text-6xl">⚖️</span>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Conheça a Advocacia S Silva — Criminalista em Atibaia SP
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                A Advocacia S Silva nasceu com um perfil inovador na prestação de serviços jurídicos em Atibaia e região. Localizado no centro de Atibaia — SP, o escritório reúne profissionais especializados em direito criminal, preparados para oferecer defesa técnica de excelência desde o primeiro contato.
              </p>
              <p>
                Atuamos em casos de alta complexidade — prisões em flagrante, inquéritos policiais, processos criminais, Tribunal do Júri e Habeas Corpus — sempre com estratégia, ética e comprometimento total com os resultados.
              </p>
              <p>
                Cada cliente é atendido de forma personalizada, com atenção às particularidades do caso e comunicação clara em todas as fases do processo.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {seals.map((s) => (
                <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-5 text-sm text-muted-foreground">
              📍 R. José Bim, 312 – Centro, Atibaia – SP, 12940-640
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
