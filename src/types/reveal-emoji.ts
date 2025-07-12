import { ReactNode } from "react";

export interface EmojiConfig {
  content: string | ReactNode;
  position?: {
    top?: number | string;
    right?: number | string;
    bottom?: number | string;
    left?: number | string;
  };
  rotate?: number | string;
  translateX?: number | string;
  translateY?: number | string;
}

export interface IHoverReveal {
  text: string;
  emojis?: EmojiConfig[];
}

export interface RevealDataItem {
  text: string;

  emojis?: EmojiConfig[];
}

export interface TextRevealEmojiProps {
  children: ReactNode;
  revealData?: RevealDataItem[];
  className?: string
}