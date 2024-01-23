import { ProjectCard, Reveal } from "../components";
import "../App.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/animationType";
import { transition } from "../utils/transition";
import projectsData from "../projectsData";

const Projects = () => {

    const projectsTemp = projectsData.map((data) => {
        return (
            <ProjectCard key={data.id}
                projectTitle={data.title}
                projectDescription={data.brief}
                tech1={data.techStack.tech1}
                tech2={data.techStack.tech2}
                tech3={data.techStack.tech3}
                tech4={data.techStack.tech4}
                tech5={data.techStack.tech5}
                tech6={data.techStack.tech6}
                tech7={data.techStack.tech7}
                tech8={data.techStack.tech8}
                gitLink={data.projectLinks.sourceCode}
                deployLink={data.projectLinks.deployment}
                projectImg={data.img}


            />
        )
    })

    return (
        <div
            id="projects"
            className="min-h-screen relative"
        >
            <div className="max-w-screen-2xl w-full py-16 px-12 mx-auto">
                <div className="flex-1 flex flex-col gap-4">
                    <Reveal>
                        <h2
                            className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
                        >
                            My recent <span className="text-secondary"> projects</span>
                        </h2>
                    </Reveal>

                    <motion.div
                        variants={fadeIn("up")}
                        transition={transition()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="flex gap-12 mt-12 flex-wrap justify-center"
                    >
                        <div className="projects-section-in">
                            {projectsTemp}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
