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
    <section ref={ref} className={`bg-card py-8 transition-all duration-700 md:py-12 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 md:divide-x md:divide-primary/30">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-0.5 px-2 text-center md:px-4">
              <span className="font-body text-xs font-bold leading-tight text-foreground sm:text-sm">{item.title}</span>
              <span className="text-[11px] leading-snug text-muted-foreground sm:text-xs">{item.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
