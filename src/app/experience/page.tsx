"use client";

import ExperienceCard from "@/components/ExperienceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const jobs = [
  {
    role: "Senior Backend Engineer",
    company: "Intelik Immutable Intelligence",
    period: "June 2023 – Present",
    location: "Remote",
    desc: [
      "Led development of scalable microservices architecture serving 100K+ users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Designed and deployed AI/ML models for automated data processing",
      "Mentored junior developers and conducted code reviews",
      "Optimized database queries improving API response times by 40%"
    ],
    technologies: ["Node.js", "Python", "Docker", "AWS", "MongoDB", "Redis"],
    achievements: [
      "Reduced system downtime by 95% through improved monitoring",
      "Led team of 5 developers in successful product launch",
      "Implemented automated testing achieving 90% code coverage"
    ]
  },
  {
    role: "Full-Stack Developer",
    company: "TechCorp Solutions",
    period: "March 2022 – May 2023",
    location: "Hybrid",
    desc: [
      "Built responsive web applications using React and Node.js",
      "Integrated third-party APIs and payment gateways",
      "Implemented real-time features using WebSocket technology",
      "Collaborated with UX/UI designers to improve user experience",
      "Maintained and optimized existing codebase"
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Socket.io"],
    achievements: [
      "Delivered 3 major features ahead of schedule",
      "Improved application performance by 35%",
      "Received 'Developer of the Month' award twice"
    ]
  },
  {
    role: "AI/ML Engineer Intern",
    company: "DataScience Labs",
    period: "June 2021 – February 2022",
    location: "On-site",
    desc: [
      "Developed machine learning models for predictive analytics",
      "Preprocessed and analyzed large datasets using Python",
      "Created data visualization dashboards for stakeholders",
      "Assisted in research and development of new AI algorithms",
      "Documented technical processes and findings"
    ],
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "Jupyter"],
    achievements: [
      "Published research paper on ML model optimization",
      "Contributed to open-source ML library with 1K+ stars",
      "Presented findings at company-wide tech conference"
    ]
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Your University",
    period: "2022 – 2026",
    location: "Karachi, Pakistan",
    gpa: "3.6/4.0",
    highlights: [
      "Graduated with First Class Honours",
      "Specialized in Artificial Intelligence and Machine Learning",
      "Completed capstone project on Computer Vision",
      "Active member of Computer Science Society"
    ]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credential: "SAA-C03"
  },
  {
    name: "Google Cloud Professional Data Engineer",
    issuer: "Google Cloud",
    date: "2023",
    credential: "GCP-DE"
  },
  {
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2022",
    credential: "AZ-204"
  }
];

export default function ExperiencePage() {
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
              <span className="gradient-text">Experience</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My professional journey in software development, AI/ML, and DevOps. 
              Each role has contributed to my growth as a full-stack engineer.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Work Experience */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="gradient-text-secondary">Work Experience</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              {jobs.map((job, index) => (
                <ExperienceCard
                  key={index}
                  {...job}
                />
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-secondary-foreground" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="gradient-text-accent">Education</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-2xl glass border border-border/50",
                    "hover:border-secondary/50 transition-all duration-500",
                    "card-hover"
                  )}
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {edu.period} • {edu.location} • GPA: {edu.gpa}
                  </p>
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Certifications */}
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center">
                <Award className="w-5 h-5 text-accent-foreground" />
              </div>
              <h2 className="text-3xl font-bold">
                <span className="gradient-text">Certifications</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-2xl glass border border-border/50 text-center",
                    "hover:border-accent/50 transition-all duration-500",
                    "card-hover"
                  )}
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {cert.date} • {cert.credential}
                  </p>
                  <div className="w-12 h-12 rounded-full bg-accent/10 mx-auto flex items-center justify-center">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">
              <span className="gradient-text-secondary">Ready to work together?</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm passionate about creating innovative solutions and always excited 
              to take on new challenges. Let's discuss how we can bring your ideas to life!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center px-6 py-3",
                  "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
                  "rounded-full font-semibold shadow-lg",
                  "hover:shadow-xl transition-all duration-300",
                  "focus-ring"
                )}
              >
                <span>Get In Touch</span>
              </motion.a>
              <motion.a
                href="/resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center px-6 py-3",
                  "border-2 border-border rounded-full font-semibold",
                  "hover:border-primary hover:text-primary transition-all duration-300",
                  "focus-ring"
                )}
              >
                <Download className="mr-2 w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
