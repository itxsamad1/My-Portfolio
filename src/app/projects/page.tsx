"use client";

import ProjectCard from "@/components/ProjectCard";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "AI-powered OCR System",
    desc: "Advanced document digitization system using PaddleOCR and custom machine learning models for accurate text extraction and processing. Features real-time processing and multi-language support.",
    link: "https://github.com/itxsamad1/PaddleOCR-Automation",
    demo: "https://ocr-demo.example.com",
    tags: ["Python", "AI/ML", "OCR", "Computer Vision", "Flask"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
  },
  {
    title: "E-Commerce API Backend",
    desc: "Scalable REST API built with Node.js and Express, featuring authentication, payment processing, and real-time inventory management. Supports microservices architecture.",
    link: "https://github.com/itxsamad1/ecommerce-api",
    demo: "https://api-docs.example.com",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop"
  },
  {
    title: "Modern Dashboard",
    desc: "Next.js admin dashboard with real-time analytics, interactive charts, and responsive design. Features dark mode, role-based access control, and data visualization.",
    link: "https://github.com/itxsamad1/admin-dashboard",
    demo: "https://dashboard-demo.example.com",
    tags: ["Next.js", "TypeScript", "Tailwind", "Chart.js", "Prisma"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
  },
  {
    title: "DevOps Automation Platform",
    desc: "Comprehensive CI/CD pipeline automation with Docker, Kubernetes, and GitHub Actions. Includes monitoring, logging, and infrastructure as code.",
    link: "https://github.com/itxsamad1/devops-pipelines",
    demo: "https://devops-demo.example.com",
    tags: ["Docker", "Kubernetes", "AWS", "Terraform", "Prometheus"],
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&h=300&fit=crop"
  },
  {
    title: "Real-time Chat Application",
    desc: "Full-stack chat application with WebSocket support, real-time messaging, and file sharing. Built with React, Node.js, and Socket.io.",
    link: "https://github.com/itxsamad1/chat-app",
    demo: "https://chat-demo.example.com",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=500&h=300&fit=crop"
  },
  {
    title: "Machine Learning Model API",
    desc: "Production-ready ML model serving API with automatic scaling, model versioning, and A/B testing capabilities. Built with FastAPI and Docker.",
    link: "https://github.com/itxsamad1/ml-api",
    demo: "https://ml-api-docs.example.com",
    tags: ["Python", "FastAPI", "Docker", "Redis", "MLflow"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
  }
];

const categories = ["All", "Web Development", "AI/ML", "DevOps", "Mobile", "API"];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="text-white">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A collection of projects showcasing my expertise in full-stack development, 
              AI/ML, and DevOps. Each project demonstrates clean code, modern architecture, 
              and real-world problem-solving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <AnimatedSection>
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-all duration-300",
                  "border border-border hover:border-primary/50",
                  "focus-ring",
                  category === "All" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background text-foreground hover:bg-primary/10"
                )}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mt-16"
          >
            <div className="glass rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-blue-400">Interested in working together?</span>
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, 
                and innovative ideas. Let&apos;s create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center px-6 py-3",
                    "bg-blue-600 text-white",
                    "rounded-full font-semibold shadow-lg",
                    "hover:bg-blue-700 transition-all duration-300",
                    "focus-ring"
                  )}
                >
                  <span>Get In Touch</span>
                  <ExternalLink className="ml-2 w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://github.com/itxsamad1"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "inline-flex items-center px-6 py-3",
                    "border-2 border-blue-600 rounded-full font-semibold text-blue-600",
                    "hover:bg-blue-600 hover:text-white transition-all duration-300",
                    "focus-ring"
                  )}
                >
                  <Github className="mr-2 w-5 h-5" />
                  <span>View GitHub</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}
