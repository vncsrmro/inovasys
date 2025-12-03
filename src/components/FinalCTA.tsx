import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Elevated card with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/30 border border-white/10 rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-[0_0_60px_rgba(0,255,102,0.1)] hover:shadow-[0_0_100px_rgba(0,255,102,0.2)] transition-all duration-500 backdrop-blur-md"
          >
            <div className="text-center space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
                {t("finalCta.title")}
                <br />
                <span className="text-primary">{t("finalCta.titleAccent")}</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                {t("finalCta.description")}
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg sm:text-xl px-8 sm:px-10 py-8 rounded-full shadow-[0_0_30px_rgba(0,255,102,0.3)] hover:shadow-[0_0_50px_rgba(0,255,102,0.5)] transition-all hover:scale-105 group"
                >
                  <MessageCircle className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">{t("finalCta.cta")}</span>
                  <span className="sm:hidden">{t("finalCta.ctaMobile")}</span>
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <p className="text-white/40 text-sm pt-4">
                {t("finalCta.note")}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
