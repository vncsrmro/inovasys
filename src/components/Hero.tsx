import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import RetroGrid from "./RetroGrid";

const Hero = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de uma consulta sobre os serviços de desenvolvimento da INOVASYS. Meu foco é [Landing Page/Sistema Web/Site Institucional].",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Animated Retro Grid Background */}
      <RetroGrid className="opacity-60" />

      {/* Subtle gradient orbs - optimized with reduced blur */}
      <div className="absolute w-[600px] h-[600px] bg-accent/15 rounded-full blur-[100px] -top-64 -right-32 will-change-transform" />
      <div className="absolute w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] bottom-0 left-0 will-change-transform" />

      <div className="container relative z-10 px-4 sm:px-6 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-6">
              {t("hero.title1")}
              <br />
              <span className="text-accent drop-shadow-[0_0_30px_rgba(64,229,145,0.5)]">
                {t("hero.title2")}
              </span>
            </h1>
          </div>

          <p
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.description")}{" "}
            <strong className="font-semibold text-accent">{t("hero.systems")}</strong>{" "}
            {t("hero.and")}{" "}
            <strong className="font-semibold text-accent">{t("hero.landingPages")}</strong>
            {t("hero.descEnd")}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="relative bg-accent hover:bg-accent/90 text-primary font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-6 sm:py-7 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 group animate-glow"
            >
              <MessageCircle className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">{t("hero.cta")}</span>
              <span className="sm:hidden">{t("hero.ctaMobile")}</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div
            className="pt-12 text-white/60 text-sm animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {t("hero.response")}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "1s" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-accent rounded-full mx-auto animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
