"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, Mail, MessageSquare, Sparkles } from "lucide-react";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    // Simulate form submission with loading animation
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after successful submission
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <div className="relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-3xl blur-3xl"></div>

      <Card
        className={`relative w-full max-w-lg mx-auto glass-effect border-white/20 shadow-2xl transition-all duration-1000 hover:shadow-purple-500/20 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-20 blur-xl rounded-3xl"></div>

        <CardHeader className="space-y-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageSquare className="h-8 w-8 text-purple-400 animate-bounce" />
            <Sparkles className="h-6 w-6 text-pink-400 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold gradient-text">
            Let's Connect
          </CardTitle>
          <CardDescription className="text-foreground/80 text-lg">
            Have a question or want to work together? I'd love to hear from you!
          </CardDescription>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </CardHeader>

        <CardContent className="relative z-10">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4 animate-fade-in-up">
              <div className="relative">
                <CheckCircle className="h-16 w-16 text-green-400 animate-bounce" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl animate-pulse"></div>
              </div>
              <p className="text-center font-semibold text-xl gradient-text">
                Message Sent Successfully!
              </p>
              <p className="text-center text-muted-foreground">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
              <div className="flex space-x-1 mt-4">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.1s" }}
                    >
                      <FormLabel className="text-foreground/90 font-medium">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your name"
                          className="glass-effect border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <FormLabel className="text-foreground/90 font-medium">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your.email@example.com"
                          className="glass-effect border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <FormLabel className="text-foreground/90 font-medium">
                        Subject
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="What is this regarding?"
                          className="glass-effect border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/10"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem
                      className="animate-fade-in-up"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <FormLabel className="text-foreground/90 font-medium">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message here..."
                          className="min-h-[140px] glass-effect border-white/20 focus:border-purple-400 transition-all duration-300 hover:bg-white/10 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 neon-glow animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>

        <CardFooter className="flex justify-center border-t border-white/10 pt-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 text-purple-400" />
            <span>Or reach me directly at</span>
            <a
              href="mailto:amansolankiw@gmail.com"
              className="font-medium text-purple-400 hover:text-pink-400 transition-colors duration-300 hover:underline"
            >
              amansolankiw@gmail.com
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
