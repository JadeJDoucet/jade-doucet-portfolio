import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const Skills = () => {
  return (
    <div className="skills-container">
      <Fade bottom>
        <h2>Skills Me</h2>
      </Fade>
      <div className="skills-card">
        <Slide left>
          <div className="skills-image-container">
            <img
              className="skills-image"
              src={require("../images/jade-portrait.png")}
              alt="Portrait of Jade Doucet"
            />
          </div>
        </Slide>
        <Slide right>
          <div className="skills-text-container">
            <p>
              Hi there! I'm Jade Doucet, a Front-End Engineer based in Portland, Oregon. I specialize in building mobile applications and web applications using React and React Native, accompanied by TypeScript, Kotlin, and many other tools which are listed <a href='/skills'>here</a>.
              I am passionate skills creating beautiful, user-friendly experiences that solve real-world problems.
            </p>
            <p>
              In my free time, I enjoy rock climbing, hiking, and exploring new technology with side projects.
            </p>
            <div className="skills-social-icons">
              <a href="https://www.linkedin.com/in/jadejdoucet" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.github.com/jadejdoucet" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Skills;