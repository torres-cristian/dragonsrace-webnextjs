import Styles from "./Styles.module.css"

export default function Section({backgroundURL, reference}) {
    return <div ref={reference} className={Styles.section} style={{ backgroundImage: `url('/${backgroundURL}')` }}>
    </div>
}