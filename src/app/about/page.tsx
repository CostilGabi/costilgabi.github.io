"use client";

import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import {useEffect} from "react";
import {AnimatedWordsFadeIn} from "@/components/AnimatedWordsFadeIn";
import {SplitTextReveal} from "@/components/SplitTextReveal";
import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";

const About = () => {

    const router = useTransitionRouter();

    useEffect(() => {
        document.body.classList.add("dark");

        return () => {
            document.body.classList.remove("dark");
        };

    }, []);

    return (
        <PageWrapper>
            <Nav />
            <main className="about pagebasic">
                <div className="wrapper">
                    <SplitTextReveal
                        text="I specialise in creating <strong>stories on a web page.</strong>"
                        as="h1"
                        delay={1.1}
                    />
                    <div className="about-main">
                        <div className="about-main-left">
                            <Image src="/letswork.jpg" width={860} height={770} alt="me"/>
                            <div className="about-main-left-sm">
                                <a className="btn" href="mailto:gabicostildev@gmail.com">
                                    <SplitTextReveal
                                        text="Email me"
                                        as="span"
                                        delay={1.3}
                                    />
                                </a>
                                <a className="btn" href="https://www.linkedin.com/in/costil-gabriel-3b959819a/" target="_blank" rel="noopener">
                                    <SplitTextReveal
                                        text="LinkedIn"
                                        as="span"
                                        delay={1.5}
                                    />
                                </a>
                                <a className="btn" href="https://github.com/CostilGabi" target="_blank" rel="noopener">
                                    <SplitTextReveal
                                        text="GitHub"
                                        as="span"
                                        delay={1.7}
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="about-main-right">
                            <AnimatedWordsFadeIn
                                wordDelay={0.007}
                                text="I wrote my first line of code at 16...<br><br>A dozen years later, that same curiosity still drives me. I don’t just build websites — I engineer solutions that solve real business problems. From architecting full-stack systems to blending frontend flair with backend logic, I bring a deep understanding of both tech and purpose.<br><br>What sets me apart isn’t just code — it’s my mindset. I treat each project like a puzzle: part logic, part creativity, part strategy. I adapt fast, think beyond the box (and the city), and obsess over the <strong>why</strong> before the <strong>how.</strong><br><br>Because in the end, I’m here to deliver impact — not just features.<br><br>Currently writing my first book, a designer wannabe, and learning new technologies."
                                className="desc"
                            />
                            <div className="about-main-right-companies">
                                <AnimatedWordsFadeIn
                                    wordDelay={0.1}
                                    text="Places I Made the Web Better:"
                                    className="title"
                                />
                                <div className="about-main-right-companies-list">
                                    <div className="about-main-right-companies-list-i">
                                        <p>2023 - Current</p>
                                        <div className="about-main-right-companies-list-i-info">
                                            <span>California, USA [Remote]</span>
                                            <h3>Full Stack Developer at <a href="https://wpriders.com" target="_blank" rel="noopener">WPRiders</a> </h3>
                                        </div>
                                    </div>
                                    <div className="about-main-right-companies-list-i">
                                        <p>2023</p>
                                        <div className="about-main-right-companies-list-i-info">
                                            <span>Georgia, USA [Remote]</span>
                                            <h3>Lead Full Stack Developer at <a href="https://www.stonesouptech.com/" target="_blank" rel="noopener">StoneSoup Tech</a> </h3>
                                        </div>
                                    </div>
                                    <div className="about-main-right-companies-list-i">
                                        <p>2018 - 2023</p>
                                        <div className="about-main-right-companies-list-i-info">
                                            <span>Arad, Romania [Hybrid]</span>
                                            <h3>Lead Full Stack Developer at <a href="https://www.rainfall.ro/" target="_blank" rel="noopener">Rainfall</a> </h3>
                                        </div>
                                    </div>
                                    <div className="about-main-right-companies-list-i">
                                        <p>2016 - 2018</p>
                                        <div className="about-main-right-companies-list-i-info">
                                            <span>Arad, Romania [Remote]</span>
                                            <h3>Front-end Freelance</h3>
                                        </div>
                                    </div>
                                </div>
                                <Link
                                    href="/work"
                                    className="btn white last"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        router.push("/work", {
                                            onTransitionReady: pageAnimation,
                                        });
                                    }}
                                >
                                    My Work
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </PageWrapper>
    );
};

const pageAnimation = () => {
    document.documentElement.animate(
        [
            {
                opacity: 1,
                scale: 1,
                transform: "translateY(0)",
            },
            {
                opacity: 0.5,
                scale: 0.9,
                transform: "translateY(-100px)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-old(root)",
        }
    );

    document.documentElement.animate(
        [
            {
                transform: "translateY(100%)",
            },
            {
                transform: "translateY(0)",
            },
        ],
        {
            duration: 1000,
            easing: "cubic-bezier(0.76, 0, 0.24, 1)",
            fill: "forwards",
            pseudoElement: "::view-transition-new(root)",
        }
    );
};

export default About;
