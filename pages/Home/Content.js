import Menu from "./ContentComponents/Menu"
import Presentation from "./ContentComponents/Presentation"
import Story from "./ContentComponents/Story"
import Dragons from "./ContentComponents/Dragons"
import Roadmap from "./ContentComponents/Roadmap"
import Elemental from "./ContentComponents/Elemental"
import Initial from "./ContentComponents/Initial"

export default function Content() {
    return <div className="content">
        <div>
            <Menu/>
            <Initial/>
            <Presentation/>
            <Story/>
            <Dragons/>
            <Roadmap/>
            <Elemental/>
        </div>
    </div>
}