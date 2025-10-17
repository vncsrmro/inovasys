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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-primary-foreground leading-[1.1] tracking-tight mb-6">
              Não Desenvolvemos Sites.
              <br />
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Criamos Máquinas de Venda e Automação.
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed font-light"
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
              className="bg-accent hover:bg-accent/90 text-primary font-bold text-lg px-8 py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Quero um Projeto Fora da Curva
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="pt-12 text-primary-foreground/70 text-sm"
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
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
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
