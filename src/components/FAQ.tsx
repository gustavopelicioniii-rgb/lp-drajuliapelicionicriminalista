import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  { q: "Fui preso em flagrante em Atibaia. O que fazer?", a: "Entre em contato imediatamente com a Advocacia S Silva pelo (11) 4413-6900. A orientação jurídica urgente é decisiva ainda na delegacia. A defesa atua na audiência de custódia e analisa a possibilidade de Habeas Corpus para sua liberdade." },
  { q: "Sou obrigado a falar na delegacia?", a: "Não. Você tem o direito constitucional ao silêncio e nada pode ser usado negativamente por exercê-lo. O ideal é ter orientação técnica de um advogado criminalista antes de qualquer depoimento." },
  { q: "O que é audiência de custódia?", a: "É a apresentação do preso ao juiz em até 24 horas após a prisão. O juiz decide se a prisão se mantém, é convertida em preventiva ou se há possibilidade de liberdade. A defesa técnica nesse momento é fundamental para o resultado." },
  { q: "O advogado pode entrar na delegacia a qualquer hora?", a: "Sim. O acesso do advogado ao preso é um direito garantido pelo Estatuto da OAB e pela Constituição Federal, a qualquer hora do dia ou da noite." },
  { q: "Qual a diferença entre prisão preventiva e prisão temporária?", a: "A prisão temporária tem prazo determinado (5 a 30 dias, prorrogáveis em crimes hediondos). A prisão preventiva não tem prazo fixo e pode ser revogada a qualquer momento quando cessados os motivos que a fundamentaram." },
  { q: "O que é Habeas Corpus e quando usar?", a: "É uma ação constitucional para garantir a liberdade de locomoção quando há prisão ilegal ou abuso de poder. Pode ser impetrado a qualquer momento — inclusive na madrugada — para liberar alguém preso ilegalmente." },
  { q: "Processo criminal afeta meu emprego ou viagem ao exterior?", a: "Depende do caso e da fase processual. Em algumas situações pode haver restrições. A Advocacia S Silva analisa cada caso individualmente e atua para minimizar impactos na sua vida pessoal e profissional." },
  { q: "A Advocacia S Silva atende apenas em Atibaia?", a: "Não. Atendemos em Atibaia, Bragança Paulista, Itatiba, Jundiaí, Piracaia, Nazaré Paulista, Mairiporã, Campinas e em todo o território nacional para casos federais e tribunais superiores." },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className={`bg-card section-padding transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <div className="container-custom max-w-3xl">
        <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl lg:text-4xl text-center">
          Dúvidas frequentes sobre defesa criminal em Atibaia e região
        </h2>

        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
