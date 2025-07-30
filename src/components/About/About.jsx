import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa';
import './About.css';

const About = () => {
  const education = [
    {
      year: '2015 - 2016',
      title: '10th Grade',
      company: 'ZPHigh School',
      description: 'Completed SSC with strong foundation in Mathematics and Science.'
    },
    {
      year: '2016 - 2018',
      title: 'Intermediate (MPC)',
      company: 'Vagdevi Junior College',
      description: 'Focused on Mathematics, Physics, and Chemistry.'
    },
    {
      year: '2018 - 2022',
      title: 'Bachelor of Computer Science',
      company: 'Sri Bala Sai Degree College',
      description: 'Studied core CS subjects and began building projects in web development.'
    },
    {
      year: '2024 - 2026',
      title: 'Master of Computer Applications (MCA)',
      company: 'Aditya University',
      description: 'Specialized in full-stack development and data structures.'
    }
  ];

  const internships = [
    {
      year: '2022',
      title: 'Web Development Intern',
      company: 'Technical Hub Pvt. Ltd.',
      description: 'Built responsive websites using HTML, CSS, JavaScript, and React,Nodejs.'
    },
    {
      year: '2023',
      title: 'Java Intern',
      company: 'Octanet Solutions',
    description: 'Developing an intuitive and secure ATM user interface focused on enhancing user experience, implementing responsive design, and integrating backend APIs for real-time transaction processing.'
    }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2
          className="section-title gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass-card">
              <h3>Hello! I'm P Phani Kumar</h3>
              <p>
                I'm a passionate full-stack developer focused on building responsive and dynamic web applications.
              </p>
              <p>
                I started my coding journey in 2015 and gradually evolved from student projects to real-world web development.
              </p>
              <p>
                I love working on modern stacks like React, Node.js, and MongoDB and enjoy learning and growing every day.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="timeline-section">
          <motion.div
            className="timeline-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="gradient-text">My Journey</h3>
          </motion.div>

          <div className="timeline-container">
            {/* Education Timeline */}
            <div className="timeline-side">
              <h4><FaGraduationCap /> Education</h4>
              <div className="timeline">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-content glass-card">
                      <div className="timeline-year">{item.year}</div>
                      <h5>{item.title}</h5>
                      <h6 className="neon-text">{item.company}</h6>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Internship Timeline */}
            <div className="timeline-side">
              <h4><FaLaptopCode /> Internships</h4>
              <div className="timeline">
                {internships.map((item, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="timeline-content glass-card">
                      <div className="timeline-year">{item.year}</div>
                      <h5>{item.title}</h5>
                      <h6 className="neon-text">{item.company}</h6>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
