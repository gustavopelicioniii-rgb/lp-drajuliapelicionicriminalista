import { useState } from "react";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20uma%20advogada%20criminalista%20URGENTE.%20Vim%20pelo%20site.";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top crimson bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[hsl(0,70%,25%)] text-center py-2 px-4">
        <span className="text-xs font-bold tracking-widest uppercase text-primary sm:text-sm">
          PLANTÃO CRIMINAL 24H EM ATIBAIA E REGIÃO — ATENDIMENTO IMEDIATO
        </span>
      </div>

      <header className="fixed top-[36px] left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="container-custom flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col" aria-label="Início">
            <span className="font-display text-lg font-bold text-foreground md:text-xl">Advocacia S Silva</span>
            <span className="text-[10px] text-muted-foreground tracking-wide">Advogada Criminalista · OAB/SP</span>
            <span className="h-0.5 w-12 bg-primary mt-1" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} aria-label={item.label} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:block" aria-label="Contato Imediato">
            <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
              <WhatsAppIcon size={16} /> Contato Imediato
            </Button>
          </a>

          {/* Mobile buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Button size="sm" className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90">
                <WhatsAppIcon size={16} />
              </Button>
            </a>
            <button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="text-foreground">
              {open ? (
                <span className="text-2xl font-light">✕</span>
              ) : (
                <div className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-6 bg-foreground" />
                  <span className="block h-0.5 w-6 bg-foreground" />
                  <span className="block h-0.5 w-6 bg-foreground" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <nav className="border-t border-border bg-background px-4 pb-6 pt-4 md:hidden" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
