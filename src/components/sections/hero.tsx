'use client'

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ReactCircularText from "react-circular-text";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function Hero() {
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

  return (
    <section className={cn("flex flex-col items-center justify-center w-full text-center px-4 relative isolate gap-4",
      'before:absolute before:inset-0 before:bg-radial before:from-transparent before:to-background before:-z-[1] min-h-screen'
    )} id="home">
      <div className="grid place-items-center gap-2">
        <motion.div
          initial={{
            translateY: isDesktop ? -150 : -50
          }}
          animate={{
            translateY: 0,
          }}
          transition={{
            duration: .5,
            delay: .4
          }}
          viewport={{ once: false }}
        >
          <Avatar className="size-20 shadow-sm border-2">
            <AvatarImage src={'/images/avatar.png'} alt="aldiipratama avatar" className="object-cover" />
            <AvatarFallback>AP</AvatarFallback>
          </Avatar>
        </motion.div>
        <motion.p
          initial={{
            y: -100,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              delay: .3,
              duration: .6,
              ease: 'easeInOut'
            }
          }}
        >Hi i&apos;m Muhamad Rinaldi Agus Pratama</motion.p>
      </div>
      <div className="grid place-items-center">
        <motion.p
          className={"text-2xl md:text-6xl relative font-bold w-max px-1"}
          initial={{
            scale: 0,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1,
            transition: {
              delay: .3,
              duration: .6,
              ease: 'anticipate'
            }
          }}
        >
          <span className='inline-block bg-primary w-full h-10 rounded-sm top-1/2 -translate-y-1/2 left-0 absolute -skew-y-2 -z-[1]'></span>
          Frontend Developer
        </motion.p>
        <motion.p
          className="text-xs mt-2"
          initial={{
            opacity: 0,
            y: 100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: .3,
            ease: 'easeIn'
          }}
        >
          I create bridges between humans and technology through responsive interfaces, using React, Next.js, and Tailwind CSS.
        </motion.p>
      </div>
      <div className="flex gap-2">
        <motion.div
          initial={{
            opacity: 0,
            x: -100
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: .6,
              duration: .3,
              ease: 'easeInOut'
            }
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: .1,
              delay: 0
            }
          }}
        >
          <Link href={'mailto:paldi0013@gmail.com'} target={'_blank'}>
            <Button className="uppercase mt-4" variant={'outline'} size={'lg'}>
              Connect With Me
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: .6,
              duration: .3,
              ease: 'easeInOut'
            }
          }}
          whileHover={{
            scale: 1.05,
            transition: {
              duration: .1,
              delay: 0
            }
          }}
        >
          <Link href={'https://drive.google.com/file/d/1qaRdHf4z34r8yy6Yrx53Cq0vbNXppnkH/view?usp=sharing'} target={'_blank'}>
            <Button className="uppercase mt-4" size={'lg'}>
              Download CV
            </Button>
          </Link>
        </motion.div>
      </div>
      <div className="grid grid-cols-12 items-center justify-center gap-4 place-items-center sm:gap-20">
        <Link href={'https://instagram.com/alx.dyy'} className="col-span-6" target="_blank">
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
        <Link href={'https://linkedin.com/in/muhamad-rinaldi-agus-pratama-a21b61295'} className="w-max col-span-6" target="_blank">
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
          <Link href={'mailto:paldi0013@gmail.com'} target="_blank">
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
          <Link href={'https://x.com/paldi07'} target="_blank">
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