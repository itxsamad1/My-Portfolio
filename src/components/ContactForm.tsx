"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
      value: "itxsamad@icloud.com",
      href: "mailto:itsamad@icloud.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 307 0200506",
      href: "tel:+923070200506"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote / Karachi, Pakistan",
      href: "#"
    }
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          I&apos;m always interested in hearing about new opportunities, interesting projects, 
          and innovative ideas. Feel free to reach out if you&apos;d like to collaborate or 
          just want to say hello!
        </p>
        <div className="space-y-6">
          {contactInfo.map((info) => (
            <a
              key={info.title}
              href={info.href}
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
            </a>
          ))}
        </div>
        {/* Social Links with real SVGs */}
        <div className="mt-8">
          <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
          <div className="flex gap-4">
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.37-1.54 2.82-1.54 3.01 0 3.57 1.98 3.57 4.56v5.62z"/></svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/itxsamad1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.236-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.404 1.02.005 2.04.137 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.803 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576 4.765-1.587 8.2-6.086 8.2-11.385 0-6.63-5.373-12-12-12z"/></svg>
            </a>
            {/* Facebook */}
            <a href="https://facebook.com/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.325v21.351c0 .733.592 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.322-.591 1.322-1.324v-21.35c0-.733-.592-1.325-1.325-1.325z"/></svg>
            </a>
            {/* Instagram */}
            <a href="https://instagram.com/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308 1.266-.058 1.646-.069 4.85-.069zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            {/* WhatsApp */}
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-12 h-12 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.484 1.337 4.997L2 22l5.122-1.342c1.462.799 3.1 1.217 4.882 1.217 5.514 0 9.997-4.483 9.997-9.997 0-2.662-1.037-5.166-2.921-7.05C17.17 3.04 14.666 2.003 12.004 2.003zm0 17.994c-1.592 0-3.13-.422-4.463-1.217l-.319-.188-3.037.796.81-2.96-.207-.314C4.062 15.1 3.5 13.58 3.5 12c0-4.694 3.81-8.504 8.504-8.504 2.272 0 4.414.885 6.022 2.493a8.457 8.457 0 0 1 2.482 6.011c0 4.694-3.81 8.504-8.504 8.504z"/></svg>
            </a>
          </div>
        </div>
      </div>
      {/* Contact Form */}
      <div>
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
              <p className="flex items-center gap-1 mt-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4" />
                {errors.name}
              </p>
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
              <p className="flex items-center gap-1 mt-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4" />
                {errors.email}
              </p>
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
              <p className="flex items-center gap-1 mt-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4" />
                {errors.subject}
              </p>
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
              <p className="flex items-center gap-1 mt-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4" />
                {errors.message}
              </p>
            )}
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
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
          </button>
          {/* Status Messages */}
          <AnimatePresence>
            {submitStatus === "success" && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                <p className="text-green-600 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                <p className="text-destructive flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  Something went wrong. Please try again or contact me directly via email.
                </p>
              </div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}
