import { useEffect, useState } from "react"

export default function Ruler({index, children}) {
    const setActive = ()=> {
        var DOMElements = document.getElementsByClassName("ruler");
        for (const elemnt of DOMElements) {
            elemnt.classList.remove("active")
        }
        DOMElements[(index-1)].classList.add("active")
    }
    useEffect(()=>{
        if(index === 1){
            setActive()
        }
    }, [])
    return <div className="ruler" onMouseOver={setActive}>
        <img src={`/images/fatherSlide_${index}.png`} width={180} />
        <div className="details">
            <img src={`/images/father${index}.svg`} width={100} />
            <div>
                {children}
            </div>
        </div>
    </div>
}