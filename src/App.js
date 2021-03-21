import './App.css';
import Home from './Pages/Home';
import Particles from 'react-particles-js';
import ReactDOM from "react-dom";
// import { BrowserRouter as  Route,  Router, Link } from "react-router-dom";
import ParticleComponent from './Components/ParticleComponent';
import NavBar from './Components/NavBar';
import { Switch, Route} from 'react-router-dom';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Project from './Pages/Project';
import Certifications from './Pages/Certifications';
import Contact from './Pages/Contact';
import ParticleBackground from './Components/ParticleBackground';

function App() {
  return (
  
    <div className="App">
      <div className="side-bar">
        <NavBar />
      </div>
      <div className="main-content">
        {/* <ParticleBackground /> */}

        {/* <Home/> */}
          <div className="main-conten">
          {/* <ParticleBackground /> */}

            <div className="content">
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/education" exact>
                  <Education />
                </Route>
                <Route path="/skills" exact>
                  <Skills />
                </Route>
                <Route path="/work">
                  <Work />
                  
                </Route>
                <Route path="/projects">
                  <Project />
                </Route>
                <Route path="/certifications">
                  <Certifications />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            
            </div>
          </div>
      </div>

    </div>

   
  );
}

export default App;
