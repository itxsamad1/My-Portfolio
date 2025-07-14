"use client";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Brain, 
  Cloud, 
  Zap, 
  Shield, 
  Globe, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const skills = [
  {
    category: "Backend Development",
    icon: Database,
    items: ["Node.js", "Python", "Go", "REST APIs", "GraphQL", "Microservices"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Frontend Development",
    icon: Code,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "AI & Machine Learning",
    icon: Brain,
    items: ["TensorFlow", "PyTorch", "OpenAI API", "Computer Vision", "NLP"],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "DevOps & Cloud",
    icon: Cloud,
    items: ["Docker", "Kubernetes", "AWS", "CI/CD", "Monitoring"],
    color: "from-orange-500 to-red-500"
  }
];

const highlights = [
  "Scalable microservices architecture",
  "Modern React/Next.js applications",
  "AI/ML solutions for real-world problems",
  "DevOps automation and cloud deployment",
  "Clean code and best practices",
  "Performance optimization and monitoring"
];

export default function Home() {
  return (
    <div className="space-y-32">
      <Hero />
      
      {/* About Section */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              <span className="gradient-text">What I Do</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              I specialize in building end-to-end solutions that combine cutting-edge 
              technology with practical business needs.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className={cn(
                  "p-6 rounded-2xl glass border border-border/50",
                  "hover:border-primary/50 transition-all duration-300",
                  "card-hover"
                )}>
                  <div className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br mb-4",
                    "flex items-center justify-center text-white",
                    skill.color
                  )}>
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Highlights Section */}
      <AnimatedSection>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                <span className="text-primary">Why Choose Me</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With years of experience in full-stack development and AI, I bring a unique 
                combination of technical expertise and creative problem-solving to every project.
              </p>
              
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{highlight}</span>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "inline-flex items-center mt-8 px-6 py-3",
                  "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
                  "rounded-full font-semibold shadow-lg",
                  "hover:shadow-xl transition-all duration-300",
                  "focus-ring"
                )}
              >
                <span>View My Work</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="neumorphism p-6 rounded-2xl"
                >
                  <Globe className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Experience working with international teams and clients
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="neumorphism p-6 rounded-2xl"
                >
                  <Shield className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Security First</h3>
                  <p className="text-sm text-muted-foreground">
                    Built-in security best practices in every solution
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="neumorphism p-6 rounded-2xl"
                >
                  <Smartphone className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Responsive Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first approach for all applications
                  </p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="neumorphism p-6 rounded-2xl"
                >
                  <Zap className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized for speed and user experience
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </AnimatedSection>

      {/* Footer Section */}
      <footer className="w-full bg-background border-t border-border/40 mt-32 py-8">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Abdul Samad. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="https://github.com/itxsamad1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">GitHub</a>
            <a href="mailto:itxsamad@icloud.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
