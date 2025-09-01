"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import {
  Github,
  Linkedin,
  Code2,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Badge } from "../ui/badge";

import Image from "next/image";

interface HeroProps {
  name?: string;
  title?: string;
  summary?: string;
  location?: string;
  email?: string;
  phone?: string;
  socialLinks?: {
    github?: string;
    linkedin?: string;
    leetcode?: string;
  };
}

const Hero = ({
  name = "Aman Solanki",
  title = "Software Engineer",
  summary = "Results-driven Software Engineer with strong Computer Science fundamentals (GATE CSE 2024 — Qualified) and proven expertise in data structures & algorithms and scalable systems. Experienced in building end-to-end pipelines, distributed systems, and automation solutions that deliver measurable impact (e.g., 30% faster log analysis, 85% ML accuracy). Adept at applying OOP principles, system design, and problem-solving to build robust solutions.",
  location = "New Delhi, India",
  email = "amansolankiw@gmail.com",
  phone = "+91-9958492151",
  socialLinks = {
    github: "ParanoiddCoder",
    linkedin: "amansolankiw",
    leetcode: "AmanSolanki11x",
  },
}: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dots, setDots] = useState<
    Array<{ id: number; x: number; y: number; dispersed: boolean }>
  >([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    // Initialize dots in a grid pattern
    const dotsArray = [];
    const gridSize = 20;
    const spacing = 40;
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        dotsArray.push({
          id: i * gridSize + j,
          x: j * spacing + 100,
          y: i * spacing + 100,
          dispersed: false,
        });
      }
    }
    setDots(dotsArray);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      // Disperse dots near mouse
      setDots((prevDots) =>
        prevDots.map((dot) => {
          const distance = Math.sqrt(
            Math.pow(e.clientX - dot.x, 2) + Math.pow(e.clientY - dot.y, 2),
          );

          if (distance < 100) {
            const angle = Math.atan2(e.clientY - dot.y, e.clientX - dot.x);
            const disperseDistance = 150 - distance;
            return {
              ...dot,
              dispersed: true,
              x: dot.x - Math.cos(angle) * disperseDistance * 0.5,
              y: dot.y - Math.sin(angle) * disperseDistance * 0.5,
            };
          }

          // Gradually return to original position
          if (dot.dispersed) {
            const originalX = (dot.id % 20) * 40 + 100;
            const originalY = Math.floor(dot.id / 20) * 40 + 100;
            return {
              ...dot,
              x: dot.x + (originalX - dot.x) * 0.1,
              y: dot.y + (originalY - dot.y) * 0.1,
              dispersed:
                Math.abs(dot.x - originalX) > 1 ||
                Math.abs(dot.y - originalY) > 1,
            };
          }

          return dot;
        }),
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-purple-950/10 to-pink-950/10"
    >
      {/* Interactive Dots - Positioned in lower section */}
      <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{
              left: `${(dot.x / 900) * 100}%`,
              top: `${((dot.y - 600) / 400) * 100}%`,
              transform: dot.dispersed ? "scale(2)" : "scale(1)",
              opacity: dot.dispersed ? 0.8 : 0.4,
            }}
          />
        ))}
        {/* Subtle gradient overlay to blend dots */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Profile Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-gradient-x"></div>
              <div className="relative h-48 w-48 md:h-80 md:w-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl hover-lift neon-glow">
                <Image
                  src="/images/PP.jpeg"
                  alt={name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div
            className={`flex-1 space-y-6 text-center md:text-left transition-all duration-1000 ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight gradient-text text-shadow animate-fade-in-up">
                {name}
              </h1>
              <div className="relative">
                <p
                  className="text-2xl md:text-3xl text-muted-foreground mt-2 animate-fade-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  {title}
                </p>
                <div
                  className="absolute -bottom-2 left-0 w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>

            <Card
              className="glass-effect border-white/20 shadow-2xl hover-lift animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <CardContent className="pt-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {summary}
                </p>
              </CardContent>
            </Card>

            <div
              className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.8s" }}
            >
              <Badge
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 glass-effect border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <MapPin size={16} className="text-purple-400" />
                <span>{location}</span>
              </Badge>

              <Badge
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 glass-effect border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <Mail size={16} className="text-pink-400" />
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </Badge>

              <Badge
                variant="outline"
                className="flex items-center gap-2 px-4 py-2 glass-effect border-white/20 hover:bg-white/20 transition-all duration-300 hover-lift"
              >
                <Phone size={16} className="text-blue-400" />
                <a href={`tel:${phone}`} className="hover:underline">
                  {phone}
                </a>
              </Badge>
            </div>

            <div
              className="flex gap-4 justify-center md:justify-start animate-fade-in-up"
              style={{ animationDelay: "1s" }}
            >
              {socialLinks.github && (
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 neon-glow"
                  asChild
                >
                  <a
                    href={`https://github.com/${socialLinks.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-6 w-6 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}

              {socialLinks.linkedin && (
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 neon-glow"
                  asChild
                >
                  <a
                    href={`https://linkedin.com/in/${socialLinks.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-6 w-6 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              )}

              {socialLinks.leetcode && (
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-effect border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 neon-glow"
                  asChild
                >
                  <a
                    href={`https://leetcode.com/${socialLinks.leetcode}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LeetCode Profile"
                  >
                    <Code2 className="h-6 w-6 mr-2" />
                    LeetCode
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
