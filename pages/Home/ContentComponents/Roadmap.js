import ItemRoadmap from "./ItemRoadmap"
export default function Roadmap() {
    return <section id="roadmap">
        <ItemRoadmap type={'left'} father={1} index={0}/>
        <ItemRoadmap type={'right'} father={2} index={1}/>
        <ItemRoadmap type={'left'} father={3} index={2}/>
        <ItemRoadmap type={'right'} father={4} index={3}/>
    </section>
}