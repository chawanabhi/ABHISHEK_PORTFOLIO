import { Link, useLocation} from 'react-router-dom';
import '../App.css';
const Menu = ({setMenuExpanded}) =>{
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <nav className="menuList">
            <li><Link style={pathname==='/'?{color: '#0EA5E9'}:{}} onClick={()=>setMenuExpanded(false)} className='links' to="/">Home</Link></li>
            <li><Link style={pathname==='/about'?{color: '#0EA5E9'}:{}} onClick={()=>setMenuExpanded(false)} className='links' to="/about">About</Link></li>
            <li><Link style={pathname==='/projects'?{color: '#0EA5E9'}:{}} onClick={()=>setMenuExpanded(false)} className='links' to="/projects">Projects</Link></li>
            <li><Link style={pathname==='/contact'?{color: '#0EA5E9'}:{}} onClick={()=>setMenuExpanded(false)} className='links' to="/contact">Contact</Link></li>
            <li><div className='horizontalLine'></div></li>
        </nav>
    );
}

export default Menu;