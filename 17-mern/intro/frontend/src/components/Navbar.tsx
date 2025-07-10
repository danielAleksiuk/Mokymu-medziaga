import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {user} = useContext<any>(AuthContext);

    return (
        <header>
            <div className='container'>
                { user && (
                    <>
                        <Link to='/'>
                            <h1>Mano Pratimai</h1>
                        </Link>
                        <Link to='/newPratimas'>
                            <h1>Sukurti nauja pratima</h1>
                        </Link>
                        <h1>Logout</h1>
                    </>
                )}

                {
                    !user && (
                        <>
                            <Link to='/login'>
                                <h1>Prisijungti</h1>
                            </Link>
                            <Link to='/signup'>
                                <h1>Registracija</h1>
                            </Link>
                        </>
                    )
                }
            </div>
        </header>
    )
};



export default Navbar;