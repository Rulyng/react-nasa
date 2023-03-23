import {NavLink} from 'react-router-dom';
import './navbar.scss'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container navbar__container">
                <ul className='navbar__items'>
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
            </div>
        </div>
    );
}

export default Navbar;
