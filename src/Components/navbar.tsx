import { Link } from 'react-router-dom'
import "./navbar.css"
import linkedinlogo from "../Assets/linkedinlogo.png"
import githublogo from "../Assets/githublogo.png"

export function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="navleft">
            <Link to ="/"><button className="navbutton">Home</button></Link>
            <Link to ="/about"><button className="navbutton">About</button></Link>
            <Link to ="/projects"><button className="navbutton">Projects</button></Link>
            <Link to ="/contact"><button className="navbutton">Contact</button></Link>
            </div>

            <div className="navright">
                <a href="https://www.linkedin.com/in/marvintuanminhnguyen/"><img src={linkedinlogo} alt="LinkedIn" /></a>
                <a href="https://github.com/marvinnguyen617"><img src={githublogo} alt="GitHub" /></a>
            </div>

        </nav>
    )
}