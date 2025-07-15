"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Twitter, Instagram, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Contact() {
  return (
    <section
      id="contact"
      className={cn("w-full flex flex-col items-center justify-center py-20 px-4 sm:px-10 relative isolate",
        'before:absolute before:inset-0 before:bg-radial before:from-transparent before:to-background before:-z-[1]'
      )}
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-center bg-background rounded-lg"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In <span className="text-primary">Touch</span>
      </motion.h2>

      <motion.div
        className="flex flex-col items-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-muted-foreground text-center max-w-prose bg-background rounded-lg">
          I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="mailto:paldi0013@gmail.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-none bg-background border">
              <Mail className="size-4 mr-2" /> Email Me
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/muhamad-rinaldi-agus-pratama-a21b61295" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-none bg-background border">
              <Linkedin className="size-4 mr-2" /> LinkedIn
            </Button>
          </Link>
          <Link href="https://github.com/aldiipratama" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-none bg-background border">
              <Github className="size-4 mr-2" /> GitHub
            </Button>
          </Link>
          <Link href="https://x.com/paldi07" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-none bg-background border">
              <Twitter className="size-4 mr-2" /> Twitter
            </Button>
          </Link>
          <Link href="https://instagram.com/alx.dyy" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="cursor-none bg-background border">
              <Instagram className="size-4 mr-2" /> Instagram
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
