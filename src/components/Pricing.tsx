import { Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Pricing = () => {
    const handleWhatsAppClick = () => {
        window.open(
            "https://wa.me/5519960003434?text=Olá! Gostaria de saber mais sobre os pacotes de serviços.",
            "_blank"
        );
    };

    const packages = [
        {
            title: "PAC Essencial",
            slogan: "O Cartão de Visita Digital de Alta Conversão.",
            target: "Autônomos, Freelancers, Pequenos Serviços.",
            price: "R$ 99,00",
            period: "/ mês",
            implementation: "Implantação Gratuita",
            features: [
                "Site One-Page (Ultra-Rápido e responsivo)",
                "Chamada Flutuante para WhatsApp",
                "Integração com Google Maps",
                "Hospedagem de Performance (Inclusa)",
                "Atualizações de Conteúdo (Mensais)",
            ],
            highlight: false,
        },
        {
            title: "PAC Profissional",
            slogan: "Transmita Autoridade e Posicione-se no Google.",
            target: "Clínicas, Consultorias, Empresas Locais e Médias.",
            price: "R$ 199,00",
            period: "/ mês",
            implementation: "Implantação Gratuita",
            features: [
                "Até 5 Seções/Páginas (Ex: Home, Serviços, Sobre, Blog)",
                "Otimização para Mecanismos de Busca (SEO Base)",
                "Área de Conteúdo (Blog/Notícias) Gerenciável",
                "Contas de E-mail Personalizadas",
                "Suporte Técnico Prioritário",
            ],
            highlight: true,
        },
        {
            title: "PAC Customizado",
            slogan: "Sistemas Antigravidade: Controle Total da sua Operação.",
            target: "Startups, Gestão Interna Complexa, Soluções SaaS.",
            price: "Sob Consulta",
            period: "",
            implementation: "Dev. a partir de R$ 1.500,00",
            features: [
                "Desenvolvimento de Sistemas Sob Medida (Web Apps)",
                "Painel Administrativo (Dashboard) com Gráficos",
                "Gestão de Níveis de Acesso e Usuários",
                "Banco de Dados Seguro e Escalável",
            ],
            highlight: false,
        },
    ];

    return (
        <section id="precos" className="py-32 relative overflow-hidden">
            <div className="container px-4 sm:px-6 relative z-10">
                <div className="text-center mb-20 space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
                    >
                        Nossos <span className="text-[#00FFFF]">Pacotes</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/60 max-w-2xl mx-auto"
                    >
                        Escolha a solução ideal para elevar o nível do seu negócio.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            animate={{
                                y: [0, -10, 0],
                            }}
                            // @ts-ignore
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                                delay: index * 1.5, // Stagger the float animation
                            }}
                            className={`relative p-8 rounded-3xl backdrop-blur-sm border transition-all duration-300 flex flex-col ${pkg.highlight
                                    ? "bg-white/5 border-[#00FFFF]/50 shadow-[0_0_30px_rgba(0,255,255,0.1)]"
                                    : "bg-white/5 border-white/10 hover:border-[#00FFFF]/30 hover:shadow-[0_0_20px_rgba(0,255,255,0.05)]"
                                }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FFFF] text-[#0B132B] px-4 py-1 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(0,255,255,0.4)]">
                                    Mais Popular
                                </div>
                            )}

                            <div className="mb-8 space-y-4">
                                <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                                <p className="text-[#00FFFF] font-medium text-sm h-10 flex items-center">
                                    {pkg.slogan}
                                </p>
                                <p className="text-white/50 text-xs">{pkg.target}</p>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-black text-[#00FFFF]">
                                        {pkg.price}
                                    </span>
                                    <span className="text-white/60 text-sm">{pkg.period}</span>
                                </div>
                                <p className="text-white/40 text-xs mt-2 font-medium">
                                    {pkg.implementation}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {pkg.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                                        <Check className="w-5 h-5 text-[#00FFFF] flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#00FFFF] text-[#0B132B] hover:bg-[#00FFFF]/80 font-bold py-6 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.4)] transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Falar com Vinicius
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
