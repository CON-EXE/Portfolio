function About() {
    return(
        <section id="about" className="about">
                <h2>About <span>Me</span></h2>
                <div className="gap flex">
                    <div className="about-column about-content">
                        <p>
                            I'm an up and coming software developer with a fair bit of 
                            experience using HTML, CSS, and JavaScript. On top of that 
                            I have some past experience with Java. I take great pride 
                            in my work and always strive to do the best I can in everything 
                            I do. On top of that I have a passion for problem solving. 
                            If you present me with a challenge, I'll almost always find 
                            a way to get through it. 
                        </p>
                        <p>
                            When I'm not busy racking my brain trying to figure out how to 
                            center a div for the fiftieth time, you'll probably find me playing 
                            with my dog, Jasper, reading, gaming, or mountain biking in the 
                            summer. I'm a huge fan of Brandon Sanderson novels and games 
                            like Deep Rock Galactic and Slay the Spire.
                        </p>
                        <p>
                            Want to know more? <a href="#contact"><span>Get in touch!</span></a>
                        </p>
                    </div>
                    <div class="about-column about-pic"></div> 
                </div>
            </section>
    );
}

export default About;