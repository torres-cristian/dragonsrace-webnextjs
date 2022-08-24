import Menu from "./ContentComponents/Menu"
import Presentation from "./ContentComponents/Presentation"
import Story from "./ContentComponents/Story"
import Dragons from "./ContentComponents/Dragons"
import Roadmap from "./ContentComponents/Roadmap"
import Elemental from "./ContentComponents/Elemental"
import Initial from "./ContentComponents/Initial"
import HowTo from "./ContentComponents/HowTo"
import { useEffect } from "react"
import { debounce } from "lodash";

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
    
    const disableScroll = ()=> {
        var lastScrollTop = 0;
        const windowHeight = window.innerHeight
        let lastPointer = 0;
        let skipNext = false
        console.log("el heigjt es ", windowHeight)
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        window.scrollTo(0,lastPointer)
        window.addEventListener("scroll", () => { 
            var st = window.pageYOffset || document.documentElement.scrollTop; 
            if(skipNext){
                skipNext = false
            } else {
                
                if (st > lastScrollTop){
                    console.log("scroll abajo")
                    lastPointer += windowHeight
                } else {
                    lastPointer -= windowHeight
                    console.log("scroll arriba")
                }
                skipNext = true
                window.scrollTo(0,lastPointer)
            }      
            lastScrollTop = st <= 0 ? 0 : st;       
        });
    }
    useEffect(()=>{
        disableScroll()
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