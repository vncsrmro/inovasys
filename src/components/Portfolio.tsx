import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import {
  ExternalLink,
  X,
  Sparkles,
  Globe,
  Smartphone,
  ShoppingCart,
  Bot,
  BarChart3,
  FileText,
} from "lucide-react";
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
    mockupUrl:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=500&fit=crop&q=80",
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
    mockupUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=500&fit=crop&q=80",
    icon: Smartphone,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "arenaparts",
    name: "Arena Parts",
    categoryKey: "portfolio.arenaparts.category",
    shortDescKey: "portfolio.arenaparts.short",
    fullDescKey: "portfolio.arenaparts.full",
    featuresKey: "portfolio.arenaparts.features",
    technologies: ["React", "Node.js", "Mercado Livre API", "PostgreSQL"],
    url: "#",
    mockupUrl:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=500&fit=crop&q=80",
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
      className="py-24 bg-gradient-to-b from-muted/50 via-background to-background relative overflow-hidden"
    >
      {/* Background decorations - optimized */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] will-change-transform" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] will-change-transform" />

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
            <Sparkles className="w-4 h-4" />
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight animate-fade-in-up">
            {t("portfolio.title")} <span className="text-accent">{t("portfolio.titleAccent")}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            {t("portfolio.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative bg-card rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2">
                {/* Mockup Image */}
                <div className="relative h-52 overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-80`}
                  />
                  <img
                    src={project.mockupUrl}
                    alt={project.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

                  {/* Floating icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      {t(project.categoryKey)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {t(project.shortDescKey)}
                  </p>

                  {/* Tech stack preview */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <span className="text-sm font-semibold text-accent group-hover:underline">
                      {t("portfolio.viewDetails")}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-card rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative h-64 sm:h-80">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient}`}
                />
                <img
                  src={selectedProject.mockupUrl}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Close button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center hover:bg-black/50 transition-colors"
                >
                  <X className="w-5 h-5 text-white" />
                </button>

                {/* Project info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                    <selectedProject.icon className="w-3 h-3" />
                    {t(selectedProject.categoryKey)}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-black text-white">
                    {selectedProject.name}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t(selectedProject.fullDescKey)}
                </p>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-accent" />
                    {t("portfolio.features")}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {getFeatures(selectedProject.featuresKey).map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    {t("portfolio.technologies")}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm font-medium text-foreground bg-muted px-4 py-2 rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-border">
                  {selectedProject.url !== "#" && (
                    <Button
                      asChild
                      className="bg-accent hover:bg-accent/90 text-primary font-bold flex-1"
                    >
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        {t("portfolio.visitSite")}
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-accent text-accent hover:bg-accent hover:text-primary"
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
