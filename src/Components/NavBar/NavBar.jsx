import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useState } from 'react';
import classNames from 'classnames';
import logo from '../../images/logo.png';
import './NavBar.css';

const NavBar = () => {
    const [navlinks] = useState([
        {
            id: 1,
            name: 'HOME',
            link: ''
        },
        {
            id: 2,
            name: 'ABOUT',
            link: ''
        },
        {
            id: 3,
            name: 'COURSE',
            link: ''
        },
        {
            id: 4,
            name: 'BLOG',
            link: ''
        },
        {
            id: 5,
            name: 'CONTACT',
            link: ''
        },
    ])

    const [isDrawerOpened, setDrawerOpened] = useState(false)

    const handleOnClick = useCallback(() => {
        setDrawerOpened(!isDrawerOpened)
    }, [isDrawerOpened])

  return (
    <nav>
        <a href='/'>
            <img src={logo} alt='logo'/>
        </a>

        <div className={classNames('nav-links', {opened: isDrawerOpened})}>
            <ul>
                <FontAwesomeIcon icon={faX} className='icon' onClick={handleOnClick}/>
                {navlinks.map((navlink) =>
                    <li key={navlink.id}>
                        <a href={navlink.link}>{navlink.name}</a>
                    </li>
                )}
            </ul>
        </div>

        <FontAwesomeIcon icon={faBars} className='icon' onClick={handleOnClick}/>
    </nav>
  )
}

export default NavBar