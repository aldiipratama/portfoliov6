import { cn } from "@/lib/utils";
import { IHoverReveal, RevealDataItem, TextRevealEmojiProps } from "@/types/reveal-emoji";
import { Children, CSSProperties, Fragment } from "react";

export default function TextRevealEmoji({
  children,
  revealData = [],
  className
}: TextRevealEmojiProps) {
  if (revealData.length === 0) {
    return <p className={cn(
      "text-lg",
      className
    )}>{children}</p>;
  }

  const revealMap = revealData.reduce((map, item) => {
    map.set(item.text, item);
    return map;
  }, new Map<string, RevealDataItem>());

  const pattern = `(${[...revealMap.keys()].map(str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`;
  const regex = new RegExp(pattern, 'g');

  return <p className={cn("text-lg", className)}>
    {
      Children.map(children, (child) => {
        if (typeof child === 'string') {
          const parts = child.split(regex).filter(Boolean);

          return parts.map((part, index) => {
            if (revealMap.has(part)) {
              const revealItem = revealMap.get(part)!;

              return (
                <HoverReveal
                  key={`${part}-${index}`}
                  text={part}
                  emojis={revealItem.emojis}
                />
              );
            }
            return <Fragment key={index}>{part}</Fragment>;
          });
        }
        return child;
      })
    }
  </p>;
}

export function HoverReveal({ text, emojis = [] }: IHoverReveal) {
  return (
    <span className="relative group underline decoration-yellow-500 decoration-wavy hover:text-primary transition-colors duration-300">
      {emojis.map((emojiConfig, index) => {
        const { content, position = {}, rotate, translateX, translateY } = emojiConfig;

        const styleVars = {
          ...position,
          '--tw-rotate': rotate ? `${rotate}deg` : '0deg',
          '--tw-translate-x': translateX ? (typeof translateX === 'string' ? translateX : `${translateX}px`) : '0px',
          '--tw-translate-y': translateY ? (typeof translateY === 'string' ? translateY : `${translateY}px`) : '0px',
        } as CSSProperties

        return (
          <span
            key={index}
            className="absolute opacity-0 group-hover:opacity-100 group-hover:scale-110 scale-75 transition-all duration-300 text-2xl pointer-events-none"
            style={styleVars}
          >
            {content}
          </span>
        );
      })}
      {text}
    </span>
  );
}