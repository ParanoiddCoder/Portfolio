"use client";

import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Github, QrCode, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const GitHubQR = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const githubUrl = "https://github.com/ParanoiddCoder";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(githubUrl)}&bgcolor=1a1a2e&color=a855f7`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Expanded QR Code */}
        <div
          className={cn(
            "absolute bottom-16 right-0 transition-all duration-500 ease-in-out transform origin-bottom-right",
            isExpanded
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-75 translate-y-4 pointer-events-none",
          )}
        >
          <Card className="glass-effect border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300">
            <CardContent className="p-4 text-center space-y-3">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Github className="h-5 w-5 text-purple-400" />
                <span className="font-medium text-sm gradient-text">
                  Scan to Visit GitHub
                </span>
              </div>

              <div className="relative group">
                <img
                  src={qrCodeUrl}
                  alt="GitHub QR Code"
                  className="w-48 h-48 rounded-lg border border-white/20 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="space-y-2">
                <p className="text-xs text-muted-foreground">
                  github.com/ParanoiddCoder
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full glass-effect border-white/20 hover:bg-white/20 text-xs"
                  asChild
                >
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Visit GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Toggle Button */}
        <Button
          size="lg"
          className={cn(
            "w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-2xl transition-all duration-300 neon-glow group",
            isExpanded ? "rotate-45 scale-110" : "hover:scale-110",
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="relative">
            <QrCode
              className={cn(
                "h-6 w-6 transition-all duration-300",
                isExpanded ? "opacity-0 rotate-90" : "opacity-100 rotate-0",
              )}
            />
            <Github
              className={cn(
                "h-6 w-6 absolute inset-0 transition-all duration-300",
                isExpanded ? "opacity-100 rotate-0" : "opacity-0 -rotate-90",
              )}
            />
          </div>

          {/* Pulse Animation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 animate-ping group-hover:animate-none"></div>
        </Button>

        {/* Tooltip */}
        <div
          className={cn(
            "absolute bottom-full right-0 mb-2 px-3 py-1 bg-black/80 text-white text-xs rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none",
            isExpanded
              ? "opacity-0 translate-y-2"
              : "opacity-0 group-hover:opacity-100 translate-y-0",
          )}
        >
          {isExpanded ? "Close QR Code" : "GitHub QR Code"}
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
        </div>
      </div>
    </div>
  );
};

export default GitHubQR;
