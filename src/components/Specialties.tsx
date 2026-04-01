import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WA_LINK = "https://wa.me/551144136900?text=Olá!%20Preciso%20consultar%20sobre%20meu%20caso.%20Vim%20pelo%20site.";

const specialties = [
  "🌿 Tráfico, Porte e Uso de Drogas",
  "💔 Violência Doméstica — Lei Maria da Penha",
  "⚰️ Homicídio e Tentativa de Homicídio",
  "🏛️ Tribunal do Júri",
  "💰 Roubo, Furto e Estelionato",
  "📱 Crimes Cibernéticos",
  "🏦 Crimes Financeiros e Lavagem de Dinheiro",
  "🔓 Habeas Corpus",
  "🔁 Progressão de Regime / Execução Penal",
  "📢 Ameaça, Injúria e Difamação",
  "🚗 Crimes de Trânsito",
  "📋 Audiência de Custódia",
];

export default function Specialties() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="atuacao" ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Defendemos você em todos os tipos de crime
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-muted-foreground">
          Atuação técnica especializada, com estratégias de defesa desenvolvidas caso a caso.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {specialties.map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-background px-5 py-4 text-base font-medium text-foreground transition-colors hover:border-primary/40">
              {s}
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-semibold text-primary">
          Atendemos em Atibaia, Bragança Paulista, Itatiba, Jundiaí, Campinas e em todo o território nacional.
        </p>

        <div className="mt-6 text-center">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" style={{ minHeight: 48 }}>
              <MessageCircle size={18} /> Consultar sobre meu caso
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
