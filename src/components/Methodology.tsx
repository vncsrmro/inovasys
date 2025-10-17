import { Lightbulb, Code, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Estratégia & UX/UI",
    description:
      "Definimos a estrutura e o design para garantir a melhor experiência e a maior conversão.",
  },
  {
    icon: Code,
    number: "02",
    title: "Desenvolvimento Ágil (React/TypeScript)",
    description:
      "Construção da solução com o que há de mais moderno e eficiente no mercado (SPA, performance).",
  },
  {
    icon: Database,
    number: "03",
    title: "Back-end Robusto (Supabase/PostgreSQL)",
    description:
      "Segurança, escalabilidade e acesso controlado aos dados, garantindo um produto que cresce com você.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega e Acompanhamento",
    description:
      "Lançamento e suporte para garantir que o projeto atinja seu objetivo principal: Gerar ROI.",
  },
];

const Methodology = () => {
  return (
    <section id="metodologia" className="py-24 bg-gradient-to-br from-primary/95 via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_48px]" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tecnologia de Última Geração.
            <br />
            <span className="text-accent block sm:inline">Sua Ideia, Nossa Execução Impecável.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Vertical timeline for mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/20 via-accent/40 to-accent/20 rounded-full lg:hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-accent rounded-full shadow-[0_0_10px_rgba(64,229,145,0.6)]"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Connector line with animation */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-full h-1 bg-gradient-to-r from-accent/60 via-accent/30 to-accent/10 rounded-full animate-pulse" />
              )}

              <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 hover:border-accent transition-all duration-500 hover:shadow-[0_0_30px_rgba(64,229,145,0.3)] hover:-translate-y-3 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-all duration-500 group-hover:rotate-[360deg]">
                    <step.icon className="w-6 h-6 text-accent group-hover:drop-shadow-[0_0_8px_rgba(64,229,145,0.6)]" />
                  </div>
                  <span className="text-5xl font-black bg-gradient-to-br from-white/40 to-accent/60 bg-clip-text text-transparent leading-none group-hover:from-accent group-hover:to-accent/80 transition-all">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  {step.title}
                </h3>

                <p className="text-primary-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
