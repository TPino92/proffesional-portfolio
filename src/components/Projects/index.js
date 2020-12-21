import React from 'react';
// import budgetImage from "../../assets/budget.jpg";
// import newsOnTheBalance from "../../assets/newsOnTheBalance.jpg";
// import workDayScheduler from "../../assets/workDayScheduler.jpg";
// import runBuddy from "../../assets/runBuddy.jpg";
// import privateReserve from "../../assets/privateReserve.jpg";
// import photoPort from "../../assets/photoPort.jpg";

function Projects() {
    return (
        <section className={"my-5"}>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/private-reserve/" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="Private Reserve" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/Budget-Tracker" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="Budget Tracker" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/jesusmanteca/News-On-The-Balance" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="News on the Balance" />
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/Work-Day-Scheduler" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="Work Day Scheduler" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/run-buddy" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="Run Buddy" />
                        </a>
                    </div>
                    <div className="col-sm">
                        <a href="https://github.com/TPino92/photo-port" target="_blank" rel="noreferrer">
                            <img className="my-2" style={{ width: "100%" }} alt="Photo Portfolio" />
                        </a>
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Projects;
