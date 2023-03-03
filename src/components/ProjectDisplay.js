import TechnologyUsed from "./TechnologyUsed"

const ProjectDisplay = (props) => {
    return(

 
    <div className="projects-container">
            <div className="project-container">
                <img className="project-image" src={props.img}></img>
                <div className="project-info-container">
                <h2 className="project-name">{props.title}</h2>
                <p className="project-description">{props.desc}</p>
                <div className="tech-container">
                    
                    <TechnologyUsed tech={props.tech}/>

                </div>
                <div className="project-buttons">
                    <a href={props.demo} target="_blank" className="live-demo ">Live Demo<i class="fa-solid fa-arrow-up-right-from-square"></i> </a>
                    <a href={props.github} target="_blank" className="view-source">View Source<i class="fa-brands fa-github fa-lg"></i> </a>
        
                </div>
                
                </div>
                

            </div>

        </div>
           )
}


export default ProjectDisplay