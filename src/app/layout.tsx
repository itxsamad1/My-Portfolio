import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Samad | Full-Stack Engineer & AI Developer",
  description: "Backend Engineer, AI/ML Developer, Frontend Enthusiast, and DevOps specialist. Building scalable systems and modern applications with cutting-edge technology.",
  keywords: ["Backend Engineer", "AI/ML Developer", "Full-Stack", "DevOps", "React", "Node.js", "Python", "Portfolio"],
  authors: [{ name: "Abdul Samad" }],
  creator: "Abdul Samad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Abdul Samad | Full-Stack Engineer & AI Developer",
    description: "Backend Engineer, AI/ML Developer, Frontend Enthusiast, and DevOps specialist.",
    siteName: "Abdul Samad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Samad | Full-Stack Engineer & AI Developer",
    description: "Backend Engineer, AI/ML Developer, Frontend Enthusiast, and DevOps specialist.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background text-foreground">
            <Navbar />
            <main className="pt-20">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
