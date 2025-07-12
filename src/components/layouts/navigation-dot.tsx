'use client'

import { navbarItems } from "@/data/navbar-items";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { AspectRatio } from "../ui/aspect-ratio";
import Image from "next/image";

export default function DotNavigation() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      let currentSection = 'home'

      const sectionPositions = navbarItems.map(item => {
        const el = document.getElementById(item.link)
        if (el) {
          return {
            id: item.link,
            offsetTop: el.offsetTop,
            offsetBottom: el.offsetTop + el.offsetHeight
          }
        }
        return null
      }).filter(Boolean)

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i]
        if (section && scrollPosition >= section.offsetTop - 200) {
          currentSection = section.id
          break
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-1">
        {navbarItems.map((item, idx) => (
          <div key={idx} className="relative group/dot">
            <HoverCard>
              <HoverCardTrigger>
                <Button
                  onClick={() => scrollToSection(item.link)}
                  className="relative size-[1px] rounded-full cursor-none bg-transparent transition-all duration-300 group hover:scale-100"
                >
                  <motion.div
                    className="absolute inset-1 rounded-full bg-primary"
                    animate={{
                      scale: activeSection === item.link ? 1 : 0.5,
                      opacity: activeSection === item.link ? 1 : 0.6
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </HoverCardTrigger>
              <HoverCardContent side="left" sideOffset={20}>
                <div className="absolute inset-y-[calc(50%-4px)] -right-2 size-4 rotate-45 bg-popover border-t border-r" />
                <AspectRatio ratio={16 / 9} className="z-10" asChild>
                  <Image src={`/images/previews/${item.link}.png`} fill alt={item.label} />
                </AspectRatio>
              </HoverCardContent>
            </HoverCard>
          </div>
        ))}
      </div>
    </div>
  )
}