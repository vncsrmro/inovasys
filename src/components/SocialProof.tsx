import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const SocialProof = () => {
  const { t } = useTranslation();

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Imagem do time/workspace */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
              alt="Equipe INOVASYS trabalhando em projetos"
              loading="lazy"
              decoding="async"
              className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="text-xl font-bold drop-shadow-lg leading-relaxed">
                {t("socialProof.teamCaption")}
              </p>
            </div>
          </motion.div>

          {/* Texto e métricas */}
          <div className="space-y-10">
            <div className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
              >
                {t("socialProof.title")}{" "}
                <span className="text-primary">{t("socialProof.titleAccent")}</span>{" "}
                {t("socialProof.titleEnd")}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-lg leading-relaxed"
              >
                {t("socialProof.description")}
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 pt-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <p className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">
                  {t("socialProof.metric1")}
                </p>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">
                  {t("socialProof.metric1Label")}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <p className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">
                  {t("socialProof.metric2")}
                </p>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">
                  {t("socialProof.metric2Label")}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <p className="text-5xl sm:text-6xl font-black text-primary tracking-tighter">
                  {t("socialProof.metric3")}
                </p>
                <p className="text-sm text-white/50 font-medium uppercase tracking-wider">
                  {t("socialProof.metric3Label")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
