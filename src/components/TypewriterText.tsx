import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  delay?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  className = "",
  delay = 0,
  typingSpeed = 0.05,
  deletingSpeed = 0.03,
  pauseDuration = 2,
}: TypewriterTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    texts[currentTextIndex].slice(0, latest)
  );

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    // Initial delay before starting
    const initialTimeout = setTimeout(() => {
      // Type the text
      const typingAnimation = animate(count, currentText.length, {
        type: "tween",
        duration: currentText.length * typingSpeed,
        ease: "linear",
        onComplete: () => {
          // Pause before deleting
          setTimeout(() => {
            // Delete the text
            animate(count, 0, {
              type: "tween",
              duration: currentText.length * deletingSpeed,
              ease: "linear",
              onComplete: () => {
                // Move to next text
                setCurrentTextIndex((prev) => (prev + 1) % texts.length);
              },
            });
          }, pauseDuration * 1000);
        },
      });

      return () => typingAnimation.stop();
    }, delay * 1000);

    return () => clearTimeout(initialTimeout);
  }, [currentTextIndex, texts, count, delay, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-current ml-1 align-middle"
      />
    </span>
  );
}
