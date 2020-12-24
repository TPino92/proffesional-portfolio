import React from 'react';
import horiseonSolutions from "../../assets/img/horiseon-solutions.png";
import newsOnTheBalance from "../../assets/img/news-on-the-balance.png";
import workdayCalendar from "../../assets/img/workday-calendar.png";
import runBuddy from "../../assets/img/run-buddy.png";
import privateReserve from "../../assets/img/private-reserve.png";
import photoPort from "../../assets/img/photo-port.png";

function Projects() {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/private-reserve/" target="_blank" rel="noreferrer">
                            <img src={privateReserve} className="my-2" style={{ width: "100%" }} alt="Private Reserve" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/Horiseon-Solutions" target="_blank" rel="noreferrer">
                            <img src={horiseonSolutions} className="my-2" style={{ width: "100%" }} alt="Horiseon-Solutions" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/News-On-The-Balance" target="_blank" rel="noreferrer">
                            <img src={newsOnTheBalance} className="my-2" style={{ width: "100%" }} alt="News on the Balance" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/Workday-Calendar" target="_blank" rel="noreferrer">
                            <img src={workdayCalendar} className="my-2" style={{ width: "100%" }} alt="Workday Calendar" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/run-buddy" target="_blank" rel="noreferrer">
                            <img src={runBuddy} className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/photo-port" target="_blank" rel="noreferrer">
                            <img src={photoPort} className="my-2" style={{ width: "100%" }} alt="Photo Portfolio" />
                        </a>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Projects;
