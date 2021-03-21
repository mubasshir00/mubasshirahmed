import React from 'react'
import Title from '../Components/Title'

const Education = () => {
    return (
        <div className="EducationPage">
            <Title title={"My Education"} span={"My Education"} />
            <div className="name">
                <ul>
                    <h3>Institution : </h3>
                    <li>
                        <p>North South University , Dhaka</p>
                    </li>
                    <li>
                        <p>Government City College , Chittagong</p>
                    </li>
                    <li>
                        <p>Bangladesh Navy School , Chittagong</p>
                    </li>
                </ul>
            </div>
            <div className="coursework">
                <h2>Relevant Course Work</h2>
                <ul>
                    <li>Programming Language I (C Programming language)</li>
                    <li>Discrete Mathematics, Programming Language II (Java)</li>
                    <li>Database Management System</li>
                    <li>Data Structure & Algorithm</li>
                    <li>Software Engineering</li>
                    <li>Concepts of Programming Language</li>
                    <li>Digital Logic</li>
                    <li>Operating Systems Design</li>
                </ul>
            </div>
        </div>
    )
}

export default Education
