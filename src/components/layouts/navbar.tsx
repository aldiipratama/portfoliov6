'use client'

import { navbarItems } from "@/data/navbar-items";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../ui/navigation-menu";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY < 100) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={cn("w-full fixed shadow-sm top-0 px-5 z-10 transition duration-500", showNavbar ? 'opacity-100' : 'opacity-0')}>
      <NavigationMenu>
        <NavigationMenuList className="w-screen justify-between px-5 py-4">
          <NavigationMenuItem>
            <NavigationMenuLink href="/" className={cn(buttonVariants({ variant: 'link' }), 'flex-row gap-0 hover:no-underline hover:text-foreground hover:bg-transparent')}>
              <span className="text-primary font-extrabold text-xl">{'{'}</span>
              <span className="text-foreground hover:underline">Dyy</span>
              <span className="text-primary font-extrabold text-xl">{'}'}</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <div className="flex relative gap-2">
            {
              navbarItems.map((item, idx) => (
                <NavigationMenuItem key={idx} className="relative">
                  <NavigationMenuLink
                    href={`#${item.link}`}
                    className={cn(
                      buttonVariants({ variant: 'link' }),
                      'text-foreground relative z-10 transition-colors duration-200 hover:bg-transparent hover:text-primary hover:font-bold',
                      item.link === 'home' ? 'text-primary font-bold' : ''
                    )}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))
            }
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}