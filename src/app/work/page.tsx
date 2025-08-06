"use client";

import Nav from "@/components/Nav";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import {useEffect} from "react";
import {SplitTextReveal} from "@/components/SplitTextReveal";

const Work = () => {

    useEffect(() => {
        document.body.classList.add("dark");

        return () => {
            document.body.classList.remove("dark");
        };

    }, []);

    return (
        <PageWrapper>
            <Nav />
            <main className="work pagebasic">
                <div className="wrapper">
                    <div className="work-header">
                        <SplitTextReveal
                            text="Where My Code Came to Life."
                            as="h1"
                            delay={1.1}
                        />
                        <SplitTextReveal
                            text="A few standout projects still linger in my mind — memorable highlights among the 100+ I’ve contributed to. Whether leading solo or collaborating with top-tier teams, I’ve had the privilege of building solutions for high-caliber projects."
                            as="p"
                            delay={1.3}
                        />
                    </div>
                    <div className="work-projects">
                        <a href="https://ecseco.org/" target="_blank" className="work-projects-i">
                            <Image src="/esa.jpg" width={730} height={500} alt="ESA"/>
                            <h2>European Space Agency - ECSECO <strong>PHP, JS, WP, WC, MYSQL</strong></h2>
                        </a>
                        <a href="https://fpa.org/" target="_blank" className="work-projects-i">
                            <Image src="/fpa.jpg" width={730} height={500} alt="ESA"/>
                            <h2>Foreign Policy Association <strong>PHP, JS, WP, WC + Many others, MYSQL</strong></h2>
                        </a>
                        <a href="https://www.doriotdent.ro/" target="_blank" className="work-projects-i">
                            <Image src="/dental.jpg" width={730} height={500} alt="ESA"/>
                            <h2>DoriotDent eCommerce<strong>PHP, JS, WP, WC, MYSQL</strong></h2>
                        </a>
                        <a href="https://www.blueprintrf.com/" target="_blank" className="work-projects-i">
                            <Image src="/brf.jpg" width={730} height={500} alt="ESA"/>
                            <h2>BlueprinRF <strong>PHP, JS, WP, MYSQL</strong></h2>
                        </a>
                    </div>
                </div>
            </main>
        </PageWrapper>
    );
};

export default Work;
