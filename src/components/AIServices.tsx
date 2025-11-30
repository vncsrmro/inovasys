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
    <section id="ia" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-slate-950 via-primary to-slate-950">
      {/* Neural network background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
            <Bot className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">{t('aiServices.badge')}</span>
            <Sparkles className="w-4 h-4 text-accent" />
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t('aiServices.title')}{' '}
            <span className="text-accent">{t('aiServices.titleAccent')}</span>
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto">
            {t('aiServices.subtitle')}
          </p>
        </div>

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Chat Mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 p-4 md:p-6 shadow-2xl">
              {/* Chat header */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">INOVASYS AI</p>
                  <p className="text-xs text-accent flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Online
                  </p>
                </div>
              </div>

              {/* Chat messages */}
              <div className="space-y-3 min-h-[320px] md:min-h-[280px]">
                {chatMessages.slice(0, visibleMessages).map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                        msg.type === 'user'
                          ? 'bg-accent text-primary rounded-br-md'
                          : 'bg-white/10 text-white rounded-bl-md'
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                
                {/* Typing indicator */}
                {visibleMessages < chatMessages.length && visibleMessages > 0 && chatMessages[visibleMessages]?.type === 'ai' && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-bl-md flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-2xl md:text-3xl font-bold text-white mb-1">{benefit.title}</p>
                  <p className="text-sm text-white/60">{benefit.desc}</p>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-4">{t('aiServices.features.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Niches Grid */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-8">
            {t('aiServices.niches.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {niches.map((niche, idx) => (
              <div
                key={idx}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 group-hover:scale-110 transition-all">
                  <niche.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="font-semibold text-white text-sm mb-1">{niche.name}</p>
                <p className="text-xs text-white/50">{niche.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-8 py-6 text-lg rounded-xl shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Bot className="w-5 h-5 mr-2" />
              {t('aiServices.cta')}
            </a>
          </Button>
          <p className="text-white/50 text-sm mt-4">{t('aiServices.ctaNote')}</p>
        </div>
      </div>
    </section>
  );
};

export default AIServices;
