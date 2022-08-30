import {CgCloseO} from "react-icons/cg"

export default function CollapsableMenu() {
    const closeMenu = () => {
        console.log("cerramos menu")
        let element = document.getElementById('collapsableMenu')
        element.classList.remove('active')
        element.classList.add('inactive')
    }
    return <div id="collapsableMenu">
        <div className="content">
            <h3>Main Menu <CgCloseO onClick={closeMenu}/></h3>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Roadmap</li>
                <li>The Dragons</li>
                <li>How To Play</li>
            </ul>
        </div>
    </div>
}