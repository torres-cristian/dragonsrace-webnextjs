import Menu from "./ContentComponents/Menu"
import Presentation from "./ContentComponents/Presentation"
import Story from "./ContentComponents/Story"
import Dragons from "./ContentComponents/Dragons"
import Roadmap from "./ContentComponents/Roadmap"
import Elemental from "./ContentComponents/Elemental"
import Initial from "./ContentComponents/Initial"
import HowTo from "./ContentComponents/HowTo"
import { useEffect } from "react"

export default function Content() {
    function reveal() {
        var reveals = document.querySelectorAll(".contentSection");
        console.log("el reveals es ", reveals)
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = elementTop - windowHeight;
            console.log("el alto de la venta", windowHeight, "ELEMENT TOP", elementTop)
            if (elementTop < 200) {
                reveals[i].classList.add("active");
                console.log("le pongo activo ___>>>")
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll", reveal);
    }, [])
    return <div className="content" id="mainContent">
        <div className="allSections">
            <Menu/>
            <Initial/>
            <Presentation/>
            <Story/>
            <Dragons/>
            <Roadmap/>
            <Elemental/>
            <HowTo/>
        </div>
    </div>
}