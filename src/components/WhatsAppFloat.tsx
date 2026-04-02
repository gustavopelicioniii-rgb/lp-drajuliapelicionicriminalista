import WhatsAppIcon from "@/components/WhatsAppIcon";

const WA_LINK = "https://wa.me/5511971883485?text=Olá!%20Preciso%20de%20uma%20advogada%20criminalista%20URGENTE.%20Vim%20pelo%20site.";

export default function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale com uma criminalista agora"
      title="Fale com uma criminalista agora"
      className="fixed bottom-[5.75rem] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-lg animate-pulse-whatsapp transition-transform hover:scale-110 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
