import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { Images } from "lucide-react";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
  display: "swap",
});

export const metadata = {
  title: "Hossam Elsahafy | Full Stack Developer Portfolio",
  description:
    "Portfolio of Hossam Elsahafy – Full Stack Developer skilled in React, Next.js, Node.js, and more. Explore my projects and experience.",
  keywords: [
    "hossam",
    "hossam elsahafy",
    "Hossam Elsahafy",
    "حسام",
    "حسام الصحفي",
    "الصحفي",
    "elsahafy",
    "full stack developer",
    "frontend developer",
    "backend developer",
    "hossam elsahafy full stack",
    "hossam elsahafy portfolio",
  ],
  openGraph: {
    title: "Hossam Elsahafy | Full Stack Developer",
    description:
      "Explore Hossam Elsahafy's personal portfolio – skilled in React, Next.js, Node.js, and more.",
    url: "https://hossam-portfolio-ruby.vercel.app",
    type: "website",
    Images: [
      {
        url: "https://hossam-portfolio-ruby.vercel.app/me.jpg",
        alt: "Hossam Elsahafy",
      },
    ],
  },
  icons: {
    icon: "/ff.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="Uf9zxYW8OpykE0fBK-__MsDMxq7ZmhBm0M2zCQ3CTrA"
        />
        <meta
          property="og:image"
          content="https://hossam-portfolio-ruby.vercel.app/ff.ico"
        />

        <link rel="icon" href="/ff.ico" type="image/x-icon" />

        <title>Hossam Elsahafy | Full Stack Developer Portfolio</title>
      </head>
      <body className={`${JetbrainsMono.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
