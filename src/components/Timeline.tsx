"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Calendar,
  MapPin,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  skills?: string[];
  achievement?: string;
}

const Timeline = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [scrollY, setScrollY] = useState(0);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const timelineData: TimelineItem[] = [
    {
      id: "mtech",
      type: "education",
      title: "M.Tech — Information Technology",
      organization: "Delhi Technological University",
      location: "New Delhi, India",
      period: "2024 - 2026",
      description: [
        "Pursuing advanced studies in Information Technology",
        "Focus on distributed systems and machine learning",
        "Research in AI and data engineering",
      ],
      achievement: "CGPA: 8.04",
    },
    {
      id: "wipro",
      type: "work",
      title: "Software Test Engineer",
      organization: "Wipro Ltd. (Client: LG Electronics)",
      location: "Bangalore, India",
      period: "Feb 2022 - Jul 2022",
      description: [
        "Automated embedded system testing using modular Python & C++ OOP classes, reducing log analysis time by 30%",
        "Built multi-threaded C++ modules integrated with Python tools, boosting performance & scalability",
        "Developed Selenium test scripts for real-time anomaly tracking on UI dashboards, cutting manual effort by 40%",
        "Simulated production-like AWS EC2 environments with Unix shell scripting to enforce reliability & failover protocols",
        "Collaborated with QA/DevOps to improve workflows, documentation, and system resilience",
      ],
      skills: [
        "Python",
        "C++",
        "Selenium",
        "AWS EC2",
        "Unix Shell",
        "QA",
        "DevOps",
      ],
    },
    {
      id: "btech",
      type: "education",
      title: "B.Tech — Electrical & Electronics Engineering",
      organization: "ADGITM, GGSIPU",
      location: "New Delhi, India",
      period: "2017 - 2021",
      description: [
        "Comprehensive study of electrical and electronics engineering",
        "Strong foundation in mathematics and programming",
        "Participated in various technical competitions and projects",
      ],
      achievement: "CGPA: 7.62",
    },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 },
    );

    const timelineItems = document.querySelectorAll(".timeline-item");
    timelineItems.forEach((item) => {
      if (observerRef.current) {
        observerRef.current.observe(item);
      }
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px) translateX(${Math.sin(scrollY * 0.01) * 20}px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-24 h-24 bg-pink-500/10 rounded-full blur-xl"
          style={{
            transform: `translateY(${scrollY * -0.05}px) translateX(${Math.cos(scrollY * 0.008) * 30}px)`,
            right: "15%",
            top: "60%",
          }}
        />
        <div
          className="absolute w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.08}px) translateX(${Math.sin(scrollY * 0.005) * 40}px)`,
            left: "70%",
            top: "40%",
          }}
        />
      </div>

      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 transform md:-translate-x-0.5"></div>

      <div className="space-y-12">
        {timelineData.map((item, index) => {
          const isVisible = visibleItems.has(item.id);
          const isActive = activeItem === item.id;
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              id={item.id}
              className={cn(
                "timeline-item relative flex items-center",
                isLeft ? "md:flex-row" : "md:flex-row-reverse",
              )}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 transform -translate-x-2 md:-translate-x-2 z-20">
                <div
                  className={cn(
                    "w-4 h-4 rounded-full border-4 transition-all duration-500",
                    isVisible
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 border-white shadow-lg scale-125"
                      : "bg-muted border-muted-foreground/30",
                  )}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 animate-ping"></div>
                </div>
              </div>

              {/* Content */}
              <div
                className={cn(
                  "ml-16 md:ml-0 md:w-5/12 transition-all duration-700",
                  isLeft ? "md:pr-8" : "md:pl-8",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                )}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card
                  className={cn(
                    "glass-effect border-white/20 hover:shadow-2xl transition-all duration-500 cursor-pointer group",
                    isActive &&
                      "ring-2 ring-purple-500/50 shadow-purple-500/20",
                  )}
                  onClick={() => setActiveItem(isActive ? null : item.id)}
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                        {item.type === "work" ? (
                          <Briefcase className="h-5 w-5 text-purple-400" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-pink-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-purple-300 transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-medium">
                          {item.organization}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Badge */}
                    {item.achievement && (
                      <div className="mb-4">
                        <Badge
                          variant="outline"
                          className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-300"
                        >
                          <Award className="h-3 w-3 mr-1" />
                          {item.achievement}
                        </Badge>
                      </div>
                    )}

                    {/* Expandable Content */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500 ease-in-out",
                        isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <ul className="space-y-2">
                          {item.description.map((desc, i) => (
                            <li
                              key={i}
                              className="text-sm text-muted-foreground flex items-start gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mt-2 flex-shrink-0"></div>
                              {desc}
                            </li>
                          ))}
                        </ul>

                        {/* Skills */}
                        {item.skills && (
                          <div className="pt-3">
                            <p className="text-sm font-medium text-purple-300 mb-2">
                              Technologies Used:
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.skills.map((skill, i) => (
                                <Badge
                                  key={i}
                                  variant="secondary"
                                  className="bg-white/10 border-white/20 text-foreground hover:bg-white/20 transition-all duration-300 text-xs"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div className="mt-4 text-xs text-muted-foreground/60 text-center">
                      Click to {isActive ? "collapse" : "expand"} details
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
