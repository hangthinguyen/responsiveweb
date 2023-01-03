import { useState } from 'react';
import logo from '../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
    const [navlinks] = useState([
        {
            id: 1,
            name: 'Home',
            link: ''
        },
        {
            id: 2,
            name: 'About',
            link: ''
        },
        {
            id: 3,
            name: 'Course',
            link: ''
        },
        {
            id: 4,
            name: 'Blog',
            link: ''
        },
        {
            id: 5,
            name: 'Contact',
            link: ''
        },
    ])

  return (
    <nav>
        <a href='index.html'>
            <img src={logo} alt='logo'/>
        </a>
        <div className="nav-links">
            <ul>
                {navlinks.map((navlink) =>
                    <li key={navlink.id}>
                        <a href={navlink.link}>{navlink.name}</a>
                    </li>
                )}
            </ul>
        </div>
    </nav>
  )
}

export default NavBar