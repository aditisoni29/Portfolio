import styles from './ProjectsStyles.module.css';
import Pfp from '../../assets/Portfolio.png';
import Snake from '../../assets/Snake2.jpg';
import Law from '../../assets/Law2.jpg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Pfp}
          link="_blank"
          title="Personal Portfolio"
          description="A self-introductory website showcasing my skills, projects, and experience."
          style={{ backgroundColor: 'transparent' }} // Remove background for this image
        />
        <ProjectCard
          src={Snake}
          link="_blank"
          title="Python Game Development"
          description="A classic Snake game developed using Python. Enjoy a fun coding challenge!"
        />
        <ProjectCard
          src={Law}
          link="_blank"
          title="Lawyer's Hub"
          description="An innovative platform designed for lawyers, featuring a virtual law library and more."
          style={{ backgroundColor: 'transparent' }} // Remove background for this image
        />
      </div>
    </section>
  );
}

export default Projects;