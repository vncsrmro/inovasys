import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { 
  Bot, MessageCircle, Zap, Clock, TrendingDown, Users, 
  Check, X, ChevronDown, Star, Shield, Phone, Mail,
  Stethoscope, ShoppingBag, UtensilsCrossed, Building2, GraduationCap, Wrench,
  ArrowRight, Play, Sparkles, BadgeCheck, HeartHandshake, Instagram
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logoInovasys from "@/assets/logo-inovasys.png";

// Counter Animation Hook
const useCounter = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if ((startOnView && isInView && !hasAnimated.current) || (!startOnView && !hasAnimated.current)) {
      hasAnimated.current = true;
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, startOnView]);

  return { count, ref };
};

// Chat Demo Component
const ChatDemo = () => {
  const { t } = useTranslation();
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { icon: Stethoscope, label: t("automacao.demo.tabs.clinic") },
    { icon: ShoppingBag, label: t("automacao.demo.tabs.store") },
    { icon: UtensilsCrossed, label: t("automacao.demo.tabs.restaurant") },
  ];

  const chatMessages = [
    [
      { type: "user", text: t("automacao.demo.clinic.user1") },
      { type: "ai", text: t("automacao.demo.clinic.ai1") },
      { type: "user", text: t("automacao.demo.clinic.user2") },
      { type: "ai", text: t("automacao.demo.clinic.ai2") },
    ],
    [
      { type: "user", text: t("automacao.demo.store.user1") },
      { type: "ai", text: t("automacao.demo.store.ai1") },
      { type: "user", text: t("automacao.demo.store.user2") },
      { type: "ai", text: t("automacao.demo.store.ai2") },
    ],
    [
      { type: "user", text: t("automacao.demo.restaurant.user1") },
      { type: "ai", text: t("automacao.demo.restaurant.ai1") },
      { type: "user", text: t("automacao.demo.restaurant.user2") },
      { type: "ai", text: t("automacao.demo.restaurant.ai2") },
    ],
  ];

  useEffect(() => {
    setVisibleMessages(0);
    const messages = chatMessages[activeTab];
    let timeout: NodeJS.Timeout;

    const showNextMessage = (index: number) => {
      if (index < messages.length) {
        if (messages[index].type === "ai") {
          setIsTyping(true);
          timeout = setTimeout(() => {
            setIsTyping(false);
            setVisibleMessages(index + 1);
            timeout = setTimeout(() => showNextMessage(index + 1), 1000);
          }, 1500);
        } else {
          setVisibleMessages(index + 1);
          timeout = setTimeout(() => showNextMessage(index + 1), 800);
        }
      }
    };

    timeout = setTimeout(() => showNextMessage(0), 500);
    return () => clearTimeout(timeout);
  }, [activeTab]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab Selector */}
      <div className="flex gap-2 mb-4 justify-center">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === i 
                ? "bg-accent text-accent-foreground" 
                : "bg-muted/50 text-muted-foreground hover:bg-muted"
            }`}
          >
            <tab.icon className="w-4 h-4" />
            <span className="hidden sm:inline">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Window */}
      <div className="bg-card rounded-2xl shadow-xl border border-border overflow-hidden">
        {/* Header */}
        <div className="bg-accent/10 px-4 py-3 flex items-center gap-3 border-b border-border">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
            <Bot className="w-5 h-5 text-accent-foreground" />
          </div>
          <div>
            <p className="font-semibold text-foreground text-sm">INOVASYS AI</p>
            <p className="text-xs text-accent">● Online</p>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 h-80 overflow-y-auto space-y-3 bg-muted/20">
          {chatMessages[activeTab].slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  msg.type === "user"
                    ? "bg-accent text-accent-foreground rounded-br-md"
                    : "bg-card text-card-foreground border border-border rounded-bl-md"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-card border border-border px-4 py-3 rounded-2xl rounded-bl-md">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

// Pricing Card Component
const PricingCard = ({ 
  title, 
  price, 
  features, 
  highlighted = false,
  badge,
  cta
}: { 
  title: string; 
  price: string; 
  features: string[]; 
  highlighted?: boolean;
  badge?: string;
  cta: string;
}) => {
  const handleClick = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Tenho interesse no plano " + title + " de automação com IA.",
      "_blank"
    );
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl p-6 sm:p-8 ${
        highlighted 
          ? "bg-accent text-accent-foreground shadow-2xl scale-105 border-2 border-accent" 
          : "bg-card text-card-foreground border border-border"
      }`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className={`px-4 py-1 rounded-full text-xs font-bold ${
            highlighted ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
          }`}>
            {badge}
          </span>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-6">
        <span className="text-3xl sm:text-4xl font-black">{price}</span>
        {price !== "Sob consulta" && <span className="text-sm opacity-80">/mês</span>}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <Check className={`w-5 h-5 flex-shrink-0 ${highlighted ? "text-primary" : "text-accent"}`} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        onClick={handleClick}
        className={`w-full ${
          highlighted 
            ? "bg-primary text-primary-foreground hover:bg-primary/90" 
            : "bg-accent text-accent-foreground hover:bg-accent/90"
        }`}
        size="lg"
      >
        {cta}
      </Button>
    </motion.div>
  );
};

