import { Link } from 'react-router-dom'

export function Navbar() {
    return (
        <>
            <Link to ="/"><button>Home</button></Link>
            <Link to ="/about"><button>About</button></Link>
            <Link to ="/projects"><button>Projects</button></Link>
            <Link to ="/contact"><button>Contact Me</button></Link>
        </>
    )
}