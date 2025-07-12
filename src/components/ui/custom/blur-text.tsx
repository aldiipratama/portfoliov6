import { AnimatePresence, motion } from "framer-motion";
import { ComponentProps, memo } from "react";

export default memo(function BlurText({ children }: ComponentProps<'p'>) {
  const text = children?.toString().split(' ')

  return (
    <AnimatePresence>
      <p className="space-x-1 shadow-sm">
        {
          text?.map((t, i) => (
            <motion.span
              key={i}
              initial={{
                translateY: -50,
                // filter: 'blur(10px)',
                opacity: 0
              }}
              animate={{
                translateY: 0,
                filter: ['blur(10px)', 'blur(0px)'],
                opacity: 1
              }}
              transition={{
                delay: i * .3 + .1,
                duration: .2
              }}
              className="inline-block"
            >
              {t}
            </motion.span>
          ))
        }
      </p>
    </AnimatePresence>
  )
})