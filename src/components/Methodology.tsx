import { useTranslation } from "react-i18next";
import { Lightbulb, Code, Database, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Methodology = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Lightbulb,
      number: "01",
      titleKey: "methodology.step1.title",
      descriptionKey: "methodology.step1.description",
    },
    {
      icon: Code,
      number: "02",
      titleKey: "methodology.step2.title",
      descriptionKey: "methodology.step2.description",
    },
    {
      icon: Database,
      number: "03",
      titleKey: "methodology.step3.title",
      descriptionKey: "methodology.step3.description",
    },
    {
      icon: Rocket,
      number: "04",
      titleKey: "methodology.step4.title",
      descriptionKey: "methodology.step4.description",
    },
  ];

  return (
    <section
      id="metodologia"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            {t("methodology.title")}
            <br />
            <span className="text-primary block sm:inline mt-2">
              {t("methodology.titleAccent")}
            </span>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[calc(100%-1rem)] w-[calc(100%+2rem)] h-[2px] bg-white/5 z-0">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      className="h-full bg-primary origin-left"
                    />
                  </div>
                )}

                <div className="relative z-10 bg-card/30 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)] hover:-translate-y-2 h-full">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 group-hover:rotate-12">
                        <step.icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="text-4xl font-black text-white/10 group-hover:text-primary/20 transition-colors">
                        {step.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {t(step.titleKey)}
                      </h3>

                      <p className="text-white/60 leading-relaxed text-sm">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </div>
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
