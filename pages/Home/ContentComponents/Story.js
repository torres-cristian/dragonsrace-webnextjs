import React, { Component, useState } from "react"

export default function Story() {
    const [active, setActive] = useState('The World')

    return <section id="story">
        <div className="buttons">
            <Clickable label={'The World'} active={active} setActive={setActive}/>
            <Clickable label={'The Dragons'} active={active} setActive={setActive}/>
            <Clickable label={'The Race'} active={active} setActive={setActive}/>
        </div>
        {active === 'The World' ? <TheWorld/> : active === 'The Dragons' ? <TheDragons/> : <TheRace/> }
    </section>
}

function Clickable({label, active, setActive}) {
    return <span 
        className={active === label ? "active" : ""}
        onClick={ev=>setActive(label)}
    >{label}</span> 
}

const TheWorld = () => {
    return <div className="details">
        <div className="featured" style={{background: "url(/images/Millenia.jpeg)"}}></div>
        <div className="text">
            <h3>Millenia, the world where it all began...</h3>
            <p>
                Millenia is a mythological world where the dragons descended thousands of years ago, causing chaos and destruction to the civilizations that lived there.
            </p>
            <p>
                It is a planet of exhuberant beauty very similar to Earth, but with one pecualiarity: in this world the dragons nested and positioned themselves at the top of the food chain.
            </p>
            <p>
                For years these creatures shared the world subjecting all races to their domain. However, their era is about to end.
            </p>
            <a className="btn rounded">See More...</a>
        </div>
    </div>
}

const TheDragons = () => {
    return <div className="details">
        <div className="featured" style={{background: "url(/images/dragons.jpeg)"}}></div>
        <div className="text">
            <h3>Winged rulers of chaos</h3>
            <p>
                The first dragons to descend to the land of Millenia are called the Ancient Dragons. This four Elemental Rulers are the parents of all the rest of the draconic brood in the world, they
                are the purest and most majestic of their entire race.
            </p>
            <p>
                Each elemental father is associated with an element of nature: Earth, Fire, Air and Water.
            </p>
            <p>
                In dragons race there are 5 kinds of rarity (common, uncommon, rare, epic and legendary) each one depends on the purity of the bloodline and the features that NFT have. 
            </p>
            <a className="btn rounded">See More...</a>
        </div>
    </div>
}
const TheRace = () => {
    return <div className="details">
        <div className="featured" style={{background: "url(/images/races.jpeg)"}}></div>
        <div className="text">
            <h3>
                The Most deadly race on the metaverse
            </h3>
            <p>
                Dragons’s Race is the first racing NFT game in which you will earn utility tokens just for holding,  playing and winning against opponents from all over the world. 
            </p>
            <p>
                The first rule is you must own at least one of the 10 thousand NFT’s of the collection. 
            </p>
            <p>
                The second rule is that you must assign your dragon a power rune with a cryptocurrency sign, this sign will boost the power and speed of your dragon as the crypto market flows in real time.
            </p>
            <a className="btn rounded">See More...</a>
        </div>
    </div>
}