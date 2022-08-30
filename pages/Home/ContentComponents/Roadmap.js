import { Chrono } from "react-chrono"
import ItemRoadmap from "./ItemRoadmap"
export default function Roadmap() {
    return <section id="roadmap" className="contentSection" style={{height: 'auto'}}>
        {/* <ItemRoadmap type={'left'} father={1} index={0}/>
        <ItemRoadmap type={'right'} father={2} index={1}/>
        <ItemRoadmap type={'left'} father={3} index={2}/>
        <ItemRoadmap type={'right'} father={4} index={3}/> */}
        <Chrono
            mode="VERTICAL_ALTERNATING"
            slideShow
            hideControls
            theme={{
                primary: 'white',
                secondary: '#ffcb74',
                cardBgColor: 'rgba(255,255,255,.2)',
                cardForeColor: 'black',
                titleColor: 'black',
                titleColorActive: 'red',
            }}
        >
            <div className="slide">
                {/* <img src="/images/dragons.jpeg" width={250} /> */}
                <div>
                    {/* <img src={`/images/father1.png`} width={50} /> */}
                    <h2>4Q 2022</h2>
                    <ul>
                        <li>Airdrop NFT for Race Hodlers (Collectors album giveaways).</li>
                        <li>Own marketplace on the website.</li>
                        <li>Real Dragon's Race Official Sculptures (1:6 size), for Top 4 hodlers & Top 3 rarest Hodlers.</li>
                        <li>Presale of Race token.</li>
                        <li>Listed at least in 2 decentralized exchanges.</li>
                        <li>Power orbs NFT´s marketplace.</li>
                        <li>Beta test of the game.</li>
                        <li>Dragons Meet (A live event for all our supporters and community).</li>
                    </ul>
                </div>
            </div>
            <div className="slide">
                <div>
                    {/* <img src={`/images/father1.png`} width={50} /> */}
                    <h2>1Q 2023</h2>
                    <ul>
                        <li>Dragon's Race Official Play 2 Earn game version 1.0.</li>
                        <li>Smart contract audit.</li>
                        <li>Listed at least in 3 decentralized exchanges.</li>
                        <li>Exclusive auction with artists collaborations.</li>
                        <li>Incubator (Breeding system).</li>
                        <li>Second generation NFT’s marketplace.</li>
                    </ul>
                </div>
            </div>
            <div className="slide">
                <div>
                <h2>2Q 2023</h2>
                    <ul>
                        <li>Third generation NFT’s marketplace.</li>
                        <li>Beta test Mobile app to play , Android and iOS.</li>
                        <li>Listed in an official exchange.</li>
                        <li>BetaTest of the 3D game.</li>
                        <li>Launch of BreadRace token</li>
                    </ul>
                </div>
            </div>
            <div className="slide">
                <div>
                <h2>3Q 2023</h2>
                    <ul>
                        <li>3D Official Game production.</li>
                        <li>Metaverse development & deployment.</li>
                    </ul>
                </div>
            </div>
            <div className="slide">
                <div>
                <h2>4Q 2023</h2>
                    <ul>
                        <li>First generation Christmas airdrops & giveaways.</li>
                        <li>Roadmap 2024.</li>
                    </ul>
                </div>
            </div>
            
        </Chrono>

    </section>
}