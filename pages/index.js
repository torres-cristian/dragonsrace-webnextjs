import { useParallax } from "react-scroll-parallax";
import React, { useRef } from "react";
import Head from "next/head";
import Section from "./Home/Section";

export default function Home() {
    const target = useRef(null);
    const train = useParallax({
        speed: 500,
        targetElement: target.current,
    })

    const cloud = useParallax({
        speed: 200,
        targetElement: target.current,
    })

    return (
        <>
            <Head>
                <title>
                {" "}
                Play 2 Earn Dragon's Race Game | Ethereum Network | R.A.C.E. Token{" "}
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{position: "relative"}} ref={target}>
                {/* <Section backgroundURL={'Dragon_01.png'} /> */}
                <Section reference={train.ref} backgroundURL={'Dragon_02.png'} />
                <Section reference={cloud.ref} backgroundURL={'Dragon_03.png'} />
                {/* <Section backgroundURL={'Dragon_04.png'} />
                <Section backgroundURL={'Dragon_05.png'} />
                <Section backgroundURL={'Dragon_06.png'} />
                <Section backgroundURL={'Dragon_07.png'} /> */}
            </main>
        </>
    );
}
