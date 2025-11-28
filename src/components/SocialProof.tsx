import { useTranslation } from "react-i18next";

const SocialProof = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem do time/workspace */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group animate-slide-in-left">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
              alt="Equipe INOVASYS trabalhando em projetos"
              loading="lazy"
              decoding="async"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-lg font-semibold drop-shadow-lg">
                {t("socialProof.teamCaption")}
              </p>
            </div>
          </div>

          {/* Texto e métricas */}
          <div className="space-y-6 animate-slide-in-right">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight">
              {t("socialProof.title")}{" "}
              <span className="text-accent">{t("socialProof.titleAccent")}</span>{" "}
              {t("socialProof.titleEnd")}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t("socialProof.description")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-6">
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">
                  {t("socialProof.metric1")}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {t("socialProof.metric1Label")}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">
                  {t("socialProof.metric2")}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {t("socialProof.metric2Label")}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl sm:text-5xl font-black text-accent">
                  {t("socialProof.metric3")}
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  {t("socialProof.metric3Label")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
