import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
const ProjectCard = (props) => {
    const { projectTitle, projectDescription, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, gitLink, deployLink, projectImg, key } = props
    return (
        <>
            <div key={key} className="projects-container">
                <div className="container-in">
                    <div className="project-img">
                        <img src={projectImg} alt="" />
                    </div>
                    <div className="project-content">
                        <div className="content-in">
                            <div className="project-overline">Featured Project</div>
                            <div className="project-title"><h3>{projectTitle}</h3></div>
                            <div className="project-description"><p>{projectDescription}</p></div>
                            <ul className='tech-list'>
                                <li>{tech1}</li>
                                <li>{tech2}</li>
                                <li>{tech3}</li>
                                <li>{tech4}</li>
                                <li>{tech5}</li>
                                <li>{tech6}</li>
                                <li>{tech7}</li>
                                <li>{tech8}</li>
                            </ul>
                            <div className={`project-links`}>
                                <span>
                                    <a href={gitLink}><GitHubIcon /></a>
                                </span>
                                <span>
                                    <a href={deployLink}><OpenInNewIcon /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default ProjectCard;

