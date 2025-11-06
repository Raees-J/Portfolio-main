import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Users, Lightbulb, Coffee, Camera } from "lucide-react";
import profileImage from "@/assets/Raees.jpeg";
import NaturalTypingParagraphs from "./NaturalTypingParagraphs";
import FlippingProfileCard from "./FlippingProfileCard";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    "React & TypeScript",
    "Node.js & Python", 
    "UI/UX Design",
    "Database Design",
    "Problem Solving"
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community First",
      description: "I believe great software brings people together and solves real problems."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-secondary" />,
      title: "Continuous Learning",
      description: "Always curious, always growing. There's something new to discover every day."
    },
    {
      icon: <Coffee className="w-8 h-8 text-accent" />,
      title: "Work-Life Balance",
      description: "Fueled by coffee, inspired by nature, and always ready for a good conversation."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About Your <span className="gradient-text">Friendly Dev</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let me tell you a bit about my journey and what drives me.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Profile Image - Flipping Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-1 flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-hero rounded-full blur-2xl opacity-20"></div>
              <div className="relative">
                <FlippingProfileCard
                  frontImage={profileImage}
                  backImage="/assets/raees2.jpg"
                  alt="Your friendly neighborhood programmer"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Laptop className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold">My Story</h3>
              </div>
              <NaturalTypingParagraphs
                paragraphs={[
                  "What started as curiosity about \"how websites work\" turned into a passion for creating digital experiences that make people's lives a little bit better. I've been coding for 2 years, and honestly, I still get excited about every new project.",
                  "I'm highly motivated and determined student with a strong capacity for problem-solving and innovative thinking, possesses good communication skills, able to adapt to new environments with ease and embraces challenges while contributing and collaborating with team members to complete objectives.",
                  "When I'm not debugging code, you'll find me on the football field, hiking trails or at the beach.",
                  "My approach? Write clean code, ask thoughtful questions, and never forget that behind every user interface is a human being trying to get something done."
                ]}
                className="text-muted-foreground leading-relaxed"
                delay={0.5}
              />
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              >
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;