import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <Link to='/'>
                    <h1>Mano Pratimai</h1>
                </Link>
                <Link to='/newPratimas'>
                    <h1>Sukurti nauja pratima</h1>
                </Link>
                 <Link to='/login'>
                    <h1>Prisijungti</h1>
                </Link>
                 <Link to='/signup'>
                    <h1>Registracija</h1>
                </Link>
            </div>
        </header>
    )
};



export default Navbar;