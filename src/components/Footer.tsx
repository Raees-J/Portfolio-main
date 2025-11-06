import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Mail, MapPin, Coffee, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/Raees-J", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "https://linkedin.com", label: "LinkedIn" },
    
  ];

  return (
    <footer className="bg-card border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4 gradient-text">Let's Connect!</h3>
            <div className="space-y-3">
              <div className="flex items-center text-muted-foreground">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a href="mailto:hello@yourname.dev" className="hover:text-primary transition-colors">
                  Johaadien.raees@gmail.com
                </a>
              </div>
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-5 h-5 mr-3 text-secondary" />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["Home", "About", "Projects", "Resume"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            
            <div className="text-muted-foreground text-center md:text-right">
              <p className="flex items-center justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 mx-1 text-primary" /> by Raees Johaadien
              </p>
              <p className="text-sm mt-1">© {currentYear} All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;