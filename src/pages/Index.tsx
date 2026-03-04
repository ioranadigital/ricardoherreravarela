import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Palette,
  Globe,
  Terminal,
  GitBranch,
  ExternalLink,
  Linkedin,
  Github,
  Twitter,
  Layers,
  Server,
  Wrench,
} from "lucide-react";

const roles = ["Desarrollador Frontend", "Diseñador UI/UX", "Creador Digital", "Ingeniero Web"];

const projects = [
  {
    title: "E-Commerce Dashboard",
    description: "Panel de control interactivo con analíticas en tiempo real y gestión de inventario.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
  },
  {
    title: "App de Productividad",
    description: "Aplicación de gestión de tareas con drag & drop y sincronización en la nube.",
    tags: ["Next.js", "Supabase", "Framer"],
    link: "#",
  },
  {
    title: "Portfolio Creativo",
    description: "Sitio web inmersivo con animaciones 3D y transiciones fluidas.",
    tags: ["Three.js", "GSAP", "WebGL"],
    link: "#",
  },
  {
    title: "API REST Platform",
    description: "Plataforma de gestión de APIs con documentación auto-generada.",
    tags: ["Node.js", "Express", "PostgreSQL"],
    link: "#",
  },
];

const skillCategories = [
  {
    name: "Frontend",
    icon: Palette,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
  },
  {
    name: "Backend",
    icon: Server,
    skills: ["Node.js", "PostgreSQL", "REST APIs", "GraphQL", "Docker"],
  },
  {
    name: "Herramientas",
    icon: Wrench,
    skills: ["Git", "Figma", "VS Code", "Vercel", "Linux"],
  },
];

const AnimatedSubtitle = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = isDeleting ? 40 : 80;

    if (!isDeleting && displayed === role) {
      const pause = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(
        isDeleting ? role.slice(0, displayed.length - 1) : role.slice(0, displayed.length + 1)
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, currentRole]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-cursor-blink">|</span>
    </span>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Hero */}
        <div className="rounded-2xl border bg-card p-8 sm:p-12 text-center animate-fade-in">
          <Avatar className="mx-auto h-28 w-28 border-4 border-primary/20 mb-6">
            <AvatarImage src="/placeholder.svg" alt="Foto de perfil" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">
              TN
            </AvatarFallback>
          </Avatar>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Tu Nombre
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-medium text-muted-foreground h-8">
            <AnimatedSubtitle />
          </p>
          <p className="mt-4 max-w-lg mx-auto text-muted-foreground">
            Construyo experiencias digitales modernas, rápidas y accesibles. Apasionado por el
            código limpio y el diseño con propósito.
          </p>
        </div>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Layers size={22} className="text-primary" />
            Proyectos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                className="group rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0"
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Code size={22} className="text-primary" />
            Habilidades
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-2xl border bg-card p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <category.icon size={18} className="text-primary" />
                  <h3 className="font-semibold text-foreground">{category.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="rounded-2xl border bg-card p-6 text-center">
          <div className="flex justify-center gap-6">
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Twitter, href: "#", label: "X" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            © 2026 Tu Nombre. Todos los derechos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
