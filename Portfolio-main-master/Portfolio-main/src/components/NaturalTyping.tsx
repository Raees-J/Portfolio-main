import { motion, useMotionValue, useTransform, animate, MotionValue } from "framer-motion";
import { useEffect } from "react";

interface NaturalTypingProps {
  text: string;
  className?: string;
  delay?: number;
  onComplete?: () => void;
}

const cursorVariants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 0,
      ease: "linear" as const,
      times: [0, 0.5, 0.5, 1]
    }
  }
};

export default function NaturalTyping({
  text,
  className = "",
  delay = 0,
  onComplete
}: NaturalTypingProps) {
  const baseText = text;
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) =>
    baseText.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, baseText.length, {
      type: "tween",
      delay: delay,
      duration: baseText.length * 0.05, // Natural typing speed
      ease: "linear",
      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      }
    });
    return controls.stop;
  }, [baseText, count, delay, onComplete]);

  return (
    <span className={className}>
      <motion.span>{displayText}</motion.span>
      <motion.span
        variants={cursorVariants}
        animate="blinking"
        className="inline-block w-[2px] h-[1em] bg-current ml-[2px] align-middle"
      />
    </span>
  );
}
