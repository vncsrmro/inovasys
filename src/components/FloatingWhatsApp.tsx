import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de conversar sobre desenvolvimento web.",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-accent hover:bg-accent/90 text-primary shadow-2xl hover:shadow-accent/50 rounded-full w-14 h-14 sm:w-16 sm:h-16 p-0 group animate-float"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 group-hover:scale-110 transition-transform" />
      
      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
    </Button>
  );
};

export default FloatingWhatsApp;
