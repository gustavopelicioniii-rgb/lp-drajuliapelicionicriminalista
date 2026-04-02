import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const cities = [
  "Atibaia", "Bragança Paulista", "Itatiba", "Jundiaí", "Piracaia",
  "Nazaré Paulista", "Mairiporã", "Francisco Morato", "Campo Limpo Paulista",
  "Jarinu", "Vinhedo", "Valinhos", "Campinas", "São Paulo",
];

export default function Coverage() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="text-center font-display text-xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Atendemos em Atibaia e toda a região — PRESENCIALMENTE
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-3 text-center text-sm text-muted-foreground md:mt-8 md:space-y-4 md:text-base">
          <p>
            A Dra Julia Pelicioni presta serviços de defesa criminal em Atibaia e em toda a região: Bragança Paulista, Itatiba, Jundiaí, Piracaia, Nazaré Paulista, Mairiporã, Francisco Morato, Campo Limpo Paulista, Jarinu, Vinhedo, Valinhos e Campinas.
          </p>
          <p className="font-semibold text-foreground">
            Para casos federais, operações policiais de grande porte e recursos em tribunais superiores (STJ e STF), atuamos em todo o território nacional.
          </p>
          <p>
            Atendimento presencial, por videochamada ou por telefone — de onde você estiver. Ligue agora: (11) 97188-3485.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2 md:mt-10 md:gap-3">
          {cities.map((city) => (
            <span key={city} className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary sm:text-sm md:px-4 md:py-2">
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
