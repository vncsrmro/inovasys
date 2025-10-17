import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative">
      {/* Subtle blue orb */}
      <div className="absolute -left-48 top-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem do time/workspace */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80" 
              alt="Equipe INOVASYS trabalhando em projetos" 
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-semibold drop-shadow-lg">
                Time dedicado ao seu sucesso digital
              </p>
            </div>
          </motion.div>
          
          {/* Texto e métricas */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Resultados Comprovados
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              Mais de <span className="text-accent">50 projetos</span> entregues com excelência
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Trabalhamos com empresas que querem crescer de forma escalável e sustentável, 
              transformando desafios complexos em oportunidades digitais mensuráveis.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">100%</p>
                <p className="text-sm text-muted-foreground font-medium">Cliente Satisfeito</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">8+</p>
                <p className="text-sm text-muted-foreground font-medium">Anos Mercado</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">24h</p>
                <p className="text-sm text-muted-foreground font-medium">Suporte Ágil</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
