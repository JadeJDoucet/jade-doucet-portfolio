import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}                 from 'react-router-dom';
import About      from './pages/About';
import Experience from './pages/Experience';
import NavBar     from './components/NavBar';
import Projects   from './pages/Projects';

function App() {
  return (
    <Router>
      <NavBar />

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
