import React from "react";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import ContactForm from "@/components/sections/ContactForm";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import GitHubQR from "@/components/GitHubQR";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowRight,
  Award,
  BookOpen,
  Code,
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />

      {/* GitHub QR Code */}
      <GitHubQR />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        id="skills"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Technical Skills</h2>
          <Separator className="w-20 h-1 bg-primary" />
        </div>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks & Libraries</TabsTrigger>
            <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
            <TabsTrigger value="concepts">Concepts</TabsTrigger>
          </TabsList>

          <TabsContent value="languages" className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {["Python", "C/C++", "JavaScript", "SQL", "HTML/CSS"].map(
                (skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm py-2 px-4 bg-muted/50"
                  >
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {["React", "Node.js", "Express.js", "Pandas", "Selenium"].map(
                (skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm py-2 px-4 bg-muted/50"
                  >
                    {skill}
                  </Badge>
                ),
              )}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {[
                "Git",
                "AWS EC2",
                "Kafka",
                "Spark",
                "Kibana",
                "MongoDB",
                "Confluence",
                "Unix Shell",
                "Pinecone",
                "Docker",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4 bg-muted/50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="concepts" className="space-y-4">
            <div className="flex flex-wrap gap-3">
              {[
                "OOP",
                "DSA",
                "REST APIs",
                "Machine Learning",
                "EDA",
                "Distributed Systems",
                "Cybersecurity",
              ].map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="text-sm py-2 px-4 bg-muted/50"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Experience & Education Timeline */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto bg-gradient-to-br from-slate-900/50 via-purple-900/20 to-pink-900/30 relative overflow-hidden"
        id="experience"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Journey & Milestones
          </h2>
          <Separator className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore my professional experience and educational background
            through an interactive timeline
          </p>
        </div>

        <Timeline />
      </section>

      {/* Projects Section */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        id="projects"
      >
        <Projects />
      </section>

      {/* Education Section - Placeholder for navbar */}
      <section id="education" className="h-0 invisible"></section>

      {/* Achievements Section */}
      <section
        className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto relative overflow-hidden"
        id="achievements"
      >
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/20 via-pink-950/10 to-blue-950/20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-8 w-8 text-purple-400 animate-bounce" />
              <h2 className="text-4xl md:text-5xl font-bold gradient-text">
                Achievements & Certifications
              </h2>
              <Award
                className="h-8 w-8 text-pink-400 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
              Recognition of technical excellence, competitive programming
              achievements, and professional certifications that showcase my
              commitment to continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Award className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    GATE CSE 2024 — Qualified
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Graduate Aptitude Test in Engineering
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Code className="h-6 w-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Codeforces Specialist
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Max Rating: 1428
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Code className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Solved 400+ problems on LeetCode
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Strong problem-solving track record
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    OCI Generative AI Professional
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oracle Cloud Infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    OCI Vector Search
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Oracle Cloud Infrastructure
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Full Stack Development
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Coding Ninjas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Competitive Programming (C++)
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Coding Ninjas
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <BookOpen className="h-6 w-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Advanced Python with Pandas
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">Udemy</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-white/20 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-300">
                  <Briefcase className="h-6 w-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg gradient-text">
                    Data Analytics Virtual Internship
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Deloitte Australia (Jul 2025)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto"
        id="contact"
      >
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <Separator className="w-20 h-1 bg-primary" />
        </div>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Aman Solanki. All rights reserved.</p>
      </footer>
    </main>
  );
}
