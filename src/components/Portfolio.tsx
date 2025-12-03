import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X, Sparkles, Globe, Smartphone, ShoppingCart, Bot, BarChart3, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  name: string;
  categoryKey: string;
  shortDescKey: string;
  fullDescKey: string;
  featuresKey: string;
  technologies: string[];
  url: string;
  mockupUrl: string;
  icon: React.ElementType;
  gradient: string;
}

const projects: Project[] = [
  {
    id: "cuqui",
    name: "CUQUI",
    categoryKey: "portfolio.cuqui.category",
    shortDescKey: "portfolio.cuqui.short",
    fullDescKey: "portfolio.cuqui.full",
    featuresKey: "portfolio.cuqui.features",
    technologies: ["React", "Node.js", "PostgreSQL", "OpenAI API", "WhatsApp API"],
    url: "https://cuqui.com.br",
    mockupUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80",
    icon: Bot,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "rvtec",
    name: "RVTEC",
    categoryKey: "portfolio.rvtec.category",
    shortDescKey: "portfolio.rvtec.short",
    fullDescKey: "portfolio.rvtec.full",
    featuresKey: "portfolio.rvtec.features",
    technologies: ["React Native", "React", "Supabase", "TypeScript"],
    url: "https://rvtecassistencia.com.br",
    mockupUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "arenaparts",
    name: "ARENA PARTS",
    categoryKey: "portfolio.arenaparts.category",
    shortDescKey: "portfolio.arenaparts.short",
    fullDescKey: "portfolio.arenaparts.full",
    featuresKey: "portfolio.arenaparts.features",
    technologies: ["React", "Node.js", "Mercado Livre API", "PostgreSQL"],
    url: "https://arenaparts.net.br",
    mockupUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80",
    icon: ShoppingCart,
    gradient: "from-amber-500 to-orange-600",
  },
];

const Portfolio = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getFeatures = (key: string): string[] => {
    const features = t(key, { returnObjects: true }) as string[];
    return Array.isArray(features) ? features : [];
  };

  return (
    <section
      id="portfolio"
      className="py-32 bg-background relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
          >
            <Sparkles className="w-4 h-4" />
            {t("portfolio.badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            {t("portfolio.title")} <span className="text-primary">{t("portfolio.titleAccent")}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            {t("portfolio.subtitle")}
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card/30 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,102,0.1)] hover:-translate-y-2">
                {/* Mockup Image */}
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`} />
                  <img
                    src={project.mockupUrl}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/90 bg-black/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
                      {t(project.categoryKey)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2">
                      {t(project.shortDescKey)}
                    </p>
                  </div>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium text-white/50 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-primary group-hover:underline">
                      {t("portfolio.viewDetails")}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-background rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 sm:h-80">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`} />
                <img
                  src={selectedProject.mockupUrl}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors border border-white/10"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full mb-3 border border-white/10">
                    <selectedProject.icon className="w-3 h-3 text-primary" />
                    {t(selectedProject.categoryKey)}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">{selectedProject.name}</h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-8">
                <p className="text-white/70 leading-relaxed text-lg">{t(selectedProject.fullDescKey)}</p>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    {t("portfolio.features")}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getFeatures(selectedProject.featuresKey).map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    {t("portfolio.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-medium text-white/70 bg-white/5 px-4 py-2 rounded-lg border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-white/10">
                  {selectedProject.url !== "#" && (
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold flex-1 py-6 rounded-xl">
                      <a href={selectedProject.url} target="_blank" rel="noopener noreferrer">
                        <Globe className="w-4 h-4 mr-2" />
                        {t("portfolio.visitSite")}
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 rounded-xl"
                  >
                    <a
                      href={`https://wa.me/5519960003434?text=Olá! Vi o case ${selectedProject.name} e gostaria de um projeto similar.`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t("portfolio.similarProject")}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
