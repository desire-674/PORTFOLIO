interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveDemoLink?: string;
  image?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Weather APP',
      description: 'A Simple Weather application that provides Forecast Information',
      technologies: [ 'Html','CSS', 'Javascript'],
      githubLink: 'https://github.com/desire-674/WEATHER_APP/tree/main/Weather%20APP',
      image: '/images/movie-recommendation.jpg'
    },
     {
      id: 4,
      title: 'Secure connectivity to VPC through Bastion Host',
      description: 'To connect to a private server through a Bastion Host',
      technologies: ['VPC','AWS','EC2'],
      githubLink: 'https://github.com/desire-674/AWS_PROJECTS/tree/main/Secure%20connectivity%20to%20VPC%20through%20Bastion%20Host',
      image: '/images/blockchain.jpg'
    },
    {
      id: 2,
      title: 'Job Portal Using AWS',
      description: 'Developed and deployed a Job Portal application using AWS services.',
      technologies: ['AWS Cloud', 'HTML','CSS','JAVASCRIPT', 'AWS S3','API-GATEWAY'],
      githubLink: 'https://github.com/desire-674/AWS_PROJECTS/tree/main/JOB_PORTAL',
      image: '/images/redis-clone.jpg'
    },
    {
      id: 3,
      title: 'GUI Application using JDBC',
      description: 'A Simple Java GUI application that connect to a database and performs CRUD operations.',
      technologies: ['JAVA','MySQL','JDBC'],
      githubLink: 'https://github.com/desire-674/Projects/tree/main/GUI%20APPLICATION',
      image: '/images/blockchain.jpg'
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Selected works showcasing my technical expertise</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-outline"
                    >
                      View Code
                    </a>
                  )}
                  {project.liveDemoLink && (
                    <a 
                      href={project.liveDemoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
