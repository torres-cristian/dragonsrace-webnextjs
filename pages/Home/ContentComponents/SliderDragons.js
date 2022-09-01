import React, { useState } from "react";

const images = [
    "/images/nft/dragon9.png",
    "/images/nft/dragon1.png",
    "/images/nft/dragon2.png",
    "/images/nft/dragon3.png",
    "/images/nft/dragon4.png",
    "/images/nft/dragon6.png",
    "/images/nft/dragon7.png",
    "/images/nft/dragon8.png",
];

export default function SliderDragons() {
    const [index, setIndex] = useState(0)
    const [visible, setVisible] = useState(true)

    const changeImage = (_index) => {
        var DOMElement = document.getElementById("currentSliderImage");
        DOMElement.classList.remove("animatedImg")

        setIndex(_index)
        setVisible(false)
    }
    return <div id="slider">
        <img id="currentSliderImage" className="animatedImg" src={images[index]} style={visible ? {} : { visibility: 'hidden' }} onLoad={()=>{
            var DOMElement = document.getElementById("currentSliderImage");
            DOMElement.classList.add("animatedImg")
            setVisible(true)
        }} /> 
        <div className="dots">
            {images.map((data, indice)=><span 
                className={indice===index ? 'active' : ''}
                onClick={()=>changeImage(indice)}
            ></span>)}
        </div>
    </div>
}