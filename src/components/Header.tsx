import { useState, useEffect } from "react";
import logoInovasys from "@/assets/logo-inovasys.png";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de uma consulta sobre os serviços de desenvolvimento da INOVASYS.",
      "_blank"
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={logoInovasys}
              alt="INOVASYS"
              className={`h-10 w-auto cursor-pointer hover:opacity-80 transition-all duration-300 ${
                !scrolled ? : ""
              }`}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#servicos"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Serviços
            </a>
            <a
              href="#clientes"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Clientes
            </a>
            <a
              href="#metodologia"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Metodologia
            </a>
          </nav>

          <Button
            onClick={handleWhatsAppClick}
            className="bg-accent hover:bg-accent/90 text-primary font-semibold px-3 sm:px-4"
            size="sm"
          >
            <MessageCircle className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
