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
    <section className="py-32 bg-gradient-to-br from-primary/95 via-primary to-accent/20 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Light orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/30 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Elevated white card */}
          <div className="bg-white border-2 border-accent/30 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_0_120px_rgba(64,229,145,0.3)] relative z-10">
            <div className="text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                Se o seu projeto é complexo,
                <br />
                <span className="text-accent">sua parceria deve ser simples.</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Pronto para ter um ativo digital que realmente trabalha para o seu negócio,
                em vez de um custo?
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-accent hover:bg-accent/90 text-primary font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-6 sm:py-7 md:py-8 rounded-xl shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 group animate-glow"
                >
                  <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Inicie Seu Projeto Conosco</span>
                  <span className="sm:hidden">Inicie Seu Projeto</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm pt-4">
                Fale agora com um Estrategista da INOVASYS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
