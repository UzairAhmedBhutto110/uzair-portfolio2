
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Uzair Ahmed
        </h1>

        <h2>Computer Science Student & Aspiring Developer</h2>

        <p className="hero-description">
          I am a BS Computer Science student at Sukkur IBA University.
          I enjoy programming, building web applications, and exploring
          Artificial Intelligence and Machine Learning.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            View My Projects
          </a>

          <a href="#contact" className="btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image">
        <img
          className="profile-image"
          src="/profile.jpg"
          alt="Portrait of Uzair Ahmed Bhutto"
        />
      </div>
    </section>
  );
}

export default Hero;
