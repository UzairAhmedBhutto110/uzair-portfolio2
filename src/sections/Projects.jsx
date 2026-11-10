
import './Projects.css';

const projects = [
  {
    number: '01',
    title: 'Sindh Jobs & Exam Preparation Platform',
    category: 'Web Development',
    description:
      'A full-stack web application designed to help users explore job opportunities and access exam preparation resources. Built as a university web engineering project.',
    technologies: ['React', 'Node.js', 'MySQL'],
    status: 'Academic Project',
  },
  {
    number: '02',
    title: 'Soil Moisture Forecasting System',
    category: 'Machine Learning',
    description:
      'An agricultural machine learning prototype that uses historical sensor data to predict soil moisture levels 24 hours ahead.',
    technologies: ['Python', 'Pandas', 'Scikit-learn'],
    status: 'In Development',
  },
  {
    number: '03',
    title: 'React Practice Projects',
    category: 'Frontend Development',
    description:
      'A collection of frontend learning projects developed to practice React components, JSX, responsive layouts and reusable UI elements.',
    technologies: ['React', 'JavaScript', 'CSS'],
    status: 'Learning Projects',
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <p className="section-label">MY WORK</p>
          <h2>Featured Projects</h2>
          <p className="projects-intro">
            Here are some projects that represent my
            learning journey and practical experience
            in software development.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project) => (
            <article className="project-card" key={project.number}>

              <div className="project-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-bottom">
                <span>{project.status}</span>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;
