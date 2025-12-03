import { useTranslation } from "react-i18next";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "framer-motion";
import logoArquitetura from "@/assets/clients/arquiteturastival.png";
import logoBosch from "@/assets/clients/bosch.png";
import logoCnh from "@/assets/clients/cnhagora.png";
import logoUituke from "@/assets/clients/uitukeengenharia.png";
import logoWarung from "@/assets/clients/warung.png";
import logoFlypax from "@/assets/clients/flypax.png";
import logoPassabola from "@/assets/clients/passabola.png";
import logoRvtec from "@/assets/clients/rvtec.png";

const clients = [
  { name: "Bosch", logo: logoBosch },
  { name: "Arquitetura Stival", logo: logoArquitetura },
  { name: "CNH Agora", logo: logoCnh },
  { name: "Uituke Engenharia", logo: logoUituke },
  { name: "Warung", logo: logoWarung },
  { name: "Flypax", logo: logoFlypax },
  { name: "Passa Bola", logo: logoPassabola },
  { name: "RVTec", logo: logoRvtec },
];

const ClientsCarousel = () => {
  const { t } = useTranslation();
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      containScroll: false,
    },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section
      id="clientes"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {t("clients.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            {t("clients.title")}
            <br />
            <span className="text-primary">{t("clients.titleAccent")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            {t("clients.subtitle")}
          </motion.p>
        </div>

        {/* Modern Embla Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative"
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 basis-[160px] sm:basis-[200px] md:basis-[220px]"
                >
                  <div className="group relative">
                    <div className="w-full aspect-[3/2] flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 group-hover:border-primary/50 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5519960003434?text=Olá! Quero saber mais sobre como a INOVASYS pode ajudar minha empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 font-bold transition-colors group"
          >
            {t("clients.cta")}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
