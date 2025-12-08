function About() {
    return(
        <section id="about" className="about">
                <h2>About <span>Me</span></h2>
                <div className="gap about-content">
                    <div className="about-column about-text">
                        <p>
                            I'm an up and coming full stack developer with solid experience 
                            in both front end and back end development. I take great pride 
                            in my work and always strive to do the best I can in everything 
                            I do. On top of that I have a passion for problem solving. 
                            If you present me with a challenge, I'll almost always find 
                            a way to get through it. 
                        </p>
                        <p>
                            When I'm not busy with projects or learning new tech, you'll probably 
                            find me playing with my dog, Jasper, reading, gaming, or mountain biking 
                            in the summer. I'm a huge fan of Brandon Sanderson novels and games like 
                            Deep Rock Galactic and Terraria.
                        </p>
                        <p>
                            Want to know more? <a href="#contact"><span>Get in touch!</span></a>
                        </p>
                    </div>
                    <div className="about-column about-pic"></div> 
                </div>
            </section>
    );
}

export default About;