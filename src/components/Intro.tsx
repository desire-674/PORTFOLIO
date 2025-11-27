import { 
  SiTypescript, SiJavascript, SiPython,
  SiReact, SiNodedotjs, SiTensorflow,
  SiDocker,SiMongodb, 
  SiMysql , SiTailwindcss,  SiAmazon,SiCoffeescript, SiLinux
} from 'react-icons/si';



const Intro = () => {
  return (
    <section id="intro" className="section intro-section">
      <div className="container">
        <div className="intro-content">
          {/* Profile picture container */}

          <div className="profile-pic-container">
            <img 
              src="public/desire.jpg" 
              alt="Sai Ganesh" 
              className="profile-pic"
            />
          </div>
          
          <h1>Hello, I'm <span className="highlight">Sai Ganesh</span></h1>

          <p className="subtitle">AWS Developer</p>

          <p className="intro-text">
            I build innovative solutions with expertise in Java, Python, AI/ML,AWS Development.
            Currently enhancing my skills in Cloud Development and Fullstack Development.
          </p>
          
          <div className="cta-buttons"> 
            <a
              href="https://drive.google.com/file/d/1zhkjO4LxuTqod_WnjScMi4dtx7g9AYbh/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="skills-section">
          <h3>Technical Skills</h3>
          <div className="skills-scroll-container">
            <div className="skills-scroll">
              {/* Languages */}
              <SiCoffeescript className="skill-icon" title="Java" />
              <SiLinux className="skill-icon" title="Linux" />
              <SiAmazon className="skill-icon" title="AWS" />
              <SiTypescript className="skill-icon" title="TypeScript" />
              <SiJavascript className="skill-icon" title="JavaScript" />
              <SiPython className="skill-icon" title="Python" />
              {/* Frameworks */}

              <SiReact className="skill-icon" title="React" />
              <SiNodedotjs className="skill-icon" title="Node.js" />
              <SiTensorflow className="skill-icon" title="TensorFlow" />
              
              {/* Technologies */}
              <SiDocker className="skill-icon" title="Docker" />
              <SiMongodb className="skill-icon" title="Mongodb" />
              <SiMysql className="skill-icon" title="MySQL" />
              <SiTailwindcss className="skill-icon" title="tailwindcss" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
