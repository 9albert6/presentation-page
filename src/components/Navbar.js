import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        JP <i className="fab fa-typo3"/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#video' className='nav-links' onClick={closeMobileMenu}>
                                Video
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#historia' className='nav-links' onClick={closeMobileMenu}>
                                Historia
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link smooth to='#obsada' className='nav-links' onClick={closeMobileMenu}>
                                Obsada
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
