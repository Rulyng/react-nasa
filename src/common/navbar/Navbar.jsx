
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import {NavLink} from 'react-router-dom';
import './navbar.scss'
const Navbar = () => {

    const [openNav, setOpenNav] = useState(false)
    return (
        <div className='navbar'>
            <div className="container navbar__container">
                <ul className={
                    openNav ? ["navbar__items", "navbar__active"].join(" ") : 
                    ["navbar__items"]}
                    >
                    <li className='navbar__item'>
                        <NavLink to='/' >HOME</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to='/apod' >APOD</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to='/rover' >MARS ROVER</NavLink>
                    </li>
                    <li className='navbar__item'>
                        <NavLink to='/nasa-image' >NASA IMAGE</NavLink>
                    </li>
                </ul>
                <div className="navbar__mobile-btn" onClick={()=> setOpenNav(!openNav)}>
                
                 {openNav ? <FontAwesomeIcon icon={faXmark} className="navbar__mobile-close" /> : <FontAwesomeIcon  icon={faBars} className="navbar__mobile-menu" />}
                </div>
               
               
                
            </div>
        </div>
    );
}

export default Navbar;
