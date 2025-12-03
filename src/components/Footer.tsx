import { useTranslation } from "react-i18next";
import logoInovasys from "@/assets/logo-inovasys.png";
import { MessageCircle, Mail, Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={logoInovasys}
              alt="INOVASYS"
              className="h-10 w-auto mb-6 brightness-0 invert opacity-90"
            />
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t("footer.tagline")}
              <br />
              {t("footer.tagline2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-bold text-white text-lg mb-6">{t("footer.servicesTitle")}</h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-primary transition-colors cursor-default">{t("footer.service1")}</li>
              <li className="hover:text-primary transition-colors cursor-default">{t("footer.service2")}</li>
              <li className="hover:text-primary transition-colors cursor-default">{t("footer.service3")}</li>
              <li className="hover:text-primary transition-colors cursor-default">{t("footer.service4")}</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-bold text-white text-lg mb-6">{t("footer.contactTitle")}</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href="https://wa.me/5519960003434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  (19) 96000-3434
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@inovasys.digital"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  contato@inovasys.digital
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/inovasys.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  @inovasys.digital
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="border-t border-white/5 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <p className="text-sm text-white/40">
              {t("footer.creatorOf")}{" "}
              <a
                href="https://ratmovel.inovasys.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-colors hover:underline"
              >
                RAT Móvel
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
