"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

type ElementType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

interface SplitTextRevealProps {
    text: string;
    as?: ElementType;
    className?: string;
    delay?: number;
    stagger?: number;
    duration?: number;
}

export const SplitTextReveal = ({
                                    text,
                                    as: Tag = "p",
                                    className = "",
                                    delay = 0.2,
                                    stagger = 0.05,
                                    duration = 0.5,
                                }: SplitTextRevealProps) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-10% 0px" });

    // Split by words while keeping <strong> boundaries
    const tokens = text
        .replace(/\n/g, " ")
        .split(/(<strong>|<\/strong>|\s+)/g)
        .filter((t) => t !== "");

    let isStrong = false;
    let wordIndex = 0;

    const renderedWords = tokens.map((token, i) => {
        if (token === "<strong>") {
            isStrong = true;
            return null;
        }

        if (token === "</strong>") {
            isStrong = false;
            return null;
        }

        if (token.trim() === "") {
            return " ";
        }

        const motionSpan = (
            <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={
                    inView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                }
                transition={{
                    delay: delay + wordIndex * stagger,
                    duration,
                    ease: "easeOut",
                }}
                style={{
                    display: "inline-block",
                    marginRight: "0.25em",
                    willChange: "transform, opacity",
                }}
            >
                {token}
            </motion.span>
        );

        wordIndex++;

        return isStrong ? <strong key={`s-${i}`}>{motionSpan}</strong> : motionSpan;
    });

    return (
        <Tag ref={ref} className={className}>
            {renderedWords}
        </Tag>
    );
};
