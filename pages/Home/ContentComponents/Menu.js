import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export default function Menu(){
    const openMenu = () => {
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
            <ul>
                <li>
                    RuNFTers
                </li>
                <li>
                    How to play
                </li>
                <li>
                    Newsletter
                </li>
                <li>
                    Affiliates
                </li>
                <li>
                    <BsNewspaper size={27}/>
                </li>
            </ul>
        </div>
        <div className="menu mobileMenu">
            <ul>
                <li onClick={openMenu}>
                    <BiMenu size={40}/>
                </li>
            </ul>
        </div>
    </nav>
}