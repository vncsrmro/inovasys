import { Sparkles, Code2, Globe, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const services = [
  {
    icon: TrendingUp,
    title: "Landing Pages de Alta Conversão",
    description: (
      <>
        Páginas singulares, otimizadas para gerar leads ou vendas imediatas. Foco em UX/UI impecável e velocidade ultra-rápida.
      </>
    ),
    metric: "Até 300% mais conversão",
  },
  {
    icon: Code2,
    title: "Sistemas Web Personalizados (SaaS)",
    description: (
      <>
        Transformamos processos internos complexos (como o{" "}
        <a
          href="https://ratmovel.inovasys.digital"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent/80 font-semibold transition-colors underline decoration-accent/30 hover:decoration-accent"
        >
          RAT Móvel
        </a>
        ) em plataformas web seguras, escaláveis e sob medida para sua regra de negócio.
      </>
    ),
    metric: "ROI em 6 meses",
  },
  {
    icon: Globe,
    title: "Sites Institucionais e Portfólios",
    description: (
      <>
        Presença digital robusta que reflete a autoridade da sua marca, com design moderno e arquitetura focada em SEO.
      </>
    ),
    metric: "Autoridade digital",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/50 via-background to-background relative overflow-hidden" id="servicos">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            Nossos Focos de Atuação
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            Digitalização Estratégica
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções sob medida para transformar seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(64,229,145,0.15)] hover:-translate-y-3 hover:scale-[1.02] cursor-pointer">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:rotate-[360deg]">
                    <service.icon className="w-7 h-7 text-accent group-hover:drop-shadow-[0_0_8px_rgba(64,229,145,0.6)]" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-accent">
                    {service.metric}
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
