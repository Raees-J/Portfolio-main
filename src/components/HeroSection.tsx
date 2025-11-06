import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Coffee, Code2, Heart } from "lucide-react";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center mb-6 space-x-2">
            <span className="text-lg text-muted-foreground font-medium">Hello, I'm</span>
            <Code2 className="w-6 h-6 text-secondary" />
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">
              <TypewriterText
                texts={[
                  "Your Friendly Neighbourhood Programmer",
                  "Building Amazing Web Experiences",
                  "Solving Problems with Code",
                  "Creating Digital Solutions"
                ]}
                delay={0.5}
                typingSpeed={0.08}
                deletingSpeed={0.05}
                pauseDuration={2.5}
              />
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm passionate about crafting digital experiences. 
            Whether it's building apps, solving problems, or sharing knowledge – 
            <span className="text-primary font-semibold">With great code comes great responsibility! </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 warm-glow"
                onClick={scrollToAbout}
              >
                <Heart className="w-5 h-5 mr-2" />
                Get to Know Me
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View My Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex items-center justify-center text-muted-foreground"
          >
            <p className="mr-4">Let's build something amazing together</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="cursor-pointer"
              onClick={scrollToAbout}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;