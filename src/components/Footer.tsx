const Footer = () => {
  return (
    <>
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">

            <h2>Get In Touch</h2>

            <p className="section-subtitle">Let's collaborate on something amazing</p>
          </div>

          
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <span>Email:</span> 
                  <a href="mailto:ganesh1lucky2@gmail.com">ganesh1lucky2@gmail.com</a>
                </li>
                <li>
                  <span>Location:</span> Rajahmundry, India
                </li>
              </ul>
              
              <div className="social-links">
                <a href="https://github.com/desire-674" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/sai-ganesh-0853ba259/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
            
            <form className="contact-form">

              <div className="form-group">
                
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© {new Date().getFullYear()} Sai Ganesh. All rights reserved.</p>
            <div className="footer-links">
              <a href="#intro">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;