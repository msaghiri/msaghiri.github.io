import DecorationLine from "./DecorationLine";
import { useAnimate } from "motion/react";
import {useEffect} from "react";
import {motion} from 'motion/react'
import icons from './assets/Icons.jsx'


function TopBar(){
    return(
        <div className="content top-bar">
            <a target="_blank" href="https://github.com/msaghiri" className="top-bar-item">{icons.github} <span className="top-bar-label">Github</span></a>
            <a target="_blank" href="https://www.linkedin.com/in/mahmood-alsaghiri-8687bb326/" className="top-bar-item">{icons.linkedin} <span className="top-bar-label">Linkedin</span></a>
            <a target="_blank" href="mailto:mahmoodalsaghiri@gmail.com" className="top-bar-item">{icons.email} <span className="top-bar-label">Email</span></a>
            <a target="_blank" href="/resume.pdf" className="top-bar-item">{icons.document} <span className="top-bar-label">Resume</span></a>
        </div>
    );
}

function Chevron(){
    return(
        <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            className="bi bi-chevron-down" 
            viewBox="0 0 16 16"
            initial={{y: 0}}
            animate={{y: [0, 6, 0]}}
            transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            >
    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
        </motion.svg>
    );
}

function Header({aboutRef}){

    const handleScroll = () => {
        aboutRef.current?.scrollIntoView({behavior: "smooth"});
    }

    const [scope, animate] = useAnimate();

    useEffect(() => {
        animate(scope.current, {opacity: 1}, {duration: 2.3}, {ease: 'easeInOut'});
    }, [animate, scope]);


    return (
        <div className="background-color-header">
            <header className="header-section section glass">
                <DecorationLine className="line"/>
                <TopBar/>
                <h1 className="regular large content" ref={scope}>Hi, I'm Moe!</h1>
                <button className="content" onClick={handleScroll}>Get to know me</button>
                <Chevron className="down-chevron content"/>
            </header>
        </div>
    );
}

export default Header