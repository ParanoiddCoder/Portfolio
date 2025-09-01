"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ProjectCard from "../ProjectCard";
import { Github, ExternalLink, Rocket } from "lucide-react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: "Mental Health Chatbot using ChatGroq",
      description:
        "A chatbot for mental health assistance using the LLaMA model through ChatGroq API. Grounded LLM responses using retrieval layer, reducing hallucinations in evaluations.",
      technologies: [
        "LLaMA",
        "ChatGroq",
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
      ],
      detailedPoints: [
        "Built a full-stack application with MERN",
        "User authentication",
        "Real-time chat",
        "Emotion tracking",
        "NLP-based responses",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      githubLink: "https://github.com/ParanoiddCoder/mental-health-bot",
      demoLink: "#",
      category: "ai",
    },
    {
      id: 2,
      title: "Enhancing Web Application Security through Web Deception",
      description:
        "Created an intrusion detection system and a full-feature MERN website with payment integration. Implemented XSS prevention using deception techniques like fake cookies, URLs, and traps to identify attackers.",
      technologies: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Cybersecurity",
      ],
      detailedPoints: [
        "Intrusion detection system",
        "XSS prevention techniques",
        "Attacker logging (IP, time)",
        "Proactive alerts",
        "Payment integration",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      githubLink: "https://github.com/ParanoiddCoder/Web-Deception-Strategies",
      demoLink: "#",
      category: "security",
    },
    {
      id: 3,
      title:
        "https://github.com/ParanoiddCoder/Real-Time-Data-Streaming-Pipeline",
      description:
        "Designed a streaming pipeline processing 10K+ reviews/day for anomaly & sentiment detection. Improved Spark consumer throughput by 25% with OOP-based optimizations.",
      technologies: [
        "Kafka",
        "Spark",
        "HuggingFace",
        "Kibana",
        "Elasticsearch",
        "Python",
      ],
      detailedPoints: [
        "Streaming data pipeline",
        "Real-time sentiment analysis",
        "Anomaly detection",
        "Performance optimization",
        "Interactive dashboards",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      githubLink:
        "https://github.com/ParanoiddCoder/sentiment-analytics-pipeline",
      demoLink: "#",
      category: "data",
    },
    {
      id: 4,
      title: "Duplicate Question Detection",
      description:
        "Engineered NLP features (fuzzy ratios, TF-IDF, embeddings) achieving 85% accuracy in semantic duplicate detection.",
      technologies: [
        "XGBoost",
        "Random Forest",
        "Python",
        "NLP",
        "Machine Learning",
      ],
      detailedPoints: [
        "NLP feature engineering",
        "Semantic similarity detection",
        "Machine learning models",
        "High accuracy classification",
        "Quora dataset implementation",
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
      githubLink:
        "https://github.com/ParanoiddCoder/duplicate-question-detection",
      demoLink: "#",
      category: "ml",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-20 bg-gradient-to-br from-background via-purple-950/5 to-pink-950/5 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Rocket className="h-8 w-8 text-purple-400 animate-bounce" />
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Featured Projects
            </h2>
            <Rocket
              className="h-8 w-8 text-pink-400 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Explore my recent projects showcasing expertise in AI, machine
            learning, data engineering, and web security. Each project
            demonstrates innovative solutions and cutting-edge technologies.
          </p>
        </div>

        <Tabs
          defaultValue="all"
          className="w-full mb-12"
          onValueChange={setActiveTab}
        >
          <div
            className={`flex justify-center mb-12 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <TabsList className="glass-effect border-white/20 p-1 bg-white/5">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                AI/ML
              </TabsTrigger>
              <TabsTrigger
                value="data"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                Data Engineering
              </TabsTrigger>
              <TabsTrigger
                value="security"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-300"
              >
                Security
              </TabsTrigger>
            </TabsList>
          </div>

          {["all", "ai", "data", "security"].map((tabValue) => (
            <TabsContent key={tabValue} value={tabValue} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className={`transition-all duration-700 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${0.4 + index * 0.2}s` }}
                  >
                    <ProjectCard {...project} />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "1s" }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating or learning more about these projects?
          </p>
          <Button
            size="lg"
            className="glass-effect border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300 neon-glow bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0"
          >
            <Github className="mr-2 h-5 w-5" />
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
