function Experience() {
    return(
        <section id ="experience">
            <h2>My <span>Experience</span></h2>
            <div className="row">
                <div className="column grid-center">
                    <div><p>HTML</p></div>
                    <div className="logo html"></div>
                </div>
                <div className="column grid-center">
                    <div><p>CSS</p></div>
                    <div className="logo css"></div>
                </div>
                <div className="column grid-center">
                    <div><p>JavaScript</p></div>
                    <div className="logo javascript"></div>
                </div>
                <div className="column grid-center">
                    <div><p>React</p></div>
                    <div className="logo react"></div>
                </div>
                <div className="column grid-center">
                    <div><p>C#</p></div>
                    <div className="logo csharp"></div>
                </div>
                <div className="column grid-center">
                    <div><p>Java</p></div>
                    <div className="logo java"></div>
                </div>
            </div>
        </section>
    );
}

export default Experience;