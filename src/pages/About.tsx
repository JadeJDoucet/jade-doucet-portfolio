import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

const About = () => {
  return (
    <div className='about-container'>
      <Fade bottom>
        <h2>About Me</h2>
      </Fade>
      <div className='about-card'>
        <Slide left>
          <div className='about-image-container'>
            <img
              className='about-image'
              src={require('../images/jade-portrait.png')}
              alt='Portrait of Jade Doucet'
            />
          </div>
        </Slide>
        <Slide right>
          <div className='about-text-container'>
            <p>
              Hi there! I&apos;m Jade Doucet, a Front-End Engineer based in Portland, Oregon. I specialize in building mobile applications and web applications using React and React Native, accompanied by TypeScript, Kotlin, and many other tools which are listed <a href='/skills'>here</a>.
              I am passionate about creating beautiful, user-friendly experiences that solve real-world problems.
            </p>
            <p>
              In my free time, I enjoy rock climbing, hiking, and exploring new technology with side projects.
            </p>
            <div className='about-social-icons'>
              <a href='https://www.linkedin.com/in/jadejdoucet' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin fa-lg'></i>
              </a>
              <a href='https://www.github.com/jadejdoucet' target='_blank' rel='noopener noreferrer'>
                <i className='fab fa-linkedin fa-lg'></i>
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default About;
