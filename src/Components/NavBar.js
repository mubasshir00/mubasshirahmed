import React from 'react'
import avatar from '../img/avatar.jpg'
import {NavLink} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                    <div className="pro-text">
                        <a href="mubasshir.ahmed@northsouth.edu">mubasshir.ahmed@northsouth.edu</a>
                        <a href="marakib178@gmail.com">marakib178@gmail.com</a>
                    </div>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/skills" exact activeClassName="active">Skills</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/education" exact activeClassName="active">Education</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/work" exact activeClassName="active">
                            Work Experience
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/projects" exact activeClassName="active">
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/certifications" exact activeClassName="active">
                            Certifications & Training
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">Contact</NavLink>
                    </li>
                </ul>
                <footer>
                   <p> Mubasshir Ahmed </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
