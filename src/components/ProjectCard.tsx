"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  title: string;
  desc: string;
  link: string;
  demo?: string;
  tags: string[];
  image?: string;
};

export default function ProjectCard({ title, desc, link, demo, tags, image }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className={cn(
        "relative overflow-hidden rounded-2xl glass border border-border/50",
        "hover:border-primary/50 transition-all duration-500",
        "card-hover"
      )}>
        {/* Project Image */}
        {image && (
          <div className="relative h-48 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            <Image
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              fill
            />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <div className="flex space-x-2">
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-8 h-8 rounded-lg glass flex items-center justify-center",
                  "hover:bg-primary/10 hover:text-primary transition-all duration-300",
                  "focus-ring"
                )}
                aria-label="View on GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              {demo && (
                <motion.a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={cn(
                    "w-8 h-8 rounded-lg glass flex items-center justify-center",
                    "hover:bg-primary/10 hover:text-primary transition-all duration-300",
                    "focus-ring"
                  )}
                  aria-label="View demo"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {desc}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-medium",
                  "bg-primary/10 text-primary border border-primary/20",
                  "hover:bg-primary/20 transition-colors duration-300"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* View Project Link */}
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 5 }}
            className={cn(
              "inline-flex items-center text-sm font-medium text-primary",
              "hover:text-primary/80 transition-colors duration-300",
              "focus-ring"
            )}
          >
            View Project
            <ArrowUpRight className="ml-1 w-4 h-4" />
          </motion.a>
        </div>

        {/* Hover overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
