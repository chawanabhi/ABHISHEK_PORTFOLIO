import dp from '../assets/cross-light.png'
import { Link } from 'react-router-dom';
import resume from '../assets/Abhishek-java-Resume.pdf';
const Body = () => {
    return (
      <div className="bodyContainer">
        <div>
          <div className="welcome">Welcome to my portfolio</div>
          <h1 className="mainHeading">
            Hi👋, I'm   <span className='heading'>Chawan Raju Abhishek</span>
            <br />
            <span className='title'>Fresher Java Full Stack Developer</span>
            <br />
            <span className='nextLine'>Passionate about building scalable web applications</span>
          </h1>
          <div className='btns'>
          <a href={resume} target='_blank' rel="noreferrer">
            <button style={{ marginRight: "16px" }} className="primary-btn">
              View Resume
            </button>
            </a>
            <button className="secondary-btn"><Link style={{color:'inherit', textDecoration: 'none'}} to="/contact">Connect</Link></button>
          </div>
        </div>
        <img className="dp" src={dp} alt="" />
      </div>
    );
}

export default Body;