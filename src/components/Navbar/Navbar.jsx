import React, {useState} from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {

    const [navlinksOpen, navlinksClose] = useState (false);
        const handleNavLinksToggle = () => {
            navlinksClose(!navlinksOpen)
        };
    const desplegarMenu = () => {
        let menu="navlinks ";
        if (navlinksOpen){
            menu+="active";
        }
        return menu
    }
    return (
        <>
           <nav>
            <a className="logo" href="/">
            </a>
            <ul className={desplegarMenu()}>
                <li className="link"> <Link to="/home"> Home</Link> </li>
                <li className="link"><Link to="/quienes_somos"><div>Quienes</div><div>&nbsp;somos</div></Link></li>
                <li className="link"><Link to="/contacto">Contacto</Link></li>
                <li className="link"><Link to="/ayuda">Ayuda</Link></li>
            </ul>
            <div onClick={handleNavLinksToggle} className="barra">
                <i className="fas fa-bars fa-2x"></i>
            </div>
           </nav> 
        </>
    )
}