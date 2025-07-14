"use client";

import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

export default function ContactPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-primary">
              Let&apos;s Connect
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I&apos;m always excited to hear about new opportunities, interesting projects, 
              and innovative ideas. Whether you want to collaborate, hire me, or just 
              want to say hello, I&apos;d love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <ContactForm />
      </section>
    </div>
  );
}
