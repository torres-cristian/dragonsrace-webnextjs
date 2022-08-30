export default function SiteMap () {
    return <section id="sitemap" className="contentSection">
        <div className="content">
            <div className="navigate">
                <div>
                    <h3>Official Social Media</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Discord</li>
                        <li>Youtube</li>
                        <li>Reddit</li>
                    </ul>
                </div>
                <div>
                    <h3>Explore</h3>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Roadmap</li>
                        <li>The Dragons</li>
                        <li>How To Play</li>
                    </ul>
                </div>
                <div>
                    <h3>Updates</h3>
                    <ul>
                        <li>WhitePaper</li>
                        <li>Join The WhiteList</li>
                        <li>Game Beta Test</li>
                    </ul>
                </div>
            </div>
            <div className="contact">
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
            </div>
            <div className="copyrights">
                <p>
                    Copyright 2022. All Rights reserved. Dragon's Race.
                </p>
            </div>
        </div>
    </section>
}