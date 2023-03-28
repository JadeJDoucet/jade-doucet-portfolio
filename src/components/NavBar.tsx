import {
  useState,
  useEffect,
} from 'react'
import {
  Link,
  useLocation,
} from 'react-router-dom'
import '../styles/NavBar.css'

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location                = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  return (
    <nav className={`navbar${isSticky ? ' sticky' : ''}`}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}>
            About
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/experience" className={`navbar-link ${location.pathname === '/experience' ? 'active' : ''}`}>
            Experience
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/projects" className={`navbar-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
