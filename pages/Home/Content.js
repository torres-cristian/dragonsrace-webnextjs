import Menu from "./ContentComponents/Menu"
import Presentation from "./ContentComponents/Presentation"
import Story from "./ContentComponents/Story"
import Dragons from "./ContentComponents/Dragons"
import Roadmap from "./ContentComponents/Roadmap"
import Elemental from "./ContentComponents/Elemental"
import Initial from "./ContentComponents/Initial"
import HowTo from "./ContentComponents/HowTo"
import { useEffect, useState } from "react"
import { debounce } from "lodash";
import Video from "./ContentComponents/Video"
import SiteMap from "./ContentComponents/SiteMap"
import CollapsableMenu from "./ContentComponents/CollapsableMenu"
import Thunders from "./ContentComponents/Thunders"

export default function Content() {
    const [lastPointer, setLastPointer] = useState(0)

    const reveal = () => {
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
    
    const disableScroll = ()=> {
        //window.addEventListener("scroll", reveal);
        var reveals = document.querySelectorAll(".contentSection");

        for (var i = 0; i < reveals.length; i++) {
            reveals[i].classList.add("active");
        }
    }
    useEffect(()=>{
        disableScroll()
    }, [])
    return <div className="content" id="mainContent">
        <div className="bg">
            <Thunders/>
            <div className="allSections">
                <Menu/>
                <Initial/>
                <Presentation/>
                <Story/>
                <Dragons/>
                <Roadmap/>
                <Elemental/>
                <HowTo/>
                <Video/>
                <CollapsableMenu/>
            </div>
        </div>
        <footer>
            <SiteMap/>
        </footer>
    </div>
}