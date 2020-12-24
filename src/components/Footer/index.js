import React from 'react';

function Footer(props) {
    return (
        <section className={"py-2 text-dark bg-nav "}>
            <div className="container">
                <div className="row">
                    <div className="col-sm hovering rounded">
                        <a target="_blank" rel='noopener noreferrer' href="https://github.com/TPino92">GitHub</a>
                    </div>
                    <div className="col-sm hovering rounded">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.linkedin.com/in/trevor-pino-0913971b1/">LinkedIn</a>
                    </div>
                    <div className="col-sm hovering rounded">
                        <a target="_blank" rel='noopener noreferrer' href="https://www.facebook.com/trevor.pino">Facebook</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;