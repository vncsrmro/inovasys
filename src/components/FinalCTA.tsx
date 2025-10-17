import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Quero transformar minha empresa com a INOVASYS. Vamos conversar sobre meu projeto.",
      "_blank"
    );
  };

  return (
    <section className="py-32 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl top-0 right-0" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl bottom-0 left-0" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-black text-primary-foreground leading-tight tracking-tight">
            Se o seu projeto é complexo,
            <br />
            <span className="text-accent">sua parceria deve ser simples.</span>
          </h2>

          <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
            Pronto para ter um ativo digital que realmente trabalha para o seu negócio,
            em vez de um custo?
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-xl px-10 py-8 rounded-xl shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 group"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Inicie Seu Projeto Conosco
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <p className="text-primary-foreground/70 text-sm pt-4">
            Fale agora com um Estrategista da INOVASYS
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
