import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de uma consulta sobre os serviços de desenvolvimento da INOVASYS. Meu foco é [Landing Page/Sistema Web/Site Institucional].",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90">
      {/* Enhanced background with patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute w-[800px] h-[800px] bg-accent/20 rounded-full blur-3xl -top-96 -right-48 animate-float" />
        <div className="absolute w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl bottom-0 left-0 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl top-1/3 left-1/4" />
      </div>

      <div className="container relative z-10 px-4 sm:px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Não Desenvolvemos Sites.
              <br />
              <span className="text-accent drop-shadow-[0_0_30px_rgba(64,229,145,0.5)]">
                Criamos Máquinas de Venda e Automação.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light"
          >
            A INOVASYS é a parceira que transforma suas ideias e processos manuais em{" "}
            <strong className="font-semibold text-accent">Sistemas Web</strong> e{" "}
            <strong className="font-semibold text-accent">Landing Pages de Alta Conversão</strong>,
            com design e tecnologia de ponta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="relative bg-accent hover:bg-accent/90 text-primary font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group animate-glow"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Quero um Projeto Fora da Curva</span>
              <span className="sm:hidden">Inicie Seu Projeto</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 text-white/60 text-sm"
          >
            Resposta em até 1 hora útil
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
