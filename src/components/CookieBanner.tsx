import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies_accepted");
    if (!accepted) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies_accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 md:flex md:items-center md:justify-between md:px-8">
      <p className="text-sm text-muted-foreground">
        Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
        <a href="#" className="text-primary underline">Política de Privacidade</a>.
      </p>
      <Button onClick={accept} size="sm" className="mt-3 bg-primary text-primary-foreground hover:bg-primary/90 md:mt-0 md:ml-4">
        Aceitar
      </Button>
    </div>
  );
}
