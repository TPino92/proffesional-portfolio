import React from 'react';

function Nav(props) {
  return (
    <section className={"py-2 text-dark bg-nav sticky-top"}>
      <div className="container">
        <div className="row" >
          <div className="col-sm">
          💻 Trevor Pino
          </div>
          <div onClick={() => props.setCurrentPage('about')} className="col-sm hovering rounded">
            About Me
          </div>
          <div onClick={() => props.setCurrentPage('projects')} className="col-sm hovering rounded">
            My Projects
          </div>
          <div onClick={() => props.setCurrentPage('resume')} className="col-sm hovering rounded">
            My Resume
          </div>
          <div onClick={() => props.setCurrentPage('contact')} className="col-sm hovering rounded">
            Contact Me
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;