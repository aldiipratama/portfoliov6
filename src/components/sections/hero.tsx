'use client'

import { useMediaQuery } from "@uidotdev/usehooks";
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import ReactCircularText from "react-circular-text";
import { ReactTyped } from 'react-typed';
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import BlurText from "../ui/custom/blur-text";
import SplitText from "../ui/custom/split-text";

export default function Hero() {
  const isDesktop = useMediaQuery('(min-width: 640px)')

  return (
    <section className="flex flex-col gap-4 items-center justify-center w-full text-center sm:pt-10 px-4 h-screen snap-start max-sm:pb-20" id="home">
      <div className="grid place-items-center">
        <motion.div
          initial={{
            translateY: isDesktop ? -150 : -50
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            duration: .5
          }}
          viewport={{ once: false }}
        >
          <Avatar className="size-24 shadow-sm border-2">
            <AvatarImage src={'/images/avatar.png'} alt="aldiipratama avatar" className="object-cover" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </motion.div>
        <BlurText>Hi i&apos;m Muhamad Rinaldi Agus Pratama</BlurText>
      </div>
      <div className="grid">
        <SplitText>Not Just a Look.</SplitText>
        <motion.p
          className="text-xs shadow-sm"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: .3,
            ease: 'easeIn'
          }}
        >
          <ReactTyped strings={['I create bridges between humans and technology through responsive interfaces, using React, Next.js, and Tailwind CSS.']} typeSpeed={20} />
        </motion.p>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 1.5
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          delay: .3,
          duration: .3,
          ease: 'easeInOut'
        }}
      >
        <Link href={'mailto:paldi0013@gmail.com'} target={'_blank'}>
          <Button className="uppercase cursor-none">
            Connect With Me
          </Button>
        </Link>
      </motion.div>
      <div className="grid grid-cols-12 items-center justify-center gap-4 place-items-center sm:gap-20">
        <Link href={'https://instagram.com/alx.dyy'} className="col-span-6 cursor-none" target="_blank">
          <motion.div
            className="bg-orange-500 size-32 rounded-full flex items-center col-span-6 justify-center"
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: .3,
              duration: .5,
              ease: 'circInOut'
            }}
          >
            <ReactCircularText
              text="Instagram • Instagram • Instagram •"
              baselineRatio={0.01}
              bandColor="transparent"
              speedSecs={7}
              fontSize={12}
            >
              <Instagram size={40} />
            </ReactCircularText>
          </motion.div>
        </Link>
        <Link href={'https://linkedin.com/in/muhamad-rinaldi-agus-pratama-a21b61295'} className="w-max col-span-6 cursor-none" target="_blank">
          <motion.div
            className="bg-sky-500 size-32 rounded-full flex items-center justify-center"
            initial={{
              x: 1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              delay: .3,
              duration: .5,
              ease: 'circInOut'
            }}
          >
            <ReactCircularText
              text="Linkedin • Linkedin • Linkedin •"
              baselineRatio={0.01}
              bandColor="transparent"
              speedSecs={7}
              fontSize={12}
            >
              <Linkedin size={40} />
            </ReactCircularText>
          </motion.div>
        </Link>
        <div className="flex gap-10 col-span-12 sm:-mt-40">
          <Link href={'mailto:paldi0013@gmail.com'} target="_blank" className="cursor-none">
            <motion.div
              className="bg-green-500 size-32 rounded-full flex items-center justify-center col-span-12"
              initial={{
                x: -1000,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: .6,
                duration: .5,
                ease: 'circInOut'
              }}
            >
              <ReactCircularText
                text="Email • Email • Email •"
                baselineRatio={0.01}
                bandColor="transparent"
                speedSecs={7}
                fontSize={12}
              >
                <Mail size={40} />
              </ReactCircularText>
            </motion.div>
          </Link>
          <Link href={'https://x.com/paldi07'} target="_blank" className="cursor-none">
            <motion.div
              className="bg-blue-500 size-32 rounded-full flex items-center justify-center col-span-12"
              initial={{
                x: 1000,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                delay: .6,
                duration: .5,
                ease: 'circInOut'
              }}
            >
              <ReactCircularText
                text="Twitter • Twitter • Twitter •"
                baselineRatio={0.01}
                bandColor="transparent"
                speedSecs={7}
                fontSize={12}
              >
                <Twitter size={40} />
              </ReactCircularText>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  )
}