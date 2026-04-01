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
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Atuação em TODOS os tipos de crime — Defesa implacável
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Estratégias de defesa desenvolvidas caso a caso. Não importa a gravidade — sua liberdade é nossa prioridade.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {specialties.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-background px-5 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary">
              {s}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-bold text-primary">
          Atendemos em Atibaia, Bragança Paulista, Itatiba, Jundiaí, Campinas e em todo o território nacional.
        </p>

        <div className="mt-6 text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold" style={{ minHeight: 48 }}>
              <WhatsAppIcon size={18} /> CONSULTAR SOBRE MEU CASO AGORA
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
