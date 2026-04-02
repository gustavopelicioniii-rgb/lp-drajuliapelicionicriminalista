import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20consultar%20sobre%20meu%20caso%20URGENTE.%20Vim%20pelo%20site.";

const specialties = [
  "Tráfico, Porte e Uso de Drogas",
  "Violência Doméstica — Lei Maria da Penha",
  "Homicídio e Tentativa de Homicídio",
  "Tribunal do Júri",
  "Roubo, Furto e Estelionato",
  "Crimes Cibernéticos",
  "Crimes Financeiros e Lavagem de Dinheiro",
  "Habeas Corpus",
  "Progressão de Regime / Execução Penal",
  "Ameaça, Injúria e Difamação",
  "Crimes de Trânsito",
  "Audiência de Custódia",
];

export default function Specialties() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="atuacao" ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="text-center font-display text-xl font-bold text-foreground md:text-3xl lg:text-4xl">
          Atuação em TODOS os tipos de crime — Defesa implacável
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground md:mt-4 md:text-base">
          Estratégias de defesa desenvolvidas caso a caso pela Dra Julia Pelicioni. Não importa a gravidade — sua liberdade é nossa prioridade.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 md:gap-4">
          {specialties.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary md:px-5 md:py-4 md:text-base">
              {s}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-base font-bold text-primary md:mt-10 md:text-lg">
          Atendemos em Atibaia, Bragança Paulista, Itatiba, Jundiaí, Campinas e em todo o território nacional.
        </p>

        <div className="mt-6 text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex w-full max-w-sm">
            <Button size="lg" className="w-full justify-center gap-2 bg-primary font-bold text-primary-foreground hover:bg-primary/90" style={{ minHeight: 48 }}>
              <WhatsAppIcon size={18} /> CONSULTAR SOBRE MEU CASO AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
