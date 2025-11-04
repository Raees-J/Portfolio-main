import { useState } from "react";
import NaturalTyping from "./NaturalTyping";

interface NaturalTypingParagraphsProps {
  paragraphs: string[];
  className?: string;
  delay?: number;
}

export default function NaturalTypingParagraphs({
  paragraphs,
  className = "",
  delay = 0
}: NaturalTypingParagraphsProps) {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleComplete = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(prev => prev + 1);
    }
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>
          {index < currentParagraph ? (
            paragraph
          ) : index === currentParagraph ? (
            <NaturalTyping
              text={paragraph}
              delay={index === 0 ? delay : 0.3}
              onComplete={handleComplete}
            />
          ) : null}
        </p>
      ))}
    </div>
  );
}
