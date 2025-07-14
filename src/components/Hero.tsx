"use client";
import Image from "next/image";
import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { useCallback } from "react";

export default function Hero() {
  // Download handler for resume
  const handleDownloadResume = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/assets/Abdul_Samad_Backend_Engineer.pdf";
    link.download = "Abdul_Samad_Backend_Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex flex-col lg:flex-row items-center justify-center gap-12 px-4 py-16">
      {/* Profile Image or Placeholder */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-600 shadow-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
          <Image
            src="/profile.png.jpg"
            alt="Abdul Samad"
            width={320}
            height={320}
            className="object-cover w-full h-full"
            style={{ objectPosition: 'top center' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = `<span class=\"text-white text-6xl font-extrabold select-none\">AS<\/span>`;
              }
            }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
        <p className="text-lg text-muted-foreground mb-2 font-medium">👋 Hello, I&apos;m</p>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight text-foreground">
          Abdul Samad
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-primary">
          Full-Stack Engineer
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl">
          I build scalable backend systems, modern web applications, and develop AI solutions that solve real-world problems. Passionate about clean code, performance, and creating seamless digital experiences.
        </p>
        {/* Social Icons */}
        <div className="flex gap-5 mb-8">
          <a href="https://facebook.com/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
            <Facebook className="w-7 h-7" />
          </a>
          <a href="https://instagram.com/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors">
            <Instagram className="w-7 h-7" />
          </a>
          <a href="https://linkedin.com/in/itxsammad1" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="w-7 h-7" />
          </a>
          <a href="https://github.com/itxsamad1" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="w-7 h-7" />
          </a>
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a
            href="#contact"
            className={cn(
              "group relative inline-flex items-center justify-center px-8 py-4",
              "bg-primary text-primary-foreground",
              "rounded-full font-semibold text-lg shadow-lg",
              "hover:bg-primary/80 transition-all duration-300",
              "focus-ring"
            )}
          >
            Let&apos;s Connect
          </a>
          <button
            type="button"
            onClick={handleDownloadResume}
            className={cn(
              "group inline-flex items-center justify-center px-8 py-4",
              "border-2 border-primary rounded-full font-semibold text-lg text-primary",
              "hover:bg-primary hover:text-primary-foreground transition-all duration-300",
              "focus-ring"
            )}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
