import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const items = [
  { title: "OAB/MG Credenciada", desc: "Advocacia regulamentada" },
  { title: "Defesa Criminal Especializada", desc: "Atibaia e região" },
  { title: "Atuação Implacável", desc: "Casos de alta complexidade" },
  { title: "Atendimento 24h", desc: "Inclusive finais de semana" },
];

export default function TrustBar() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-primary/30">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-1 px-4 text-center">
              <span className="font-body text-sm font-bold text-foreground">{item.title}</span>
              <span className="text-xs text-muted-foreground">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
