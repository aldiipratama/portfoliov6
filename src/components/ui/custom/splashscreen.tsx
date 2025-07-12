"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { DyyLogo } from "./dyy-logo"

interface SplashScreenProps {
  onComplete: () => void // Callback when splash screen animation is fully done
  children: React.ReactNode
}

export default function SplashScreen({ onComplete, children }: SplashScreenProps) {
  const [logoFaded, setLogoFaded] = useState(false)
  const [wipeStarted, setWipeStarted] = useState(false)
  const [splashFinished, setSplashFinished] = useState(false) // Controls when children are rendered

  // Step 3: Wipe animation completes
  const handleWipeComplete = () => {
    setSplashFinished(true)
    onComplete() // Notify parent component
  }

  useEffect(() => {
    // Logo dianggap "drawn" segera setelah komponen dimuat untuk memulai pulse
    // Durasi tampilan logo sebelum memudar dan wipe dimulai
    const logoDisplayTimer = setTimeout(() => {
      setLogoFaded(true)
      setWipeStarted(true)
    }, 2500) // Tampilkan logo berdenyut selama 2.5 detik

    return () => clearTimeout(logoDisplayTimer)
  }, []) // Jalankan hanya sekali saat mount

  return (
    <>
      <AnimatePresence>
        {!splashFinished && (
          <motion.div
            key="splash-screen-container"
            className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
          // The exit animation for the container will be handled by the wipe columns
          // We don't need an explicit exit on this div if the columns cover and then move away
          >
            {/* Logo section */}
            <motion.div
              className="absolute z-10"
              initial={{ opacity: 1 }}
              animate={{ opacity: logoFaded ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <DyyLogo />
            </motion.div>

            {/* Wipe columns */}
            {wipeStarted && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-gray-200" // Left column
                  initial={{ y: "0%" }}
                  animate={{ y: "-100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  onAnimationComplete={handleWipeComplete} // Only one column needs to trigger completion
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-1/2 h-full bg-gray-300" // Right column
                  initial={{ y: "0%" }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {splashFinished && children}
    </>
  )
}
