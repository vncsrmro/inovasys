import { useTranslation } from "react-i18next";
import { Sparkles, Code2, Globe, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

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
    <section
      className="py-24 bg-gradient-to-b from-muted/50 via-background to-background relative overflow-hidden"
      id="servicos"
    >
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            {t("services.badge")}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="group h-full p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-accent/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(64,229,145,0.15)] hover:-translate-y-3 hover:scale-[1.02] cursor-pointer">
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-500 group-hover:rotate-[360deg]">
                    <service.icon className="w-7 h-7 text-accent group-hover:drop-shadow-[0_0_8px_rgba(64,229,145,0.6)]" />
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.link ? (
                    <>
                      {t(service.descriptionKey).split("RAT Móvel")[0]}
                      <a
                        href={service.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-accent/80 font-semibold transition-colors underline decoration-accent/30 hover:decoration-accent"
                      >
                        {service.link.text}
                      </a>
                      {t(service.descriptionKey).split("RAT Móvel")[1] || ""}
                    </>
                  ) : (
                    t(service.descriptionKey)
                  )}
                </p>

                <div className="pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-accent">
                    {t(service.metricKey)}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
