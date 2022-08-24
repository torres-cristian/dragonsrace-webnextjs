import { useState } from "react"

export default function Ruler({index, children}) {
    return <div className="ruler" onMouseOver={e=>{
        var DOMElements = document.getElementsByClassName("ruler");
        console.log("los elementos son", DOMElements )
        for (const elemnt of DOMElements) {
            elemnt.classList.remove("active")
        }
        DOMElements[index].classList.add("active")
        //DOMElement.classList.remove("animatedImg")
    }}>
        <img src={`/images/fatherSlide_${index}.png`} width={180} />
        <div className="details">
            <img src={`/images/father${index}.png`} width={80} />
            <div>
                {children}
            </div>
        </div>
    </div>
}