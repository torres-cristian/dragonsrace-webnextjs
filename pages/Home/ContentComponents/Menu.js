import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import OptionsMenuList from "./OptionsMenuList";

export default function Menu(){
    const openMenu = (_event) => {
        _event.preventDefault()
        console.log("cerramos menu")
        let element = document.getElementById('collapsableMenu')
        element.classList.remove('inactive')
        element.classList.add('active')
    }
    return <nav>
        <div className="logo">
            <img src="/images/whiteLogo.png" width={170}/>
        </div>
        <div className="menu fullMenu">
            <OptionsMenuList/>
        </div>
        <div className="menu mobileMenu">
            <ul>
                <li onClick={ev=>openMenu(ev)}>
                    <a href="" onClick={openMenu}><BiMenu size={40}/></a>
                </li>
            </ul>
        </div>
    </nav>
}