// Main Component
const Automacao = () => {
  const { t } = useTranslation();

  // Counters
  const counter1 = useCounter(70);
  const counter2 = useCounter(24);
  const counter3 = useCounter(3);
  const counter4 = useCounter(500);

  const handleMainCTA = () => {
    window.open(
      "https://wa.me/5519960003434?text=Olá! Vi a página de automação com IA e gostaria de saber mais.",
      "_blank"
    );
  };

  const problems = [
    { icon: X, text: t("automacao.problems.1") },
    { icon: X, text: t("automacao.problems.2") },
    { icon: X, text: t("automacao.problems.3") },
    { icon: X, text: t("automacao.problems.4") },
  ];

  const solutions = [
    { icon: Clock, text: t("automacao.solutions.1") },
    { icon: TrendingDown, text: t("automacao.solutions.2") },
    { icon: Zap, text: t("automacao.solutions.3") },
    { icon: Users, text: t("automacao.solutions.4") },
  ];

  const niches = [
    { icon: Stethoscope, name: t("automacao.niches.clinics.name"), desc: t("automacao.niches.clinics.desc") },
    { icon: ShoppingBag, name: t("automacao.niches.stores.name"), desc: t("automacao.niches.stores.desc") },
    { icon: UtensilsCrossed, name: t("automacao.niches.restaurants.name"), desc: t("automacao.niches.restaurants.desc") },
    { icon: Building2, name: t("automacao.niches.realestate.name"), desc: t("automacao.niches.realestate.desc") },
    { icon: GraduationCap, name: t("automacao.niches.schools.name"), desc: t("automacao.niches.schools.desc") },
    { icon: Wrench, name: t("automacao.niches.services.name"), desc: t("automacao.niches.services.desc") },
  ];

  const features = [
    t("automacao.features.1"),
    t("automacao.features.2"),
    t("automacao.features.3"),
    t("automacao.features.4"),
    t("automacao.features.5"),
    t("automacao.features.6"),
  ];

  const testimonials = [
    {
      name: "Dr. Ricardo Mendes",
      role: t("automacao.testimonials.1.role"),
      text: t("automacao.testimonials.1.text"),
      rating: 5,
    },
    {
      name: "Marina Santos",
      role: t("automacao.testimonials.2.role"),
      text: t("automacao.testimonials.2.text"),
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: t("automacao.testimonials.3.role"),
      text: t("automacao.testimonials.3.text"),
      rating: 5,
    },
  ];

  const faqs = [
    { q: t("automacao.faq.1.q"), a: t("automacao.faq.1.a") },
    { q: t("automacao.faq.2.q"), a: t("automacao.faq.2.a") },
    { q: t("automacao.faq.3.q"), a: t("automacao.faq.3.a") },
    { q: t("automacao.faq.4.q"), a: t("automacao.faq.4.a") },
    { q: t("automacao.faq.5.q"), a: t("automacao.faq.5.a") },
  ];

  const plans = [
    {
      title: "Starter",
      price: "R$ 497",
      features: [
        t("automacao.plans.starter.f1"),
        t("automacao.plans.starter.f2"),
        t("automacao.plans.starter.f3"),
        t("automacao.plans.starter.f4"),
      ],
      cta: t("automacao.plans.starter.cta"),
    },
    {
      title: "Pro",
      price: "R$ 997",
      badge: t("automacao.plans.pro.badge"),
      highlighted: true,
      features: [
        t("automacao.plans.pro.f1"),
        t("automacao.plans.pro.f2"),
        t("automacao.plans.pro.f3"),
        t("automacao.plans.pro.f4"),
        t("automacao.plans.pro.f5"),
      ],
      cta: t("automacao.plans.pro.cta"),
    },
    {
      title: "Enterprise",
      price: "Sob consulta",
      features: [
        t("automacao.plans.enterprise.f1"),
        t("automacao.plans.enterprise.f2"),
        t("automacao.plans.enterprise.f3"),
        t("automacao.plans.enterprise.f4"),
        t("automacao.plans.enterprise.f5"),
      ],
      cta: t("automacao.plans.enterprise.cta"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src={logoInovasys} alt="INOVASYS" className="h-8" />
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Button onClick={handleMainCTA} size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">{t("automacao.cta.short")}</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/80" />
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 sm:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">{t("automacao.hero.badge")}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight"
            >
              {t("automacao.hero.title1")}
              <br />
              <span className="text-accent">{t("automacao.hero.title2")}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto"
            >
              {t("automacao.hero.subtitle")}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Button 
                onClick={handleMainCTA}
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all animate-glow"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                {t("automacao.hero.cta")}
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full"
                onClick={() => document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="w-5 h-5 mr-2" />
                {t("automacao.hero.cta2")}
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-primary-foreground/60"
            >
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-accent" />
                <span>{t("automacao.hero.trust1")}</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                <span>{t("automacao.hero.trust2")}</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-accent" />
                <span>{t("automacao.hero.trust3")}</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-primary-foreground/50 animate-bounce" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.problem.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("automacao.problem.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {problems.map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-destructive/10 border border-destructive/20 rounded-xl p-4"
              >
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0">
                  <X className="w-4 h-4 text-destructive" />
                </div>
                <span className="text-foreground">{problem.text}</span>
              </motion.div>
            ))}
          </div>

          {/* Big Stat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-5xl sm:text-7xl font-black text-destructive mb-2">62%</p>
            <p className="text-muted-foreground">{t("automacao.problem.stat")}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
              <Bot className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-medium">{t("automacao.solution.badge")}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.solution.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("automacao.solution.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-lg hover:border-accent/50 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <solution.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-foreground font-medium">{solution.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.demo.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("automacao.demo.subtitle")}
            </p>
          </div>

          <ChatDemo />
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div ref={counter1.ref} className="text-center">
              <p className="text-4xl sm:text-6xl font-black text-accent mb-2">-{counter1.count}%</p>
              <p className="text-primary-foreground/80">{t("automacao.metrics.1")}</p>
            </div>
            <div ref={counter2.ref} className="text-center">
              <p className="text-4xl sm:text-6xl font-black text-accent mb-2">{counter2.count}/7</p>
              <p className="text-primary-foreground/80">{t("automacao.metrics.2")}</p>
            </div>
            <div ref={counter3.ref} className="text-center">
              <p className="text-4xl sm:text-6xl font-black text-accent mb-2">&lt;{counter3.count}s</p>
              <p className="text-primary-foreground/80">{t("automacao.metrics.3")}</p>
            </div>
            <div ref={counter4.ref} className="text-center">
              <p className="text-4xl sm:text-6xl font-black text-accent mb-2">+{counter4.count}</p>
              <p className="text-primary-foreground/80">{t("automacao.metrics.4")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Niches Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.niches.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("automacao.niches.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {niches.map((niche, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-6 text-center hover:border-accent/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/20 transition-colors">
                  <niche.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{niche.name}</h3>
                <p className="text-sm text-muted-foreground">{niche.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.features.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 bg-card border border-border rounded-lg p-4"
              >
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.testimonials.title")}
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-2xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.plans.title")}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t("automacao.plans.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-4 max-w-5xl mx-auto items-start">
            {plans.map((plan, i) => (
              <PricingCard key={i} {...plan} />
            ))}
          </div>

          {/* Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-full px-6 py-3">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-foreground font-medium">{t("automacao.plans.guarantee")}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
              {t("automacao.faq.title")}
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`faq-${i}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-accent/50"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium">{t("automacao.final.badge")}</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black mb-6">
                {t("automacao.final.title")}
                <br />
                <span className="text-accent">{t("automacao.final.title2")}</span>
              </h2>

              <p className="text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                {t("automacao.final.subtitle")}
              </p>

              <Button 
                onClick={handleMainCTA}
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-accent/30 transition-all animate-glow"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                {t("automacao.final.cta")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <p className="mt-6 text-primary-foreground/60 text-sm">
                {t("automacao.final.note")}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground text-sm">{t("automacao.footer.product")}</span>
              <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <img src={logoInovasys} alt="INOVASYS" className="h-6" />
              </a>
            </div>

            <div className="flex items-center gap-4">
              <a 
                href="https://wa.me/5519960003434" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contato@inovasys.dev" 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/inovasys.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} INOVASYS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Automacao;