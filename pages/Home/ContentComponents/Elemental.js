import Ruler from "./Ruler"

export default function Elemental() {
    return <section id="rulers" className="contentSection">
        <h2>The four elemental<br/>rulers airdrops</h2>
        <div className="rulersGrid">
            <Ruler index={1}>
                <h3>Gaeus Pater</h3>
                <p>
                    The Father of all dragons landed on the highest mountain on earth from
                    where he ruled with an iron claw for millennia. He is the oldest and wisest of the 4 fathers.
                    His main attribute is his strength and endurance.
                </p>
            </Ruler>
            <Ruler index={2}>
                <h3>Fla 'Mah</h3>
                <p>
                    Arised from the fire of a volcano, she embodies fury and anger. She gave
                    shelter to those who worshiped as Goddess and scorching death to her detractors. She
                    represents power.
                </p>
            </Ruler>
            <Ruler index={3}>
                <h3>Breezalmüth</h3>
                <p>
                    The fastest dragon with unparalleled agility. She likes to spend most of her
                    time flying over the earth. She is the most benevolent and represents the element air.
                </p>
            </Ruler>
            <Ruler index={4}>
                <h3>Liqüo</h3>
                <p>
                    He is the largest of all the dragons that have ever existed. He made seas and
                    oceans his abode where he remains oblivious to what happens in the outside world. He
                    maintains balance and his element is water.
                </p>
            </Ruler>
        </div>
    </section>
}