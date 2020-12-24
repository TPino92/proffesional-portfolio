import React from 'react';
import meImg from "../../assets/img/me.jpg";

function About(props) {
  return (
    <div className="container" >
      <div className="row">
        <div className="col-sm">
            <img src={meImg} className="my-2" style={{ width: "100%" }} alt="cover" />
          </div>
          <div className="col-sm">
            <h1 id="about">Trevor Pino</h1>
            <h4 className="text-muted">Full Stack Web Developer</h4>
            <h4 className="text-muted">Tech Wizard</h4>
            <h4 className="text-muted">Coding Enthusiast</h4>
          </div>
        <div className="row">
          <p>I’m a self-confessed tech geek. I have always been curious about the ways things work. From a young age, I enjoyed taking my toys apart, to make them more efficient, and then putting them back together again. Ruined quite a few remote control cars before I started getting good at the process. Before high school, I was the family "IT Guy". I joined the after school Robotics Team and participated in Computer Programming Summer Camps. Today, I build high-end computers for myself and others and other tech work, just for fun. Early in 2020, I decided I was ready for a career change -- it was time to pursue my passion for technology, So I researched my options and applied to the University of Arizona's Fullstack Web Development program.
          Soon I will be a certified Web Developer. Skilled in UX and UI improvements needed for websites to be successful. I pride myself on my ability to work collaboratively with groups to meet job quality and time requirements.
          Born and raised in California, I am currently living my best life in New Mexico with my finance, Amanda, and our two "children" Spartacus ‍🐈 and Albert 🐈.</p>
        </div>
      </div>
    </div>
  );
}

export default About;