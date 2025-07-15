'use client'

import { RevealDataItem } from "@/types/reveal-emoji";
import { motion } from 'framer-motion';
import { Code2, Quote } from "lucide-react";
import TextRevealEmoji from "../ui/custom/text-hover-reveal-emoji";
import { IconCloud } from "../ui/magic/icon-cloud";
import { cn } from "@/lib/utils";

const revealData: RevealDataItem[] = [
  {
    text: 'Hello!',
    emojis: [
      {
        content: '👋',
        position: {
          top: -30,
          left: -10
        },
      },
      {
        content: '🙋‍♂️',
        position: {
          top: -30,
          right: -20
        }
      },
      {
        content: '🙆‍♂️',
        position: {
          right: -35,
          bottom: -20
        }
      },
      {
        content: '✌',
        position: {
          bottom: -30,
          left: 0
        }
      }
    ]
  },
  {
    text: 'Muhamad Rinaldi Agus Pratama',
    emojis: [
      {
        content: '🧑',
        position: {
          top: -35,
          left: 50
        }
      },
      {
        content: '👨‍🎓',
        position: {
          top: -40,
          left: '45%',
        },
        translateX: '-50%'
      },
      {
        content: '🙌',
        position: {
          top: -35,
          right: 50
        }
      }
    ]
  },
  {
    text: 'Aldi',
    emojis: [
      {
        content: '🧏‍♂️',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: '🕺',
        position: {
          top: -35,
          left: '50%'
        }
      },
      {
        content: '😎',
        position: {
          top: -10,
          right: -45
        }
      }
    ]
  },
  {
    text: 'fell in love',
    emojis: [
      {
        content: '❤',
        position: {
          top: -20,
          left: -20
        }
      },
      {
        content: '😍',
        position: {
          bottom: -30,
          left: -30
        }
      },
      {
        content: '🥰',
        position: {
          top: -30,
          right: -30
        }
      },
      {
        content: '🌹',
        position: {
          bottom: -30,
          right: -30
        }
      }
    ]
  },
  {
    text: 'lines of code',
    emojis: [
      {
        content: '💻',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: '👨‍💻',
        position: {
          bottom: -40,
          left: '40%'
        },
      },
      {
        content: <Code2 size={24} key={'icon-code'} className="bg-background rounded-2xl" />,
        position: {
          top: -15,
          right: -30
        }
      }
    ]
  },
  {
    text: 'see and use',
    emojis: [
      {
        content: '👀',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: <span className="bg-background rounded-2xl">🖱</span>,
        position: {
          bottom: -30,
          left: -30
        }
      },
      {
        content: <span className="bg-background rounded-2xl">👁</span>,
        position: {
          top: -30,
          right: -30
        }
      },
      {
        content: '👁‍🗨',
        position: {
          bottom: -30,
          right: -30
        }
      }
    ]
  },
  {
    text: 'efficient solutions',
    emojis: [
      {
        content: '💡',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: '✨',
        position: {
          bottom: -35,
          left: '45%'
        }
      },
      {
        content: '🎉',
        position: {
          top: -30,
          right: -30
        }
      }
    ]
  },
  {
    text: 'Next.js ecosystem',
    emojis: [
      {
        content: '🚀',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: '⚫',
        position: {
          top: -35,
          left: '45%'
        }
      },
      {
        content: <span className="bg-background rounded-2xl">⚒</span>,
        position: {
          top: -30,
          right: -30
        }
      }
    ]
  },
  {
    text: 'Tailwind CSS',
    emojis: [
      {
        content: '💨',
        position: {
          top: -25,
          left: -30
        }
      },
      {
        content: '🎨',
        position: {
          top: -30,
          left: '40%'
        }
      },
      {
        content: '🎭',
        position: {
          top: -25,
          right: -30
        }
      }
    ]
  },
  {
    text: 'lightning speed',
    emojis: [
      {
        content: '⚡',
        position: {
          top: -30,
          left: -30
        }
      },
      {
        content: <span className="bg-background rounded-2xl">🌩</span>,
        position: {
          bottom: -30,
          left: '45%'
        }
      },
      {
        content: <span className="bg-background rounded-2xl">🌫</span>,
        position: {
          top: -30,
          right: -30
        }
      }
    ]
  }
]

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "figma",
  "laravel",
  "php"
];

export default function About() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <section id='about' className={cn("w-full flex max-sm:flex-col justify-center items-center px-10 relative isolate",
      'before:absolute before:inset-0 before:bg-radial before:from-transparent before:to-background before:-z-[1]'
    )}>
      <div className="flex items-center justify-center max-sm:order-2">
        <motion.div
          initial={{
            opacity: 0,
            translateX: -200
          }}
          whileInView={{
            opacity: 1,
            translateX: 0
          }}
          viewport={{ once: true }}
        >
          <TextRevealEmoji revealData={revealData} className={`sm:w-xl text-justify relative max-sm:text-sm bg-background`}>
            <Quote size={24} className="absolute -top-5 -left-5" />
            Hello! I&apos;m Muhamad Rinaldi Agus Pratama, my nickname is Aldi. Ever since I first wrote <span className="inline-block px-2 py-1 bg-foreground text-background w-max rounded-2xl me-1">console.log(&apos;Hello World!&apos;)</span>, I fell in love with the process of turning lines of code into something that people can see and use. For me, frontend development is not just about aesthetics, but about creating efficient solutions. I specialize in the Next.js ecosystem and Tailwind CSS to build web applications that perform at lightning speed.
          </TextRevealEmoji>
        </motion.div>
      </div>
      <div className="flex items-center justify-center max-sm:order-1 max-sm:pt-20">
        <motion.div
          initial={{
            opacity: 0,
            translateX: 200
          }}
          whileInView={{
            opacity: 1,
            translateX: 0
          }}
          viewport={{ once: true }}
        >
          <IconCloud images={images} />
        </motion.div>
      </div>
    </section>
  )
}