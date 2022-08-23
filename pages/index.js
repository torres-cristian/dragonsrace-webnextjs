
import Head from "next/head";
import Backgrounds from "./Home/Backgrounds";
import Content from "./Home/Content";
import Thunders from "./Home/ContentComponents/Thunders";

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
                <Thunders/>
                <Content />
            </main>
        </>
    );
}