import { FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export default function Menu(){
    return <nav>
        <div className="logo">
            <img src="/images/whiteLogo.png" width={170}/>
        </div>
        <div className="menu">
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
                    <FaQuestionCircle size={27}/>
                </li>
                <li>
                    <FaUserCircle size={27}/>
                </li>
                <li>
                    <BsNewspaper size={27}/>
                </li>
                <li>
                    <BiMenu size={40}/>
                </li>
            </ul>
        </div>
    </nav>
}