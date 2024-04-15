import React from 'react';
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My <span>Skills</span></h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">Coding Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span style={{width: '90%'}}></span></div>
              </div>

              <div className="progress">
                <h3>CSS<span>90%</span></h3>
                <div className="bar"><span style={{width: '90%'}}></span></div>
              </div>

              <div className="progress">
                <h3>JavaScript <span>67%</span></h3>
                <div className="bar"><span style={{width: '67%'}}></span></div>
              </div>

            </div>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Web Development <span>75%</span></h3>
                <div className="bar"><span style={{width: '75%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Designing<span>80%</span></h3>
                <div className="bar"><span style={{width: '80%'}}></span></div>
              </div>

              <div className="progress">
                <h3>Color Grading <span>60%</span></h3>
                <div className="bar"><span style={{width: '60%'}}></span></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
