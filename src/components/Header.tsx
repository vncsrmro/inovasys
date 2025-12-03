import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import logoInovasys from "@/assets/logo-inovasys.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MessageCircle, Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Header = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Gostaria de uma consulta sobre os serviços de desenvolvimento da INOVASYS.",
      "_blank"
    );
  };

  const navLinks = [
    { href: "#servicos", label: t("nav.services") },
    { href: "#ia", label: "IA" },
    { href: "#portfolio", label: t("nav.cases") },
    { href: "#clientes", label: t("nav.clients") },
    { href: "#metodologia", label: t("nav.methodology") },
    { href: "#precos", label: "Planos" },
    { href: "#contato", label: t("nav.contact") },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#0B132B]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
        }`}
    >
      <div className="container px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <img
              src={logoInovasys}
              alt="INOVASYS"
              className="h-8 w-auto cursor-pointer hover:opacity-80 transition-all duration-300 brightness-0 invert"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-[#00FFFF] transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              onClick={handleWhatsAppClick}
              className="bg-[#00FFFF] text-[#0B132B] hover:bg-[#00FFFF]/90 font-bold px-6 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]"
              size="sm"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              {t("nav.whatsapp")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#0B132B] border-l border-white/10 w-[300px] p-0"
              >
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <img
                      src={logoInovasys}
                      alt="INOVASYS"
                      className="h-6 w-auto brightness-0 invert"
                    />
                  </div>

                  {/* Navigation Links */}
                  <nav className="flex-1 p-4 space-y-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={handleNavClick}
                        className="flex items-center px-4 py-3 text-white/80 hover:text-[#00FFFF] hover:bg-white/5 rounded-lg transition-all font-medium"
                      >
                        {link.label}
                      </a>
                    ))}

                    <div className="pt-4 border-t border-white/10 mt-4">
                      <LanguageSwitcher variant="mobile" />
                    </div>
                  </nav>

                  {/* CTA Button */}
                  <div className="p-6 border-t border-white/10">
                    <Button
                      onClick={() => {
                        handleWhatsAppClick();
                        handleNavClick();
                      }}
                      className="w-full bg-[#00FFFF] text-[#0B132B] hover:bg-[#00FFFF]/90 font-bold py-6 rounded-full"
                    >
                      <MessageCircle className="h-5 w-5 mr-2" />
                      {t("nav.whatsapp")}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
