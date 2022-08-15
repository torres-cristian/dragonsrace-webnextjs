export default function ItemRoadmap({type, father, index}) {
    return <div className="item" style={{marginLeft: (index * 250)+'px'}}>
        {type === "left" && <Father index={father}/>}
        <div className="detail">
            <img src="/images/Millenia.jpeg" width={250}/>
            <p>
                World of the dragons nested and positioned themselves at the top of food chain.
            </p>
        </div>
        {type === "right" && <Father index={father}/>}
    </div>
}

const Father = ({index}) => {
    return <div>
    <img src={`/images/father${index}.png`} width={50}/>
</div>
}