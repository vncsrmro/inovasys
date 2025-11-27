import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
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
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      dragFree: true,
      align: "start",
      containScroll: false,
    },
    [AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section id="clientes" className="py-24 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Parceiros de Sucesso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Construindo Resultados.
            <br />
            <span className="text-accent">A Confiança de Quem Aposta Alto.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/70 max-w-2xl mx-auto">
            Empresas que confiaram na INOVASYS para digitalizar sua operação
            ou impulsionar suas vendas online.
          </p>
        </div>

        {/* Modern Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 basis-[140px] sm:basis-[160px] md:basis-[180px]"
                >
                  <div className="group relative">
                    <div className="w-full aspect-[4/3] flex items-center justify-center p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-accent/50 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-105">
                      <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        className="max-w-full max-h-full object-contain brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-300">
                      <span className="text-xs font-medium text-white/80 whitespace-nowrap bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-full">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient masks */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-primary to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-primary to-transparent pointer-events-none z-10" />
        </div>

        <div className="text-center mt-16">
          <a
            href="https://wa.me/5519960003434?text=Olá! Quero saber mais sobre como a INOVASYS pode ajudar minha empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-accent hover:text-accent/80 font-semibold transition-colors group"
          >
            Tire Suas Dúvidas e Peça um Orçamento Sem Compromisso
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
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
