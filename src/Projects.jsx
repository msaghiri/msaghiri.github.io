import DecorationLine from "./DecorationLine";


//Project -- name, description, skills, source code url, live demo url

function ProjectsCard({project}){
    return(
        <div className="content project-card">
            <h1 className="content project-title">{project.name}</h1>
            <p className="content project-description">{project.description}</p>
            <ul className="skills">
                {project.skills.map((skill, index) => {
                    return <li key={index} className="skill-tag">{skill}</li>
                })}
            </ul>
            <div className="project-links-container">
                <a className="content project-link" href={project.url} target="_blank">Github Repo</a>
                <a className="content project-link" href={project.liveDemo} target="_blank">Live Demo</a>
            </div>
        </div>
    );
}


function Projects({projectsRef}){
    return(
        <div className="background-color-header background-projects" ref={projectsRef}>
            <div className="projects-section section glass">
                <DecorationLine/>
                <div className="content project-cards-container">
                    <ProjectsCard project = {{
                        name: "Sleep Score",
                        description: "A machine learning web app that predicts sleep quality using a custom NumPy linear regression model trained on real-world data, with a React interface for user predictions.",
                        skills: ["Python", "NumPy", "React", "Machine Learning"],
                        url: "https://github.com/msaghiri/SleepScore",
                        liveDemo: "https://msaghiri.github.io/SleepScore/"
                    }}/>
                    <ProjectsCard project = {{
                        name: "Quantum Leap",
                        description: "A fun and challenging endless platformer game built in the Godot game engine and published on the itch.io website.",
                        skills: ["Godot", "Game Development", "UI/UX Design", "GDScript"],
                        url: "https://github.com/msaghiri/Quantum-Leap",
                        liveDemo: "https://gamii.itch.io/quantum-leap"
                    }}/>
                </div>
            </div>
        </div>
    );
}

export default Projects