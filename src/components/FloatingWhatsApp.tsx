import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de conversar sobre desenvolvimento web.",
      "_blank"
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(0,255,102,0.4)] hover:shadow-[0_0_50px_rgba(0,255,102,0.6)] rounded-full w-16 h-16 p-0 group transition-all duration-300 hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-8 w-8 group-hover:rotate-12 transition-transform duration-300" />

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </Button>
    </motion.div>
  );
};

export default FloatingWhatsApp;
