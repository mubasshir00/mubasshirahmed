import React from 'react'
import Title from '../Components/Title'

const Work = () => {
    return (
        <div>
            <Title title={'Work Experience'}/>
            <div className="work-container">
                <ul>
                    <li>
                        <div>
                            <h4>Volunteer</h4>
                            <p className="date">August 2019 - January 2020</p>
                            <p>Center for Learning & Development - CLD, Dhaka.</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h4>Volunteer</h4>
                            <p className="date">September 2018 - March 2019</p>
                            <p>NSU ACM Student Chapter, Dhaka.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Work
