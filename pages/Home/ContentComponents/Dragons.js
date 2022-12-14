import Slider from "./SliderDragons";

export default function Dragons() {
    return <section id="dragons" className="contentSection">
        <div className="content">
            <div className="details">
                <h2>10k Randomly Generated<br/>nft dragons</h2>
                <h3>Dragons are in the top of the food chain in Millenia</h3>
                <p>
                    Discover your dragon by minting trough our web. There are up to 10,000 posible combination of unique dragons.
                </p>
                <p>
                    Are you gonna gold the rarest or you will become dragon merchant on the secondary markets. The rarity systems classifies the dragons among 4 main groups: Common, Rare, Epic and Legendary. Each category has its own benefits like more energy to participate in more races or extra power runes.
                </p>
                <div className="mintDate">
                    <div className="fatherIcons">
                        <img src="/images/father1.png" />
                        <img src="/images/father2.png" />
                        <img src="/images/father3.png" />
                        <img src="/images/father4.png" />
                    </div>
                    <div className="calendar">
                        <div className="widget">
                            <span className="day">COMING</span>
                            <span className="year">SOON</span>
                        </div>
                        {/* que te lleve al discord */}
                        <a className="btnWhite" href="https://discord.gg/NuCGS6gtuA" target="_blank">JOIN US</a>
                    </div>
                </div>
            </div>
            <div className="slider">
                <Slider/>
            </div>
        </div>
        
    </section>
}