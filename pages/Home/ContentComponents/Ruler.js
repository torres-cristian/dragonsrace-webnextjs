export default function Ruler({index, children}) {
    return <div className="ruler">
        <img src={`/images/fatherSlide_${index}.png`} width={180} />
        <div className="details">
            <img src={`/images/father${index}.png`} width={80} />
            <div>
                {children}
            </div>
        </div>
    </div>
}