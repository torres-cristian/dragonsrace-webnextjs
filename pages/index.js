import React from "react";
import Head from "next/head";
import Backgrounds from "./Home/Backgrounds";
import Content from "./Home/Content";

export default function Home() {

    return (
        <>
            <Head>
                <title>
                {" "}
                Play 2 Earn Dragon's Race Game | Ethereum Network | R.A.C.E. Token{" "}
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main style={{position: "relative"}}>
                <Backgrounds/>
                <Content />
            </main>
        </>
    );
}
