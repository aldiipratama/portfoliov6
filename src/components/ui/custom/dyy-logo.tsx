"use client"

import { motion } from "framer-motion"

export function DyyLogo() {

  return (
    <motion.p
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY, // Animasi berulang terus-menerus
        repeatType: "mirror",
      }}
      className="text-8xl"
    >
      <span className="text-primary font-extrabold">{'{'}</span>
      <span>{'Dyy'}</span>
      <span className="text-primary font-extrabold">{'}'}</span>
    </motion.p>
  )
}
