
import './About.css';

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About Me</h2>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h3>A Computer Science Student
              Passionate About Technology
            </h3>

            <p>
              I am Uzair Ahmed Bhutto, a Bachelor of Science
              in Computer Science student at Sukkur IBA University.
              I am interested in software development and enjoy
              learning how technology can solve real-world problems.
            </p>

            <p>
              My learning journey includes programming, web
              development, databases, and exploring Artificial
              Intelligence and Machine Learning. I believe in
              strengthening my fundamentals through practical
              projects and continuous learning.
            </p>

            <p>
              My goal is to become a skilled software developer
              and continue growing in the field of technology.
            </p>
          </div>

          <div className="about-details">

            <div className="detail-item">
              <span className="detail-label">EDUCATION</span>
              <h4>BS Computer Science</h4>
              <p>Sukkur IBA University</p>
            </div>

            <div className="detail-item">
              <span className="detail-label">CURRENT STATUS</span>
              <h4>Undergraduate Student</h4>
              <p>5th Semester</p>
            </div>

            <div className="detail-item">
              <span className="detail-label">AREAS OF INTEREST</span>
              <h4>Software Development</h4>
              <p>Web Development · AI · Machine Learning</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
