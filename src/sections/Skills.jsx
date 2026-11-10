
import './Skills.css';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'Java', 'JavaScript', 'C++'],
  },
  {
    title: 'Web Development',
    skills: ['HTML', 'CSS', 'React', 'Node.js'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook'],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <div className="skills-heading">
          <p className="section-label">WHAT I WORK WITH</p>
          <h2>Technical Skills</h2>
          <p>
            Technologies and tools I have been learning
            and using in my academic and personal projects.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
