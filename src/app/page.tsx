'use client'

import Footer from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import About from "@/components/sections/about";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
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
  );
}
