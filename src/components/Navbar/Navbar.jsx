import { Link, useLocation, NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    const location = useLocation()

    return (
        <div className="navbar__container">
            <ul className="navbar__list">
                <li><NavLink to='/sobremi' className="navbar__item" activeClassName="active">Sobre mi</NavLink></li>
                <li><NavLink to='/portafolio' className="navbar__item" activeClassName="active">Portafolio</NavLink></li>
                <li><NavLink to='/contacto' className="navbar__item" activeClassName="active">Contacto</NavLink></li>
            </ul>
        </div>
    )
}
