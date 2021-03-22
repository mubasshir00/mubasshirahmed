import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaCodepen, FaBlog} from "react-icons/fa";
import HomePageLink from '../Components/HomePageLink'
import ParticleBackground from '../Components/ParticleBackground';

const Home = () => {
    return (
        <div className="Home">
           <header className="main-title">
               <h1 className="main-text">
                    <p>Hello , I am</p>
                   <span> Mubasshir Ahmed</span>
                    
                </h1>
                <p className="home-para">Computer Science student looking for an opportunity to utilize my skill.</p>
                <p className="home-para">
                    FrontEnd Developer , Experience in UI/UX design
                </p>


                <div className="icons">
                    <ul className="icons-lists">
                        <li className="icons-item">
                            <div>
                                <a href="https://github.com/mubasshir00" className="linkCLass">
                                    <FaGithub /></a>
                                <a href="https://github.com/mubasshir00" className="icon-text" >GitHub</a>
                           
                            </div>
                        </li>

                        <li className="icons-item">
                            <div>
                                <a href="https://www.linkedin.com/in/mubasshir-ahmed-696378137/" ><FaLinkedin /></a>
                                <a href="https://www.linkedin.com/in/mubasshir-ahmed-696378137/" className="icon-text">Linkedin</a>
                            </div>
                        </li>
                        <li className="icons-item" >
                            <div>
                                <a href="https://twitter.com/Mubassh35613287" ><FaTwitter /></a>
                                <a href="https://twitter.com/Mubassh35613287" className="icon-text" >Twitter</a>
                            </div>
                        </li>
                        <li className="icons-item">
                            <div>
                                <a href="https://stackoverflow.com/users/8407666/mubasshir00" ><FaStackOverflow/></a>
                                <a href="https://stackoverflow.com/users/8407666/mubasshir00"  className="icon-text">StackOverFlow</a>
                            </div>
                        </li>

                        <li className="icons-item">
                            <div>
                                <a href="https://codepen.io/mubasshir00"  ><FaCodepen /></a>
                                <a href="https://codepen.io/mubasshir00"   className="icon-text">Codepen</a>
                            </div>
                        </li>

                        <li className="icons-item">
                            <div>
                                <a href="https://hashnode.com/@mubasshir00" ><FaBlog /></a>
                                <a href="https://hashnode.com/@mubasshir00" className="icon-text" >My Blog</a>
                            </div>
                        </li>
                    </ul>
                </div>
               
           </header>
        </div>
    )
}

export default Home
