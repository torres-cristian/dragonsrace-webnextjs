import OptionsMenuList from "./OptionsMenuList";

export default function SiteMap () {
    return <section id="sitemap" className="contentSection" style={{height:'auto'}}>
        <div className="content">
            <div className="lastOne">
                <img src="/images/crashed-logo.png" width={200} />
            </div>
            <div className="navigate">
                <div>
                    <h3>Explore</h3>
                    <OptionsMenuList/>
                </div>
                <div>
                    <h3>Official Social Media</h3>
                    <ul>
                        <li><a href='https://www.instagram.com/dragonsracenft/' target={'_blank'}>Instagram</a></li>
                        <li><a href='https://twitter.com/dragons_race' target={'_blank'}>Twitter</a></li>
                        <li><a href='https://discord.com/invite/ye5nr565Cs' target={'_blank'}>Discord</a></li>
                        <li><a href='https://www.youtube.com/channel/UCHLOzAzt1yFwPtXlF-q3kRg' target={'_blank'}>Youtube</a></li>
                        <li><a href='https://www.reddit.com/user/DragonsRace/' target={'_blank'}>Reddit</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Updates</h3>
                    <ul>
                        <li><a href='https://upcomingnft.net/register-event/?slug=dragons-race' target={'_blank'}>Join The WhiteList</a></li>
                        <li>Game Beta Test (Soon)</li>
                    </ul>
                    <h3>Contact Us</h3>
                    <p>
                        <a href="mailto:info@dragonsrace.com">info@dragonsrace.com</a>
                    </p>
                </div>
            </div>
            {/* <div className="contact">
                <div className="newsl">
                    <h3>Subscribe to newsletter</h3>
                    <div className="inputSubs">
                        <input type={'text'} placeholder="Your email, for example jhon@gmail.com" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="modes">
                    <h3>Contact Us</h3>
                    <p>
                        <a href="mailto:info@dragonsrace.com">info@dragonsrace.com</a>
                    </p>
                </div>
            </div> */}
            <div className="copyrights">
                <p>
                    Copyright 2022. All Rights reserved. Dragon's Race.
                </p>
            </div>
        </div>
    </section>
}