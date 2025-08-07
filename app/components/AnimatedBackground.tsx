'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Types for our star objects
type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
};

/**
 * AnimatedBackground Component
 * 
 * A beautiful, performant starfield animation that creates a sense of depth.
 * Uses Framer Motion for smooth animations and React's useEffect for cleanup.
 * The animation is designed to be subtle and non-distracting while adding visual interest.
 */
export default function AnimatedBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Initialize stars based on viewport size
  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions
    updateDimensions();

    // Create stars
    const createStars = () => {
      const starCount = Math.floor((dimensions.width * dimensions.height) / 10000);
      const newStars: Star[] = [];

      for (let i = 0; i < starCount; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 0.5 + 0.5, // Between 0.5 and 1.5
          opacity: Math.random() * 0.5 + 0.1, // Between 0.1 and 0.6
          duration: Math.random() * 20 + 10, // Between 10 and 30
          delay: Math.random() * -20, // Stagger the animations
        });
      }

      setStars(newStars);
    };

    // Handle window resize
    window.addEventListener('resize', updateDimensions);
    createStars();

    // Cleanup
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions.width, dimensions.height]);

  // Animation variants for the stars
  const starVariants = {
    twinkle: (star: Star) => ({
      opacity: [star.opacity, star.opacity * 0.3, star.opacity],
      transition: {
        duration: star.duration,
        delay: star.delay,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut' as const,
      },
    }),
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          custom={star}
          variants={starVariants}
          animate="twinkle"
        />
      ))}
      {/* Subtle gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-gray-900/70" />
    </div>
  );
}
