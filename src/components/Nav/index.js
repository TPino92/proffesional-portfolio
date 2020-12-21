import React from 'react';

function Nav(props) {
  return (
    <section className={"my-5 bg-light text-dark"}>
      <div className="container ">
        <div className="row">
          <div onClick={() => props.setCurrentPage('about')} className="col-sm hovering">
            About
          </div>
          <div onClick={() => props.setCurrentPage('projects')} className="col-sm hovering">
            Projects
          </div>
          <div onClick={() => props.setCurrentPage('resume')} className="col-sm hovering">
            Resume
          </div>
          <div onClick={() => props.setCurrentPage('contact')} className="col-sm hovering">
            Contact
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nav;