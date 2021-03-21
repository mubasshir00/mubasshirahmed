import React from 'react'
import Title from '../Components/Title'

const Contact = () => {

    return (
        <div className="ContactPage">
            <Title title={"Contact"} span={"Contact"} />

            <div className="contact">
                <ul className="contact-list">
                    <li> 
                        <h3>Email</h3>
                        <p>mubasshir.ahmed@northsouth.edu</p>
                        <p>marakib178@gmail.com</p>
                    </li>
                    <li>
                        <h3>Phone</h3>
                        <p>+8801860959559</p>
                    </li>
                    <li>
                        <h3>Mailing Address</h3>
                        <p>Solmaid</p>
                        <p>Basundhara Road,Dhaka-1212</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Contact
