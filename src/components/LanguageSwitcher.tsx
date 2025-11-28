import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LanguageSwitcherProps {
  variant?: "default" | "mobile";
}

const LanguageSwitcher = ({ variant = "default" }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  if (variant === "mobile") {
    return (
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-3 w-full px-4 py-3 text-white/90 hover:text-accent hover:bg-white/10 rounded-lg transition-all"
      >
        <Globe className="w-5 h-5" />
        <span className="font-medium">
          {i18n.language === "pt" ? "English" : "Português"}
        </span>
        <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded">
          {i18n.language.toUpperCase()}
        </span>
      </button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-white/80 hover:text-white hover:bg-white/10 gap-1.5 px-2"
    >
      <Globe className="w-4 h-4" />
      <span className="text-xs font-semibold">{i18n.language.toUpperCase()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
