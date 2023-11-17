import '../App.css';
import ToggleTheme from './ToggleTheme';
import menuLight from "../assets/menu-light.png";
import menu from '../assets/menu.png';
import cross from '../assets/cross.png';
import crossLight from '../assets/cross-light.png';
import { Link, useLocation} from 'react-router-dom';

import { useState } from 'react';

const Header = ({menuExpanded, setMenuExpanded}) => {
    const selectedTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(()=>{return selectedTheme || 'dark'});
    const handleMenuIcon = () => {
        setMenuExpanded(!menuExpanded);
    }
    const location = useLocation();
    const pathName=location.pathname;
    return (
        <div className='header'>
            <h1 className='heading'><Link style={{color:'inherit', textDecoration: 'none'}} to="/">Chawan Raju abhishek</Link></h1>
            <nav className='navbar'>
                <ToggleTheme theme={theme} setTheme={setTheme} />
                <li><Link style={pathName==='/'?{color: '#0EA5E9'}:{}} className='links' to="/">Home</Link></li>
                <li><Link style={pathName==='/about'?{color: '#0EA5E9'}:{}} className='links' to="/about">About</Link></li>
                {/* <li><Link style={pathName==='/projects'?{color: '#0EA5E9'}:{}} className='links' to="/projects">Projects</Link></li> */}
                <li><Link style={pathName==='/contact'?{color: '#0EA5E9'}:{}} className='links' to="/contact">Contact</Link></li>
                <li className='menuIcon'>{
                    menuExpanded? <img onClick={handleMenuIcon} src={theme==='light'?cross: crossLight} alt="" />  :
                     <img onClick={handleMenuIcon} src={theme==='light'? menu: menuLight} alt="" />
                }</li>
            </nav>
        </div>
    );
}
export default Header;