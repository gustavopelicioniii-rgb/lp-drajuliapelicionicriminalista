import { MessageCircle } from "lucide-react";

const WA_LINK = "https://wa.me/551144136900?text=Olá!%20Preciso%20de%20um%20advogado%20criminalista%20urgente.%20Vim%20pelo%20site.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com um criminalista agora"
      title="Fale com um criminalista agora"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-whatsapp transition-transform hover:scale-110"
    >
      <MessageCircle size={28} />
    </a>
  );
}
