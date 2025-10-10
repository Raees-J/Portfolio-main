import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";

// Import project images
import recipeHero from "@/assets/project-recipe-hero.jpg";
import recipeGallery1 from "@/assets/project-recipe-gallery-1.jpg";
import recipeGallery2 from "@/assets/project-recipe-gallery-2.jpg";
import eventHero from "@/assets/project-event-hero.jpg";
import eventGallery1 from "@/assets/project-event-gallery-1.jpg";
import eventGallery2 from "@/assets/project-event-gallery-2.jpg";
import businessHero from "@/assets/project-business-hero.jpg";
import businessGallery1 from "@/assets/project-business-gallery-1.jpg";
import businessGallery2 from "@/assets/project-business-gallery-2.jpg";
import gardenHero from "@/assets/project-garden-hero.jpg";
import gardenGallery1 from "@/assets/project-garden-gallery-1.jpg";
import gardenGallery2 from "@/assets/project-garden-gallery-2.jpg";

interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featuredImage: string;
  gallery: string[];
}

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "recipe-sharing",
      title: "Community Recipe Sharing",
      tagline: "Bringing people together through food",
      description: "A warm, welcoming platform where neighbors share their favorite family recipes and cooking stories.",
      fullDescription: "Community Recipe Sharing is more than just a recipe app—it's a platform built with love to bring people together through the universal language of food. Share your grandmother's secret sauce, discover your neighbor's famous casserole, or simply connect with fellow food enthusiasts in your community. With features like recipe collections, cooking tips, and community reviews, every meal becomes an opportunity to strengthen neighborhood bonds.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: recipeHero,
      gallery: [recipeHero, recipeGallery1, recipeGallery2],
    },
    {
      id: "event-connector",
      title: "Local Event Connector",
      tagline: "Connect, discover, create memories",
      description: "Helping communities discover and organize local events from book clubs to hiking groups.",
      fullDescription: "Local Event Connector makes it effortless to discover what's happening in your neighborhood and meet like-minded people. Whether you're passionate about book clubs, hiking groups, or community workshops, our platform helps you find and organize events that matter to you. With smart notifications, RSVP management, and integrated maps, you'll never miss an opportunity to create lasting memories with your neighbors.",
      technologies: ["TypeScript", "Express", "PostgreSQL", "React Native"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: eventHero,
      gallery: [eventHero, eventGallery1, eventGallery2],
    },
    {
      id: "business-helper",
      title: "Small Business Helper",
      tagline: "Great tools for local businesses",
      description: "A simple, friendly inventory management tool designed specifically for local small businesses.",
      fullDescription: "Small Business Helper is designed with neighborhood shops in mind. We believe every local business deserves professional-grade tools without the enterprise complexity or cost. Our intuitive inventory management system helps you track stock, manage orders, and understand your business better with clear analytics. Spend less time on spreadsheets and more time serving your community.",
      technologies: ["Python", "Flask", "SQLite", "Vue.js"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: businessHero,
      gallery: [businessHero, businessGallery1, businessGallery2],
    }
  ];

  return (
    <>
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Each project here represents a solution to a real problem I've come across in university. 
              They're built not just with code, but with genuine care for the people who will use them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                layoutId={`project-card-${project.id}`}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="cursor-pointer"
              >
                <Card className="glass-card h-full hover:shadow-warm transition-all duration-300 group overflow-hidden">
                  <motion.div
                    layoutId={`project-image-${project.id}`}
                    className="relative h-48 overflow-hidden"
                  >
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                  <CardContent className="p-6">
                    <motion.h3
                      layoutId={`project-title-${project.id}`}
                      className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`project-tagline-${project.id}`}
                      className="text-sm text-primary font-medium mb-3"
                    >
                      {project.tagline}
                    </motion.p>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
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

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-card-${selectedProject.id}`}
              className="relative w-full max-w-5xl max-h-[90vh] bg-card rounded-lg shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm hover:bg-background"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-5 h-5" />
              </Button>

              {/* Scrollable Content */}
              <div className="overflow-y-auto max-h-[90vh]">
                {/* Hero Video Walkthrough (Loom) */}
                <motion.div
                  layoutId={`project-image-${selectedProject.id}`}
                  className="relative h-[40vh] overflow-hidden rounded-lg border border-muted"
                >
                  {/* Replace the src below with your actual Loom video link for each project */}
                  <iframe
                    src="https://www.loom.com/embed/your-loom-video-id?autoplay=1"
                    title="Project Walkthrough"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                </motion.div>

                {/* Content */}
                <div className="p-8">
                  <motion.h2
                    layoutId={`project-title-${selectedProject.id}`}
                    className="text-4xl font-bold mb-3"
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`project-tagline-${selectedProject.id}`}
                    className="text-lg text-primary font-medium mb-6"
                  >
                    {selectedProject.tagline}
                  </motion.p>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mb-8">
                    <Button size="lg" className="flex-1" asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 mr-2" />
                        View Live Preview
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5 mr-2" />
                        View GitHub Code
                      </a>
                    </Button>
                  </div>


                  {/* Full Description */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">About This Project</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  
                  

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-primary/10 text-primary text-sm px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Image Gallery */}
                  
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectsSection;