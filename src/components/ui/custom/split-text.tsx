import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps } from "react";

export default function SplitText({ children, className }: ComponentProps<'p'>) {
  const text = children?.toString().split(' ')

  return (
    <AnimatePresence>
      <p
        className={cn("text-2xl font-bold shadow-sm", className)}
      >
        {
          text?.map((t, i) => (
            <motion.span
              key={i}
              className="inline-block px-1 bg-background"
              initial={{
                opacity: 0,
                translateY: 10
              }}
              animate={{
                opacity: 1,
                translateY: 0
              }}
              transition={{
                delay: i * .3 + .1,
                ease: [.47, -0.01, .52, -1.62],
              }}
            >
              {t}
            </motion.span>
          ))
        }
      </p>
    </AnimatePresence>
  )
}