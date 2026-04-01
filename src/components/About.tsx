import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import draPhoto from "@/assets/dra-sidney.jpeg";

const seals = ["OAB/SP", "Atibaia – SP", "Defesa Criminal", "Atendimento 24h"];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="sobre" ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          {/* Photo */}
          <div className="aspect-[4/5] rounded-lg border border-border overflow-hidden">
            <img
              src={draPhoto}
              alt="Dra. Sidney da Silva — advogada criminalista Atibaia SP, escritório Advocacia S Silva"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              width={600}
              height={750}
            />
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Conheça a Advocacia S Silva — Advogada Criminalista em Atibaia SP
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                A Advocacia S Silva nasceu com um perfil combativo e inovador na prestação de serviços jurídicos em Atibaia e região. Localizado no centro de Atibaia — SP, o escritório é liderado pela Dra. Sidney da Silva, advogada criminalista com atuação implacável na defesa dos direitos de seus clientes.
              </p>
              <p>
                Atuamos em casos de alta complexidade — prisões em flagrante, inquéritos policiais, processos criminais, Tribunal do Júri e Habeas Corpus — sempre com estratégia agressiva, ética e comprometimento total com a sua liberdade.
              </p>
              <p>
                Cada cliente é atendido de forma personalizada, com atenção total às particularidades do caso e comunicação direta em todas as fases do processo. Quando sua liberdade está em risco, a Dra. Sidney está pronta para lutar por você.
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
