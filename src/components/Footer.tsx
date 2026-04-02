import WhatsAppIcon from "@/components/WhatsAppIcon";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card section-padding">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          <div>
            <span className="font-display text-lg font-bold text-foreground md:text-xl">Dra Julia Pelicioni</span>
            <div className="mt-1 h-0.5 w-10 bg-primary" />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Advogada Criminalista — Defesa Criminal Especializada em Atibaia e Região</p>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold text-foreground mb-3">Links Rápidos</h3>
            <nav className="flex flex-col gap-2">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold text-foreground mb-3">Contato</h3>
            <p className="text-sm text-muted-foreground">📍 R. José Bim, 312 – Centro, Atibaia – SP, 12940-640</p>
            <p className="mt-2 text-sm text-muted-foreground">
              📞 <a href="tel:+5511971883485" className="hover:text-primary transition-colors">(11) 97188-3485</a>
            </p>
            <p className="mt-1 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
              <WhatsAppIcon size={14} className="text-whatsapp" />
              <a href="https://wa.me/5511971883485?text=Olá!%20Vim%20pelo%20site%20e%20preciso%20de%20uma%20advogada%20criminalista." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                (11) 97188-3485
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-[11px] text-muted-foreground sm:text-xs">
          <p>OAB/MG — Advocacia regulamentada</p>
          <p className="mt-1">© 2025 Dra Julia Pelicioni · Todos os direitos reservados</p>
          <div className="mt-2 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
