"use client";
import { motion } from "framer-motion";
import { Calendar, MapPin, Building2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  role: string;
  company: string;
  period: string;
  location?: string;
  desc: string[];
  technologies?: string[];
  achievements?: string[];
};

export default function ExperienceCard({ 
  role, 
  company, 
  period, 
  location, 
  desc, 
  technologies = [],
  achievements = []
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Timeline connector */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-transparent" />
      
      <div className={cn(
        "relative ml-12 p-6 rounded-2xl glass border border-border/50",
        "hover:border-primary/50 transition-all duration-500",
        "card-hover"
      )}>
        {/* Timeline dot */}
        <div className="absolute -left-9 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg" />
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
              {role}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Building2 className="w-4 h-4" />
              <span className="font-medium">{company}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{period}</span>
              </div>
              {location && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{location}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-4">
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <ArrowRight className="w-4 h-4 text-primary" />
            Key Responsibilities
          </h4>
          <ul className="space-y-2">
            {desc.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {achievements.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Key Achievements
            </h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{achievement}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {technologies.length > 0 && (
          <div>
            <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium",
                    "bg-primary/10 text-primary border border-primary/20",
                    "hover:bg-primary/20 transition-colors duration-300"
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
