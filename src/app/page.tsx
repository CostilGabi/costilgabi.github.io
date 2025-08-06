"use client";

import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import ArrowUpRight from "@/resources/svgs/ArrowUpRight";
import {useTransitionRouter} from "next-view-transitions";
import {SplitTextReveal} from "@/components/SplitTextReveal";

export default function Home() {
    const router = useTransitionRouter();

    return (
        <PageWrapper>
            <Nav />
            <main className="homepage">
                <div className="wrapper">
                    <div className="homepage-upper">
                        <SplitTextReveal
                            text="Full Stack Developer"
                            as="h1"
                            className="title"
                            delay={1.1}
                        />
                        <Image src="/ureallyreadmyphotoname.jpg" width={750} height={322} alt={"Gabi"} />
                    </div>
                    <div className="homepage-lower">
                        <Link
                            href="/about"
                            onClick={(e) => {
                                e.preventDefault();
                                router.push("/about", {
                                    onTransitionReady: pageAnimation,
                                });
                            }}
                        >
                            <ArrowUpRight />
                            <span>See More</span>
                        </Link>
                        <SplitTextReveal
                            text="Based in Arad, RO. Currently Senior Developer at WPRiders."
                            as="h2"
                            className="location"
                            delay={1.4}
                        />
                        <SplitTextReveal
                            text="Costil Gabriel"
                            as="h2"
                            className="title-massive"
                            delay={1.5}
                        />
                    </div>
                </div>
            </main>
        </PageWrapper>
    );
}

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
