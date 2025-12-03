import { useTranslation } from "react-i18next";
import { Sparkles, Code2, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: TrendingUp,
      titleKey: "services.landing.title",
      descriptionKey: "services.landing.description",
      metricKey: "services.landing.metric",
      link: null,
    },
    {
      icon: Code2,
      titleKey: "services.saas.title",
      descriptionKey: "services.saas.description",
      metricKey: "services.saas.metric",
      link: {
        url: "https://ratmovel.inovasys.digital",
        text: "RAT Móvel",
      },
    },
    {
      icon: Globe,
      titleKey: "services.institutional.title",
      descriptionKey: "services.institutional.description",
      metricKey: "services.institutional.metric",
      link: null,
    },
  ];

  return (
    <section className="py-32 bg-background relative overflow-hidden" id="servicos">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            {t("services.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            {t("services.title")}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group relative p-8 sm:p-12 rounded-3xl bg-card/30 border border-white/5 hover:border-primary/30 transition-all duration-500 hover:bg-card/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 md:items-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                </div>

                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                    {service.link ? (
                      <>
                        {t(service.descriptionKey).split("RAT Móvel")[0]}
                        <a
                          href={service.link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-semibold transition-colors underline decoration-primary/30 hover:decoration-primary"
                        >
                          {service.link.text}
                        </a>
                        {t(service.descriptionKey).split("RAT Móvel")[1] || ""}
                      </>
                    ) : (
                      t(service.descriptionKey)
                    )}
                  </p>

                  <div className="pt-4 flex items-center gap-4 text-primary font-medium">
                    <span className="text-sm tracking-wider uppercase">{t(service.metricKey)}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
