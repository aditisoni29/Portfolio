import styles from './ProjectsStyles.module.css';
import Pfp from '../../assets/Portfolio.png';
import Snake from '../../assets/Snake2.jpg';
import GPTEcho from '../../assets/GPTEcho.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Pfp}
          link="https://portfolio-kappa-seven-86.vercel.app/"
          title="Personal Portfolio"
          description="A self-introductory website showcasing my skills, projects, and experience."
          style={{ backgroundColor: 'transparent' }} // Remove background for this image
        />
        <ProjectCard
          src={Snake}
          link="https://github.com/aditisoni29/Snake-Eater-"
          title="Python Game Development"
          description="A classic Snake game developed using Python. Enjoy a fun coding challenge!"
        />
        <ProjectCard
          src={GPTEcho}
          link="https://github.com/aditisoni29/GPTEcho.git"
          title="GPTEcho"
          description="Advanced AI agent that interacts with users in real-time, generates and prioritizes tasks."
          style={{ backgroundColor: 'transparent' }} // Remove background for this image
        />
      </div>
    </section>
  );
}

export default Projects;
