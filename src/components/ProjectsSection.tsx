import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, X } from "lucide-react";

// Import project images
import project1 from "@/assets/project-1.png";
import project2 from "@/assets/project-2.png";
import project3 from "@/assets/project-3.png";

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
      id: "portfolio-site",
      title: "Personal Portfolio Website",
      tagline: "Your Friendly Neighbourhood Programmer",
      description: "A modern, interactive portfolio to showcase my projects, skills, and experience as a developer.",
  fullDescription: "This portfolio website is my digital home, designed to introduce myself as a developer and showcase my best work. It features a friendly, welcoming hero section, a summary of my skills, and a gallery of real-world projects. The site is fully responsive, visually engaging, and easy to navigate, making it simple for visitors to learn about my background, view my resume, and get in touch.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: project1,
      gallery: [project1],
    },
    {
      id: "masjid-connect",
      title: "Masjid Connect",
      tagline: "Find Your Masjid, Stay Connected",
      description: "A platform to discover masjids in South Africa, stay updated with events, and strengthen your community connection.",
  fullDescription: "Masjid Connect is a community platform for Muslims in South Africa to find local masjids, check accurate prayer times, and stay updated with events. The homepage features a beautiful masjid image, quick access to explore masjids or join the community, and a real-time prayer times widget. The design is welcoming and easy to use for all ages, helping users strengthen their connection to their local masjid and community.",
      technologies: ["React", "Node.js", "Google Maps API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: project2,
      gallery: [project2],
    },
    {
      id: "lost-and-found",
      title: "Lost and Found Portal",
      tagline: "Student Support & Item Recovery",
      description: "A campus platform to report, search, and recover lost items, and access student support resources.",
  fullDescription: "The Lost and Found Portal is a student-focused platform for reporting, searching, and recovering lost items on campus. The homepage highlights student support services and resources, with a prominent carousel for help contacts. The portal makes it easy to report lost or found items, browse listings, and access support, all in a safe and user-friendly environment.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featuredImage: project3,
      gallery: [project3],
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
                  className="relative h-[40vh] overflow-hidden rounded-lg border border-muted flex items-center justify-center bg-gray-100"
                >
                  <video
                    src={
                      selectedProject.id === 'portfolio-site'
                        ? '/assets/Portfolio.mp4'
                        : selectedProject.id === 'masjid-connect'
                        ? '/assets/Masjid connect.mp4'
                        : '/assets/Lost N Found.mp4'
                    }
                    autoPlay
                    muted
                    loop
                    controls
                    preload="auto"
                    className="w-full h-full object-cover"
                    poster={selectedProject.featuredImage}
                    onLoadedData={() => {
                      console.log('Video loaded successfully');
                    }}
                    onError={(e) => {
                      console.error('Video failed to load:', e);
                      // Fallback: show the project image if video fails to load
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                      const fallback = target.parentElement?.querySelector('.video-fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  >
                    Your browser does not support the video tag.
                  </video>
                  {/* Fallback content if video doesn't load */}
                  <div className="video-fallback absolute inset-0 flex items-center justify-center bg-gray-100" style={{ display: 'none' }}>
                    <img
                      src={selectedProject.featuredImage}
                      alt={`${selectedProject.title} preview`}
                      className="w-full h-full object-cover"
                    />
                  </div>
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