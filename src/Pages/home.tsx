import { Link } from 'react-router';
import welding from '../Assets/welding.png';
import linkedinlogo from "../assets/linkedinlogo.png"
import githublogo from "../assets/githublogo.png"
import email from "../assets/email.png"
export function Home() {
    return (
    <>
        <div className = "main">

            <div className = "row">
                <div className = "columnplus">
                    <div className = "content">
                        <br></br>
                        <h1>Marvin Nguyen</h1>
                        <h2>Electrical Engineering, 2nd Year</h2>
                        <h3>Dedicated electrical engineering student <br /> with a focus on RF/Antenna design.</h3>
                        <div className = "linkcontainer">
                            <Link to ="https://drive.google.com/file/d/1F0Y4PoYIUZzYuECMRSxCgwg3M9Y48c3h/view?usp=sharing"><button className="linkbutton">Resume</button></Link>
                            <Link to ="https://www.linkedin.com/in/marvintuanminhnguyen/"><img src={linkedinlogo} alt="LinkedIn" className="icon"/></Link>
                            <Link to ="https://github.com/marvinnguyen617"><img src={githublogo} alt="GitHub" className="icon" /></Link>
                            <Link to ="mailto:marvintn@uci.edu"><img src={email} alt="Mail" className="icon" /></Link>
                        </div>
                        <br></br>
                    </div>
                </div>
                <div className = "column">
                    <div className = "content">
                    <img src={welding} alt="Welding" className="smallcontentimage" />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}