import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps } from "react";

export default function SplitText({ children }: ComponentProps<'p'>) {
  const text = children?.toString().split(' ')

  return (
    <AnimatePresence>
      <p
        className="text-2xl font-bold shadow-sm space-x-1"
      >
        {
          text?.map((t, i) => (
            <motion.span
              key={i}
              className="inline-block"
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