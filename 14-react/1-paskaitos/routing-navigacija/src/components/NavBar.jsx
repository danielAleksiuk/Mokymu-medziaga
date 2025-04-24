import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <div  className="navbar">
                <h1>Mano puslapis</h1>
                <nav>
                    <ul className="links">
                        <li><NavLink to='/'>Pradzia</NavLink></li>
                        <li><NavLink to='/about'>Apie mus</NavLink></li>
                        <li><NavLink to='/contacts'>Kontaktai</NavLink></li>
                    </ul>
                </nav>
            </div>
            <hr/>
        </>
     
    )
};

export default NavBar;