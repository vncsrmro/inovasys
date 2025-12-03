import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import {
  Bot,
  Clock,
  TrendingDown,
  Zap,
  MessageSquare,
  Stethoscope,
  ShoppingBag,
  UtensilsCrossed,
  Building2,
  GraduationCap,
  Wrench,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AIServices = () => {
  const { t } = useTranslation();
  const [visibleMessages, setVisibleMessages] = useState(0);

  const chatMessages = [
    { type: 'user', text: t('aiServices.chatDemo.user1') },
    { type: 'ai', text: t('aiServices.chatDemo.ai1') },
    { type: 'user', text: t('aiServices.chatDemo.user2') },
    { type: 'ai', text: t('aiServices.chatDemo.ai2') },
    { type: 'user', text: t('aiServices.chatDemo.user3') },
    { type: 'ai', text: t('aiServices.chatDemo.ai3') },
  ];

  const benefits = [
    { icon: Clock, title: t('aiServices.benefits.available.title'), desc: t('aiServices.benefits.available.desc') },
    { icon: TrendingDown, title: t('aiServices.benefits.cost.title'), desc: t('aiServices.benefits.cost.desc') },
    { icon: Zap, title: t('aiServices.benefits.response.title'), desc: t('aiServices.benefits.response.desc') },
    { icon: MessageSquare, title: t('aiServices.benefits.scale.title'), desc: t('aiServices.benefits.scale.desc') },
  ];

  const niches = [
    { icon: Stethoscope, name: t('aiServices.niches.clinics.name'), desc: t('aiServices.niches.clinics.desc') },
    { icon: ShoppingBag, name: t('aiServices.niches.stores.name'), desc: t('aiServices.niches.stores.desc') },
    { icon: UtensilsCrossed, name: t('aiServices.niches.restaurants.name'), desc: t('aiServices.niches.restaurants.desc') },
    { icon: Building2, name: t('aiServices.niches.realestate.name'), desc: t('aiServices.niches.realestate.desc') },
    { icon: GraduationCap, name: t('aiServices.niches.schools.name'), desc: t('aiServices.niches.schools.desc') },
    { icon: Wrench, name: t('aiServices.niches.services.name'), desc: t('aiServices.niches.services.desc') },
  ];

  const features = [
    t('aiServices.features.whatsapp'),
    t('aiServices.features.training'),
    t('aiServices.features.handoff'),
    t('aiServices.features.dashboard'),
    t('aiServices.features.languages'),
    t('aiServices.features.integration'),
  ];

  useEffect(() => {
    if (visibleMessages < chatMessages.length) {
      const timer = setTimeout(() => {
        setVisibleMessages(prev => prev + 1);
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      const resetTimer = setTimeout(() => {
        setVisibleMessages(0);
      }, 4000);
      return () => clearTimeout(resetTimer);
    }
  }, [visibleMessages, chatMessages.length]);

  const whatsappLink = "https://wa.me/5547999994511?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20IA%20para%20atendimento.";

  return (
    <section id="ia" className="relative py-32 overflow-hidden bg-background">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Bot className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{t('aiServices.badge')}</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6"
          >
            {t('aiServices.title')}{' '}
            <span className="text-primary">{t('aiServices.titleAccent')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto"
          >
            {t('aiServices.subtitle')}
          </motion.p>
        </div>

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          {/* Chat Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-[2.5rem] blur-2xl" />
            <div className="relative bg-card/50 backdrop-blur-xl rounded-[2rem] border border-white/10 p-4 md:p-6 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-4 pb-6 border-b border-white/5 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">INOVASYS AI</p>
                  <p className="text-xs text-primary flex items-center gap-2 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Online
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-4 min-h-[320px] md:min-h-[350px]">
                {chatMessages.slice(0, visibleMessages).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${msg.type === 'user'
                          ? 'bg-primary text-primary-foreground font-medium rounded-br-sm'
                          : 'bg-white/10 text-white/90 rounded-bl-sm'
                        }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {visibleMessages < chatMessages.length && visibleMessages > 0 && chatMessages[visibleMessages]?.type === 'ai' && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Benefits */}
          <div className="space-y-10">
            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl md:text-3xl font-bold text-white mb-2">{benefit.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">{t('aiServices.features.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05 }}
                    className="flex items-center gap-3 text-white/70 text-sm font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Niches Grid */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            {t('aiServices.niches.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {niches.map((niche, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all">
                  <niche.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-bold text-white text-sm mb-2">{niche.name}</p>
                <p className="text-xs text-white/40 leading-relaxed">{niche.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10 py-8 text-lg rounded-full shadow-[0_0_30px_rgba(0,255,102,0.25)] hover:shadow-[0_0_50px_rgba(0,255,102,0.4)] transition-all hover:scale-105"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Bot className="w-6 h-6 mr-3" />
              {t('aiServices.cta')}
            </a>
          </Button>
          <p className="text-white/40 text-sm mt-6">{t('aiServices.ctaNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default AIServices;
