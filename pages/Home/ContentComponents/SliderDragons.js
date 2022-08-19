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
    return <div id="slider">
        <img src={images[index]} />
        <div className="dots">
            {images.map((data, indice)=><span 
                className={indice===index ? 'active' : ''}
                onClick={()=>setIndex(indice)}
            ></span>)}
        </div>
    </div>
}