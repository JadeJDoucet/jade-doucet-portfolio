import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import '../styles/NavBarClippy.css'

const NavBarClippy = () => {
  const location = useLocation();
  const [isClippyVisible, setIsClippyVisible] = useState(true);

  // todo: check mark next to each page viewed and strike through item (but still clickable when not current page)
  //  Maybe create context for this, use context to store state of each page visited

  useEffect(() => {
    // hide clippy on mobile
    if (window.innerWidth < 768) {
      setIsClippyVisible(false);
    }
  },
  []
  )

  return (
    isClippyVisible
      ?  (
      <nav className='clippy-navbar-container'>
        <div className='clippy'>
          <img src={require('../images/clippy.png')} alt='Clippy' width={150}/>
        </div>
        <div className='speech-bubble'>
          <p className='speech-bubble-text'>
            It looks like you&apos;re trying to learn more about Jade! Please see:
          </p>
          <ul className='clippy-links'>
            <li className='clippy-navbar-item'>
              <Link to='/' className={`clippy-navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
                About
              </Link>
            </li>
            <li className='clippy-navbar-item'>
              <Link to='/experience' className={`clippy-navbar-link ${location.pathname === '/portfolio' ? 'active' : ''}`}>
                Experience
              </Link>
            </li>
            <li className='clippy-navbar-item'>
              <Link to='/projects' className={`clippy-navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
        )
      : null
  );
}

export default NavBarClippy;
