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
      <div className="fixed left-0 right-0 top-0 z-[60] bg-[hsl(0,70%,25%)] px-2 py-1.5 text-center sm:px-4 sm:py-1.5 min-h-[30px] flex items-center justify-center">
        <span className="text-[8px] font-bold uppercase leading-tight tracking-[0.12em] text-primary min-[380px]:text-[9px] sm:text-xs">
          PLANTÃO CRIMINAL 24H EM ATIBAIA E REGIÃO — ATENDIMENTO IMEDIATO
        </span>
      </div>

      <header className="fixed left-0 right-0 top-[30px] z-50 border-b border-border bg-background/95 backdrop-blur-sm sm:top-[34px]">
        <div className="container-custom flex h-12 items-center justify-between md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex min-w-0 flex-col justify-center" aria-label="Início">
            <span className="font-display text-sm font-bold leading-none text-foreground md:text-xl">Dra Julia Pelicioni</span>
            <span className="text-[9px] leading-none text-muted-foreground tracking-[0.12em] md:text-[10px]">Advogada Criminalista · OAB/MG</span>
            <span className="mt-1 h-0.5 w-10 bg-primary md:w-12" />
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
          <div className="flex items-center gap-2 md:hidden">
            <button onClick={() => setOpen(!open)} aria-label="Abrir menu" className="p-1 text-foreground">
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
          <nav className="border-t border-border bg-background px-4 pb-4 pt-3 md:hidden" aria-label="Menu mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
