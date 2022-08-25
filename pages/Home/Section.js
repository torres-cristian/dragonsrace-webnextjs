export default function Section({backgroundURL, reference, index}) {
    return <div className="bgLayer" style={{ backgroundImage: `url('/${backgroundURL}')`, zIndex: index }}>
    </div>
}