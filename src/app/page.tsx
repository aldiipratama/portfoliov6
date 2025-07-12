'use client'

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import SplashScreen from "@/components/ui/custom/splashscreen";
import { useState } from "react";

export default function Home() {
  const [showMainContent, setShowMainContent] = useState(false)

  return (
    <SplashScreen onComplete={() => setShowMainContent(true)}>
      {
        showMainContent && (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )
      }
    </SplashScreen>
  );
}
