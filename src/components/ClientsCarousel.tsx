import logoInovasys from "@/assets/logo-inovasys.png";
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
  return (
    <section id="clientes" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight">
            Construindo Resultados.
            <br />
            <span className="text-accent">A Confiança de Quem Aposta Alto.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja algumas das empresas que confiaram na INOVASYS para digitalizar sua operação
            ou impulsionar suas vendas online.
          </p>
        </div>

        {/* Infinite scroll carousel */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <div className="flex animate-scroll">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
                >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5519960003434?text=Olá! Quero saber mais sobre como a INOVASYS pode ajudar minha empresa."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-accent hover:text-accent/80 font-semibold transition-colors"
          >
            Tire Suas Dúvidas e Peça um Orçamento Sem Compromisso
            <svg
              className="ml-2 w-5 h-5"
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
