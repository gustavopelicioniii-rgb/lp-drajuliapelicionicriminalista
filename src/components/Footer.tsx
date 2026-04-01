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
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="font-display text-xl font-bold text-foreground">Advocacia S Silva</span>
            <div className="mt-1 h-0.5 w-10 bg-primary" />
            <p className="mt-3 text-sm text-muted-foreground">Defesa Criminal Especializada em Atibaia e Região</p>
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
              📞 <a href="tel:+551144136900" className="hover:text-primary transition-colors">(11) 4413-6900</a>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              💬 <a href="https://wa.me/551144136900" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>OAB/SP — Advocacia regulamentada</p>
          <p className="mt-1">© 2025 Advocacia S Silva · Todos os direitos reservados</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
