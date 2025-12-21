import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'eTrack Management System',
      description: 'Full-stack asset tracking system with barcode scanning, dynamic floor management, real-time and email notifications, and role-based access for admins and students.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'Nodemailer', 'Tailwind CSS'],
      github: 'https://github.com/Phanikumar9133',
      demo: 'https://e-track-project.vercel.app/'
    },
   {
      id: 2,
      title: 'Weather',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React Native', 'Weather API', 'Maps'],
      github: 'https://github.com/Phanikumar9133',
      demo: 'https://weatherapplication-zeta.vercel.app/'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark theme, smooth animations, and contact form integration.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Framer Motion', 'CSS3'],
      github: 'https://github.com/Phanikumar9133',
      demo: 'https://phanikumar-nine.vercel.app//'
    },
    {
      id: 4,
      title: 'Sports Event Tracker',
      description: 'A responsive web app to manage and track college sports events, including team registration, match schedules, live score updates, and result boards.',
      image: 'https://images.pexels.com/photos/3991876/pexels-photo-3991876.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: 'Web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
      github: 'https://github.com/Phanikumar9133',
      demo: 'https://demo.com'
    },
    
    
    
  ];

  const filters = ['All', 'Web', 'Apps'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <FaFilter className="filter-icon" />
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-category neon-text">
                  {project.category}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-glow"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3>Want to see more?</h3>
          <p>Check out my GitHub for additional projects and contributions</p>
          <a href="https://github.com/Phanikumar9133" target="_blank" rel="noopener noreferrer" className="btn-primary">
            <FaGithub /> View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
