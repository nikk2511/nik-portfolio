import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Nikhil Singh - Full-Stack Developer",
  description: "Computer Science undergraduate and full-stack developer specializing in building scalable web applications with modern technologies.",
  keywords: ["Nikhil Singh", "Full-Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Nikhil Singh" }],
  openGraph: {
    title: "Nikhil Singh - Full-Stack Developer",
    description: "Computer Science undergraduate and full-stack developer specializing in building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
