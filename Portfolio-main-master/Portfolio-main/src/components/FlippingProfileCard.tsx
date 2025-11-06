import { motion } from "framer-motion";
import { useState } from "react";

interface FlippingProfileCardProps {
  frontImage: string;
  backImage: string;
  alt: string;
}

export default function FlippingProfileCard({
  frontImage,
  backImage,
  alt
}: FlippingProfileCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative w-64 h-64 perspective-1000">
      <motion.div
        className="relative w-full h-full cursor-pointer preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="relative w-full h-full">
            {/* Outer blush pink/peach border */}
            <div className="absolute inset-0 rounded-full bg-[#F8EFEF] shadow-lg"></div>
            
            {/* Inner white border */}
            <div className="absolute inset-2 rounded-full bg-white"></div>
            
            {/* Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden">
              <img
                src={frontImage}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-4 rounded-full bg-primary/0 hover:bg-primary/5 transition-colors duration-300"></div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute w-full h-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <div className="relative w-full h-full">
            {/* Outer blush pink/peach border */}
            <div className="absolute inset-0 rounded-full bg-[#F8EFEF] shadow-lg"></div>
            
            {/* Inner white border */}
            <div className="absolute inset-2 rounded-full bg-white"></div>
            
            {/* Logo/Back Image */}
            <div className="absolute inset-4 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
              <img
                src={backImage}
                alt="Abstract logo"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Hover effect overlay */}
            <div className="absolute inset-4 rounded-full bg-primary/0 hover:bg-primary/5 transition-colors duration-300"></div>
          </div>
        </div>
      </motion.div>
      
      {/* Click hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground whitespace-nowrap"
      >
        Click to flip
      </motion.div>
    </div>
  );
}
