import './App.css';
import Home from './Pages/Home';
import Particles from 'react-particles-js';
import ReactDOM from "react-dom";
// import { BrowserRouter as  Route,  Router, Link } from "react-router-dom";
import ParticleComponent from './Components/ParticleComponent';
import NavBar from './Components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Work from './Pages/Work';
import Project from './Pages/Project';
import Certifications from './Pages/Certifications';
import Contact from './Pages/Contact';

function App() {
    return (

        <div className="App">
            <div className="side-bar">
                <NavBar />
            </div>
            <div className="main-content">
                {/* <Home/> */}
                <ParticleComponent />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}>
                    <div className="main-conten">
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

                <ParticleComponent />
                <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }}>

                </div>

            </div>

        </div>

    );
}

export default App;
