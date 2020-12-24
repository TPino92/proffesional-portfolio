import React from 'react';
import meImg from "../../assets/img/me.jpg";


function Resume() {
  return (
    <section className={"my-5"}>
      <div className="container">
        <div className="row">
        <div className="col-sm">
          <img src={ meImg } className="my-2" style={{ width: "100%" }} alt="cover" />
        </div>
          <div className="col-sm">
          <a href="../../assets/img/resume.pdf" download style={{ color: "var(--tertiary)" }}>
            Download my Resume here
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;