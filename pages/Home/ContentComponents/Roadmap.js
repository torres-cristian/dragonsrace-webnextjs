import { Chrono } from "react-chrono"
import ItemRoadmap from "./ItemRoadmap"
export default function Roadmap() {
    return <section id="roadmap">
        {/* <ItemRoadmap type={'left'} father={1} index={0}/>
        <ItemRoadmap type={'right'} father={2} index={1}/>
        <ItemRoadmap type={'left'} father={3} index={2}/>
        <ItemRoadmap type={'right'} father={4} index={3}/> */}
        <Chrono
            mode="VERTICAL_ALTERNATING"
            hideControls
            slideShow
            theme={{
                primary: 'white',
                secondary: 'yellow',
                cardBgColor: 'transparent',
                cardForeColor: 'black',
                titleColor: 'black',
                titleColorActive: 'red',
            }}
        >
            <div className="slide">
                <img src="/images/dragons.jpeg" width={250} />
                <div>
                    <img src={`/images/father1.png`} width={50} /><br/>
                    World the dragons nested and positioned themselves at the top of the food chain.
                </div>
            </div>
            <div className="slide">
                <img src="/images/dragons.jpeg" width={250} />
                World the dragons nested and positioned themselves at the top of the food chain.
            </div>
            <div className="slide">
                <img src="/images/dragons.jpeg" width={250} />
                World the dragons nested and positioned themselves at the top of the food chain.
            </div>
            
        </Chrono>

    </section>
}