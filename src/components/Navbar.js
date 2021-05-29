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
                    <a href={window.location.origin} className="navbar-logo">
                        JP <i className="fab fa-typo3"/>
                    </a>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times': 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <a href={window.location.origin} className="nav-links">
                            Home
                        </a>
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
                            <Link smooth to='#tworcy' className='nav-links' onClick={closeMobileMenu}>
                                Twórcy
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
