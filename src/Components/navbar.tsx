import { Link } from 'react-router-dom'
import "./navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="navleft">
            <Link to ="/"><button className="navbutton">Home</button></Link>
            <Link to ="/experience"><button className="navbutton">Experience</button></Link>
            <Link to ="/projects"><button className="navbutton">Projects</button></Link>
            <Link to ="/contact"><button className="navbutton">Contact</button></Link>
            </div>

        </nav>
    )
}