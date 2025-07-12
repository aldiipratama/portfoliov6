'use client'

import BottomBar from "./bottombar";
import Navbar from "./navbar";
import MinimalDotNav from "./navigation-dot";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mediaQuery = matchMedia('(min-width: 640px)')
    const handleResize = () => {
      setIsDesktop(mediaQuery.matches);
    };

    handleResize();

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, [])

  return isDesktop ? (
    <>
      <Navbar />
      <MinimalDotNav />
    </>
  ) : (
    <BottomBar />
  )
}