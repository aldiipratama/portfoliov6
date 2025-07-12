'use client'

import { useMediaQuery } from "@uidotdev/usehooks";
import BottomBar from "./bottombar";
import Navbar from "./navbar";
import MinimalDotNav from "./navigation-dot";

export default function Header() {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  return isDesktop ? (
    <>
      <Navbar />
      <MinimalDotNav />
    </>
  ) : (
    <BottomBar />
  )
}