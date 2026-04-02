import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import draPhoto from "@/assets/dra-sidney.jpeg";

const seals = ["OAB/MG", "Atibaia – SP", "Defesa Criminal", "Atendimento 24h"];

export default function About() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="sobre" ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <div className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
          {/* Photo */}
          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg border border-border">
            <img
              src={draPhoto}
              alt="Dra Julia Pelicioni — advogada criminalista Atibaia SP"
              className="w-full h-full object-cover object-top"
              loading="lazy"
              width={600}
              height={750}
            />
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground md:text-3xl">
              Conheça a Dra Julia Pelicioni — Advogada Criminalista em Atibaia SP
            </h2>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground md:mt-5 md:space-y-4 md:text-base">
              <p>
                A Dra Julia Pelicioni atua com um perfil combativo e inovador na prestação de serviços jurídicos em Atibaia e região. Com escritório no centro de Atibaia — SP, a Dra Julia é advogada criminalista com atuação implacável na defesa dos direitos de seus clientes.
              </p>
              <p>
                Atuamos em casos de alta complexidade — prisões em flagrante, inquéritos policiais, processos criminais, Tribunal do Júri e Habeas Corpus — sempre com estratégia agressiva, ética e comprometimento total com a sua liberdade.
              </p>
              <p>
                Cada cliente é atendido de forma personalizada, com atenção total às particularidades do caso e comunicação direta em todas as fases do processo. Quando sua liberdade está em risco, a Dra Julia está pronta para lutar por você.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2 md:mt-6 md:gap-3">
              {seals.map((s) => (
                <span key={s} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold text-primary sm:text-xs md:px-4">
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-5 text-xs text-muted-foreground md:text-sm">
              📍 R. José Bim, 312 – Centro, Atibaia – SP, 12940-640
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
