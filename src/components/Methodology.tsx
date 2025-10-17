import { Lightbulb, Code, Database, Rocket } from "lucide-react";

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
    <section id="metodologia" className="py-24 bg-background">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-foreground tracking-tight">
            Tecnologia de Última Geração.
            <br />
            <span className="text-accent">Sua Ideia, Nossa Execução Impecável.</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[calc(50%+2rem)] w-full h-0.5 bg-gradient-to-r from-accent/50 to-accent/20" />
              )}

              <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-lg h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-5xl font-black text-accent/20 leading-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
