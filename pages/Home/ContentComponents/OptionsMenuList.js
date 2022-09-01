
export default function OptionsMenuList(){
    const closeMenu = () => {
        console.log("cerramos menu")
        let element = document.getElementById('collapsableMenu')
        element.classList.remove('active')
        element.classList.add('inactive')
    }
    const clickHandler = (_e, _id) => {
        _e.preventDefault();
        closeMenu()
        const offsetTop = document.querySelector(_id).offsetTop;
       
        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }
    return <ul>
        <li>
            <a href="" onClick={e=>clickHandler(e, '#presentation')}>Home</a>
        </li>
        <li>
            <a href="" onClick={e=>clickHandler(e, '#story')}>About</a>
        </li>
        <li>
            <a href="" onClick={e=>clickHandler(e, '#roadmap')}>Roadmap</a>
        </li>
        <li>
            <a href="" onClick={e=>clickHandler(e, '#dragons')}>The Dragons</a>
        </li>
        <li>
            <a href="" onClick={e=>clickHandler(e, '#howto')}>How to Play</a>
        </li>
        <li>
            <a href='https://whitepaper.dragonsrace.com' target={'_blank'}>Whitepaper</a>
        </li>
    </ul>
}