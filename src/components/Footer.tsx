import { useTranslation } from "react-i18next";
import logoInovasys from "@/assets/logo-inovasys.png";
import { MessageCircle, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-primary-foreground py-16 relative overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <img
              src={logoInovasys}
              alt="INOVASYS"
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              {t("footer.tagline")}
              <br />
              {t("footer.tagline2")}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.servicesTitle")}</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>{t("footer.service1")}</li>
              <li>{t("footer.service2")}</li>
              <li>{t("footer.service3")}</li>
              <li>{t("footer.service4")}</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">{t("footer.contactTitle")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://wa.me/5519960003434"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  (19) 96000-3434
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@inovasys.digital"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contato@inovasys.digital
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/inovasys.digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @inovasys.digital
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} {t("footer.copyright")}
            </p>
            <p className="text-sm text-primary-foreground/60">
              {t("footer.creatorOf")}{" "}
              <a
                href="https://ratmovel.inovasys.digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-semibold transition-colors underline decoration-accent/30 hover:decoration-accent"
              >
                RAT Móvel
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
