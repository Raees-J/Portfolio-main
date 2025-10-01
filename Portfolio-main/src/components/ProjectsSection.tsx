import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Heart } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Community Recipe Sharing",
      description: "A warm, welcoming platform where neighbors share their favorite family recipes and cooking stories. Built with love and a focus on bringing people together through food.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "primary"
    },
    {
      title: "Local Event Connector",
      description: "Helping communities discover and organize local events. From book clubs to hiking groups, making it easier for neighbors to connect and create memories together.",
      technologies: ["TypeScript", "Express", "PostgreSQL", "React Native"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      color: "secondary"
    },
    {
      title: "Small Business Helper",
      description: "A simple, friendly inventory management tool designed specifically for local small businesses. Because every neighborhood business deserves great tools.",
      technologies: ["Python", "Flask", "SQLite", "Vue.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "accent"
    },
    {
      title: "Garden Sharing Network",
      description: "Connecting gardeners in the community to share seeds, tools, and wisdom. Building stronger neighborhoods one garden at a time.",
      technologies: ["React", "Firebase", "Material-UI", "PWA"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      color: "primary"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Projects Built with <span className="gradient-text">Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most project here represents a solution to a real problem I've come accross in university. 
            They're built not just with code, but with genuine care for the people who will use them.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
            >
              <Card className="glass-card h-full hover:shadow-warm transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <Heart className="w-5 h-5 text-primary animate-float" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
            >
              <Card className="glass-card h-full hover:shadow-soft transition-all duration-300 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-6">
            Want to see more? Check out my GitHub for additional projects and experiments!
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;