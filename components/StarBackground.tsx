'use client';

import { useEffect, useRef } from 'react';

/**
 * StarBackground Component
 * 
 * A lightweight animated starry background using HTML5 Canvas.
 * Creates a subtle animation of twinkling stars that doesn't impact performance.
 * 
 * Usage:
 * ```tsx
 * <StarBackground />
 * ```
 */
export default function StarBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number | null>(null);
  
  // Configuration for the starfield
  const config = {
    starCount: 100,        // Number of stars
    minSize: 1,           // Minimum star size (pixels)
    maxSize: 2,           // Maximum star size (pixels)
    minSpeed: 0.05,       // Minimum star movement speed
    maxSpeed: 0.2,        // Maximum star movement speed
    starColor: '#ffffff',  // Star color (white)
    bgColor: 'rgba(15, 23, 42, 0.1)', // Background color with transparency
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas to full viewport size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initial resize
    resizeCanvas();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: Array<{
      x: number;
      y: number;
      size: number;
      speed: number;
      initialX: number;
      initialY: number;
      time: number;
    }> = [];

    // Initialize stars
    for (let i = 0; i < config.starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (config.maxSize - config.minSize) + config.minSize,
        speed: Math.random() * (config.maxSpeed - config.minSpeed) + config.minSpeed,
        initialX: Math.random() * canvas.width,
        initialY: Math.random() * canvas.height,
        time: Math.random() * 1000,
      });
    }

    // Animation loop
    const animate = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Clear canvas with semi-transparent background for trail effect
      ctx.fillStyle = config.bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Remove unused time variable

      // Draw and update each star
      stars.forEach((star) => {
        // Update star position with subtle movement
        star.time += 0.01;
        star.x = star.initialX + Math.sin(star.time) * 10;
        star.y = star.initialY + Math.cos(star.time * 0.5) * 5;

        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = config.starColor;
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(star.time); // Pulsing opacity
        ctx.fill();
      });

      // Reset global alpha
      ctx.globalAlpha = 1;

      // Continue animation loop
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  // Add all config values to the dependency array
  }, [config.bgColor, config.maxSize, config.maxSpeed, config.minSize, config.minSpeed, config.starColor, config.starCount]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
