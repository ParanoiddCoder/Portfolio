"use client";

import React, { useEffect, useRef, useState } from "react";

interface Dot {
  id: number;
  x: number;
  y: number;
  originalX: number;
  originalY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const DotsAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const DOT_COUNT = 150;
  const DISPERSION_RADIUS = 120;
  const DISPERSION_FORCE = 0.8;
  const RETURN_FORCE = 0.02;
  const FRICTION = 0.95;

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Initialize dots
    dotsRef.current = Array.from({ length: DOT_COUNT }, (_, i) => {
      const x = Math.random() * dimensions.width;
      const y = Math.random() * dimensions.height;
      return {
        id: i,
        x,
        y,
        originalX: x,
        originalY: y,
        vx: 0,
        vy: 0,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
      };
    });

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      dotsRef.current.forEach((dot) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - dot.x;
        const dy = mouseRef.current.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply dispersion force if within radius
        if (distance < DISPERSION_RADIUS && distance > 0) {
          const force = (DISPERSION_RADIUS - distance) / DISPERSION_RADIUS;
          const angle = Math.atan2(dy, dx);
          dot.vx -= Math.cos(angle) * force * DISPERSION_FORCE;
          dot.vy -= Math.sin(angle) * force * DISPERSION_FORCE;
        }

        // Apply return force to original position
        const returnDx = dot.originalX - dot.x;
        const returnDy = dot.originalY - dot.y;
        dot.vx += returnDx * RETURN_FORCE;
        dot.vy += returnDy * RETURN_FORCE;

        // Apply friction
        dot.vx *= FRICTION;
        dot.vy *= FRICTION;

        // Update position
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Keep dots within bounds
        dot.x = Math.max(0, Math.min(dimensions.width, dot.x));
        dot.y = Math.max(0, Math.min(dimensions.height, dot.y));

        // Draw dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);

        // Create gradient for each dot
        const gradient = ctx.createRadialGradient(
          dot.x,
          dot.y,
          0,
          dot.x,
          dot.y,
          dot.size * 2,
        );
        gradient.addColorStop(0, `rgba(168, 85, 247, ${dot.opacity})`);
        gradient.addColorStop(0.5, `rgba(236, 72, 153, ${dot.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(59, 130, 246, ${dot.opacity * 0.3})`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(168, 85, 247, ${dot.opacity * 0.5})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default DotsAnimation;
