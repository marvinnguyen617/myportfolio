import { NavLink } from 'react-router-dom'
import "./navbar.css"

export function Navbar() {
    return (
        <nav className="navbar">
            
            <div className="navleft">
                <NavLink to="/" className="navlink">Home</NavLink>
                <NavLink to="/experience" className="navlink">Experience</NavLink>
                <NavLink to="/projects" className="navlink">Projects</NavLink>
                <NavLink to="/contact" className="navlink">Contact</NavLink>
            </div>

        </nav>
    )
}