import React from 'react';
import myimg1 from "../src/assets/photos/me.jpg";
import myimg2 from "../src/assets/photos/1667148238940.jpeg";
import "./about.css";

function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src={myimg2} alt="" />
        <img src={myimg1} alt="" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Web Developer</h3>
        <p>Beyond the digital realm, I have a wanderlust for exploring new places. Traveling fuels my curiosity and broadens my perspective, providing inspiration that often reflects in my work. Whether it's the bustling streets of a city or the tranquility of nature, each journey adds a unique touch to my creative palette.
          In addition to my love for coding and design, I have a strong kick for football. Playing on the field not only keeps me physically active but also instills a sense of teamwork and discipline.
          Looking ahead, my ambition is to undertake and execute great projects that challenge me to push boundaries and explore new horizons. I am excited about the journey ahead, embracing the opportunities to learn, grow, and contribute to the ever-evolving landscape of technology.
          Let's connect and explore the limitless possibilities that coding and design offer, both on and off the screen!</p>
      </div>
      <div className="btn-box btns">
        <a href="#" className="btn">Read More</a>
      </div>
    </section>
  );
}

export default About;
