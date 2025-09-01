"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  ChevronDown,
  ChevronUp,
  Github,
  ExternalLink,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  detailedPoints: string[];
  githubLink?: string;

  imageUrl?: string;
}

export default function ProjectCard({
  title = "Project Title",
  description = "A brief description of the project showcasing the main features and technologies used.",
  technologies = ["React", "Node.js", "MongoDB"],
  detailedPoints = [
    "Implemented key features that improved user experience",
    "Developed backend services with optimized performance",
    "Created responsive UI components for all device sizes",
  ],
  githubLink,

  imageUrl = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
}: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group relative w-full max-w-md glass-effect border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Glowing Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Floating Icon */}
          <div
            className={cn(
              "absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300",
              isHovered
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0",
            )}
          >
            <Zap className="h-4 w-4 text-yellow-400" />
          </div>
        </div>
      )}

      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-foreground/80">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-white/10 border-white/20 text-foreground hover:bg-white/20 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tech}
            </Badge>
          ))}
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-in-out",
            expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <Separator className="my-4 bg-gradient-to-r from-purple-500/50 to-pink-500/50" />
          <div className="space-y-2">
            <h4 className="font-medium text-purple-300">Key Features:</h4>
            <ul className="list-none pl-0 space-y-2">
              {detailedPoints.map((point, index) => (
                <li
                  key={index}
                  className="text-sm text-muted-foreground flex items-start gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 relative z-10">
        <div className="flex space-x-2">
          {githubLink && (
            <Button
              variant="outline"
              size="sm"
              className="glass-effect border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          {expanded ? (
            <>
              Less{" "}
              <ChevronUp className="ml-1 h-4 w-4 transition-transform duration-300" />
            </>
          ) : (
            <>
              More{" "}
              <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
