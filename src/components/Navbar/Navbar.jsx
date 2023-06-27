import { Link, useLocation, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const location = useLocation()

    return (
        <div className="navbar__container">
            <ul className="navbar__list">
                <li><NavLink to='/sobremi' className="navbar__item" activeclassname="active">Sobre mi</NavLink></li>
                <li><NavLink to='/portafolio' className="navbar__item" activeclassname="active">Portafolio</NavLink></li>
                <li><NavLink to='/contacto' className="navbar__item" activeclassname="active">Contacto</NavLink></li>
            </ul>
        </div>
    )
}
