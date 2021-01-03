// Styles
import "./Projects.scss";

// Components
import Card from "../../elements/Card";

// Assets
import figma from "../../../assets/images/projects/figma.PNG";
import doggie from "../../../assets/images/projects/doggie.PNG";
import budget from "../../../assets/images/projects/budget.PNG";

const projects = [
  {
    pic: figma,
    sign: 'Mobile-first design',
    link: 'https://figmalandd.netlify.app/',
  },
  {
    pic: doggie,
    sign: 'SCSS + BEM',
    link: 'https://doggiedaycare.netlify.app/',
  },
  {
    pic: budget,
    sign: 'HTML5 + CSS3',
    link: 'https://clouddbudget.netlify.app/',
  },
]

const Projects = () => (
  <div className="projects-wrapper" id="projects">
    <h2 className="projects-title">Projects</h2>
    <div className="projects">
      { projects.map((project) => (
          <div className="projects__card">
            <Card
              image={project.pic}
              sign={project.sign}
              link={project.link}
            />
          </div>
      ))}
    </div>
  </div>
)

export default Projects;