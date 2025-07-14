"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log("Form submitted:", formData);
      
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "abdul.samad@example.com",
      href: "mailto:abdul.samad@example.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote / Worldwide",
      href: "#"
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-6">
          <span className="gradient-text">Get In Touch</span>
        </h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I&apos;m always interested in hearing about new opportunities, interesting projects, 
          and innovative ideas. Feel free to reach out if you&apos;d like to collaborate or 
          just want to say hello!
        </p>

        <div className="space-y-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl glass border border-border/50",
                "hover:border-primary/50 transition-all duration-300",
                "focus-ring"
              )}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <info.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{info.title}</h4>
                <p className="text-muted-foreground">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <div className="mt-8">
          <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
          <div className="flex gap-4">
            {[
              { name: "LinkedIn", href: "https://linkedin.com/in/itxsammad1", color: "from-blue-500 to-blue-600" },
              { name: "GitHub", href: "https://github.com/itxsamad1", color: "from-gray-700 to-gray-800" },
              { name: "Twitter", href: "https://twitter.com/itxsamad1", color: "from-sky-400 to-sky-500" }
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                  "text-white shadow-lg hover:shadow-xl transition-all duration-300",
                  social.color
                )}
                aria-label={social.name}
              >
                <span className="font-semibold text-sm">{social.name[0]}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "focus-ring",
                errors.name
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              )}
              placeholder="Your full name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 mt-2 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </motion.p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "focus-ring",
                errors.email
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              )}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 mt-2 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </motion.p>
            )}
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={(e) => handleInputChange("subject", e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "focus-ring",
                errors.subject
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              )}
              placeholder="What&apos;s this about?"
            />
            {errors.subject && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 mt-2 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.subject}
              </motion.p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message *
            </label>
            <textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className={cn(
                "w-full px-4 py-3 rounded-xl border transition-all duration-300",
                "bg-background text-foreground placeholder:text-muted-foreground",
                "resize-none focus-ring",
                errors.message
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              )}
              placeholder="Tell me about your project or idea..."
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-1 mt-2 text-sm text-destructive"
              >
                <AlertCircle className="w-4 h-4" />
                {errors.message}
              </motion.p>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={cn(
              "w-full px-6 py-4 rounded-xl font-semibold text-lg",
              "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground",
              "shadow-lg hover:shadow-xl transition-all duration-300",
              "focus-ring disabled:opacity-50 disabled:cursor-not-allowed",
              "flex items-center justify-center gap-2"
            )}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                Sending...
              </>
            ) : submitStatus === "success" ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Message Sent!
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>

          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-green-500/10 border border-green-500/20"
              >
                <p className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="p-4 rounded-xl bg-destructive/10 border border-destructive/20"
              >
                <p className="text-destructive flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Something went wrong. Please try again or contact me directly via email.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </div>
  );
}
