import DecorationLine from './DecorationLine.jsx';
import icons from './assets/Icons.jsx'
import { useAnimate} from 'motion/react';
import { useEffect } from 'react';


function AboutMe(){
    return(
        <div className="content about-me-section">
            <h1 className="who-am-i content">Who am I?</h1>
            <p className="summary content">I am Mahmood &mdash; a second-year student at Rutgers University with a passion for <strong>machine learning</strong> and <strong>web development.</strong></p>
        </div>
    );
}

function SkillsSection(){
    return(
        <div className="content skills-section">
            <h1 className="regular">My skills:</h1>
            <div className="skills-card-container">
                <div className="content skill-row">
                    {icons.java}
                    {icons.python}
                    {icons.react}
                </div>
                <div className="content skill-row">
                    {icons.numpy}
                    {icons.tensorflow}
                </div>
            </div>
        </div>
    );
}



function About({references}){

    const handleScroll = () => {
        console.log('Button clicked!');
        console.log(references.projectsRef);
        console.log(references.projectsRef.current);
        references.projectsRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const [scope, animate] = useAnimate();

    return(
        <div className="background-color-header-inverted">
            <div className="about-section section glass" ref={references.aboutRef}>
                <DecorationLine className="line-inverted"/>
                <div className="about-content">
                    <AboutMe/>
                    <div className="row-2-container">
                        <SkillsSection/>
                        <button className="content" onClick={handleScroll}>See my projects</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;