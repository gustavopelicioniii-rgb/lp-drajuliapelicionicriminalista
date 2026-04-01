import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  { name: "Carlos M.", text: "Me ligaram em menos de 20 minutos após eu enviar mensagem. Meu irmão foi solto em audiência de custódia graças à atuação rápida e técnica da Dra. Sidney. Profissionalismo absoluto." },
  { name: "Fernanda L.", text: "Fui intimada para depor e estava desesperada. A Dra. me orientou com total sigilo e me acompanhou na delegacia. Sem ela, eu teria cometido erros gravíssimos." },
  { name: "Ricardo S.", text: "Escritório sério, que realmente entende de defesa criminal. A Dra. Sidney conduziu meu caso no Júri com maestria e combatividade. Recomendo para qualquer caso criminal." },
  { name: "Ana P.", text: "Atendimento 24h de verdade. Precisei em pleno sábado de madrugada e fui atendida prontamente. Profissionalismo e empatia que fazem toda diferença quando você está desesperada." },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="depoimentos" ref={ref} className={`section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          O que dizem nossos clientes
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                  <div className="flex gap-0.5 text-primary text-xs">★★★★★</div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <p className="mt-3 text-xs text-muted-foreground">Via Google</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
