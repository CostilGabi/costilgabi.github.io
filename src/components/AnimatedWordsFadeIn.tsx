"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";

interface AnimatedWordsFadeInProps {
    text: string;
    className?: string;
    wordDelay?: number;
}

export const AnimatedWordsFadeIn = ({
                                        text,
                                        className = "",
                                        wordDelay = 0.03,
                                    }: AnimatedWordsFadeInProps) => {
    const ref = useRef(null);
    const { scrollYProgress, scrollY } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 0);
    });

    const tokens = text
        .replace(/\n/g, " ")
        .split(/(<br\s*\/?>|\s+|<strong>|<\/strong>)/gi)
        .filter((t) => t !== "");

    let isBold = false;
    let wordIndex = 0;


    const renderedWords = tokens.map((token, idx) => {
        const lower = token.toLowerCase();

        if (lower === "<strong>") {
            isBold = true;
            return null;
        }

        if (lower === "</strong>") {
            isBold = false;
            return null;
        }

        if (lower === "<br>" || lower === "</br>") {
            return <br key={`br-${idx}`} />;
        }

        if (token.trim() === "") return token;

        const start = wordIndex * wordDelay;
        const end = start + wordDelay;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const dynamicOpacity = useTransform(scrollYProgress, [start, end], [0.5, 1]);

        const opacity = scrolled ? dynamicOpacity : 0.5;

        wordIndex++;

        return (
            <motion.span
                key={idx}
                style={{
                    display: "inline-block",
                    marginRight: "0.25em",
                    opacity,
                    fontWeight: isBold ? "bold" : "normal",
                }}
            >
                {token}
            </motion.span>
        );
    });

    return (
        <p ref={ref} className={className}>
            {renderedWords}
        </p>
    );
};
