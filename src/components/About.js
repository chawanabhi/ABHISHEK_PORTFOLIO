import './About.css';

const IconBox = ({url,name}) =>{
    return (
        <div className='iconBox'>
            <img src={url} alt="" />
            <p>{name}</p>
        </div>
    );
}

const About = () => {
    const skills = [
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
            name: 'React'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
            name: 'Typescript'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
            name: 'Java'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
            name: 'Spring boot'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
            name: 'Javascript'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
            name: 'Redux'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
            name: 'Html'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
            name: 'Css'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg',
            name: 'Mui'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
            name: 'Tailwind CSS'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
            name: 'Jest'
        },
        {
            url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
            name: 'Git'
        },

    ];
    return (
        <div className='aboutContainer'>
            <div>
                <h1 className='headText'>About me</h1>
                <p className='about'>Hi there! My name is Chawan Raju Abhishek, and I have trained on Java Full Stack Developer.
                    Apart from that you will see me working with Java. I have great interest in building robust backend systems.
                    Currently pursuing my MCA. I'm always eager to learn and work with
                    new technologies. I'm excited to continue learning and growing in my field.
                </p>
            </div>
            <h2 className='headText'>Education</h2>
            <div>
                <div className='Education' >
                    
                    <div className='horLine' ></div>
                    <div>
                    <h3>Shanthi Nekithan High School </h3>
                    <p>Secondary Education Telangana. </p>
                    <div class="year"><i class='bx bxs-calendar'></i> 2004- 2016</div>
                     </div>
                    
                </div>
                
                </div>
            <div>
            <div className='Education' >
                    
                    <div className='horLine' ></div>
                    <div>
                    <h3>Intermidate - Narayana jr College Tarnaka</h3>
                    <p>MPC</p>
                        <p>Telangana State Board of Intermediate Education</p>
                        <div class="year"><i class='bx bxs-calendar'></i> 2016 - 2018</div>
                     </div>
                    
                </div>
                <div className='Education' >
                    
                    <div className='horLine' ></div>
                    <div>
                    <h3>Graduation -
                        Nrupatunga 
                        degree college 
                    </h3>
                    <p>B.sc(cs) </p>
                    <p> Osmania University </p>
                    <div class="year"><i class='bx bxs-calendar'></i> 2018 - 2021</div>
                     </div>
                    
                </div>
                
                </div>
                 <div className='Education' >
                    
                    <div className='horLine' ></div>
                    <div>
                    <h3>Post Graduation - AURORA'S MCA COLLEGE NAMPALLY
                    </h3>
                    <p>MCA</p>
                    <p> Osmania University</p>
                    <div class="year"><i class='bx bxs-calendar'></i>2023 (pursuing) </div>
                    
                     </div>
                    
                </div>
            <h2 className='headText' >Skills</h2>
            <div className='skillContainer'>
                {
                    skills.map((skill)=>{
                        return <IconBox key={skill.url} url={skill.url} name={skill.name} />
                    })
                }
            </div>
        </div>
    );
}

export default About;