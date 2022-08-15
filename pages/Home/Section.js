export default function Section({backgroundURL, reference, index}) {
    return <div className="section" style={{ backgroundImage: `url('/${backgroundURL}')`, zIndex: index }}>
    </div>
}