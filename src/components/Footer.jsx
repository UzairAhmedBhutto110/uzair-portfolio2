
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Uzair Ahmed Bhutto</p>
        <p>Built with React and CSS</p>
      </div>
    </footer>
  );
}

export default Footer;
