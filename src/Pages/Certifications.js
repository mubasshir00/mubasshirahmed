import React from 'react'
import Title from '../Components/Title'

const Certifications = () => {
    return (
        <div>
            <div className="cerContainer">
                <Title title={"Cerfications and Training"} />
                <div className="cert-container">
                    <table>
                        <tr>
                            <td>Sport Programming</td>
                            <td>
                                <ul>
                                    <li><a href="http://codeforces.com/profile/mubasshir00">CodeForces</a></li>
                                    <li>
                                        <a href="https://www.codechef.com/users/mubasshir00">CodeChef</a>
                                    </li>
                                    <li>
                                        <a href="https://www.stopstalk.com/user/profile/mubasshirOO">StopStalk</a>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Responsive Web Design</td>
                            <td>FreeCodeCamp</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>Frontendmasters</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Certifications
