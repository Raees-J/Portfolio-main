import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Briefcase, GraduationCap, Award, MapPin } from "lucide-react";

const ResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experience = [
    {
      title: "Software Developer(Mobile Applications)",
      company: "CAPACITI",
      location: "97 Durham Ave, Salt River, Cape Town",
      period: "2025 - Present",
      description: "Development of mobile applications using React , collaborating with cross-functional teams to deliver user-friendly solutions.",
      achievements: [
        "Built scalable web applications ",
        "Reduced page load times by 60% through optimization",
        "Implemented responsive design for mobile and tablet",
        "Collaborated with designers to enhance UI/UX"
      ]
    }
  ];

  const education = [
    {
      diploma: "Application Development Diploma",
      school: "Cape Peninsula University of Technology",
      period: "2023 - 2025",
      
    },
     {
      diploma: "Matric Certificate",
      school: "Pinelands High School",
      period: "2018 - 2022",
      
    }
    
  ];



  return (
    <section id="resume" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            My Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Every role has taught me something valuable about building software that truly serves people. 
            Here's the story of how I became your friendly neighborhood programmer.
          </p>
          <Button size="lg" className="warm-glow">
            <Download className="w-5 h-5 mr-2" />
            <a
              href="public/CV_Raees Johaadien.pdf"
              download="CV_Raees Johaadien.pdf"
              className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/80 transition"
              >
              Download Resume
              </a>
            
          </Button>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center mb-8">
            <Briefcase className="w-8 h-8 text-primary mr-3" />
            <h3 className="text-3xl font-bold">Work Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <Card className="glass-card hover:shadow-warm transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl font-bold text-primary mb-1">
                          {job.title}
                        </CardTitle>
                        <p className="text-lg font-semibold text-foreground">{job.company}</p>
                        <div className="flex items-center text-muted-foreground mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{job.location}</span>
                          <span>{job.period}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-secondary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.diploma} className="glass-card">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg text-secondary mb-2">{edu.diploma}</h4>
                    <p className="font-semibold text-foreground">{edu.school}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default ResumeSection;