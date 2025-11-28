import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const { t } = useTranslation();

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Quero transformar minha empresa com a INOVASYS. Vamos conversar sobre meu projeto.",
      "_blank"
    );
  };

  return (
    <section
      id="contato"
      className="py-32 bg-gradient-to-br from-primary via-primary to-accent/20 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] will-change-transform" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] will-change-transform" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Elevated card with glassmorphism */}
          <div className="bg-white border-2 border-accent/30 rounded-3xl p-8 sm:p-12 md:p-16 shadow-[0_0_120px_rgba(64,229,145,0.3)] hover:shadow-[0_0_150px_rgba(64,229,145,0.4)] transition-all duration-500 animate-scale-in">
            <div className="text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
                {t("finalCta.title")}
                <br />
                <span className="text-accent">{t("finalCta.titleAccent")}</span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                {t("finalCta.description")}
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-accent hover:bg-accent/90 text-primary font-bold text-base sm:text-lg md:text-xl px-6 sm:px-8 md:px-10 py-6 sm:py-7 md:py-8 rounded-xl shadow-2xl hover:shadow-accent/50 transition-all hover:scale-105 group animate-glow"
                >
                  <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">{t("finalCta.cta")}</span>
                  <span className="sm:hidden">{t("finalCta.ctaMobile")}</span>
                  <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm pt-4">
                {t("finalCta.note")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
