import ScrollDown from "./InitialComponents/ScrollDown";

export default function Initial() {
    return <section id="welcome" className="contentSection">
        <img src="/images/crashed-logo.png" width={700} />
        <ScrollDown/>
    </section>
}