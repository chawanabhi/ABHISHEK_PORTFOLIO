import { useEffect } from 'react';
import '../App.css';
import moon from '../assets/moon.png';
import sun from '../assets/sun.png';
const LightCircle = () => {
    return (
        <div className='light-circle'></div>
    );
}
const DarkCircle = () => {
    return (
        <div className='dark-circle'></div>
    );
}
const ToggleTheme = ({theme, setTheme}) =>{
    
    const toggleTheme = () => {
        if(theme==='light')  {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }
    useEffect(()=>{
        if(theme==='light'){
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }else {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    },[theme]);
    return (
        <div className='theme-switch'>
            {theme==='light'?
            <>
                <LightCircle />
                <img onClick={toggleTheme} className='moon' style={{marginRight: '2px'}} src={moon} alt="" />
            </>:
            <>
                <img style={{marginLeft: '2px'}} onClick={toggleTheme} className='sun' src={sun} alt="" />
                <DarkCircle />
            </>
        }
        </div>
    );
}
export default ToggleTheme;