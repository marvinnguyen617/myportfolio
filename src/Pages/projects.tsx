import rocklock1 from '../assets/rocklock1.png';
import rover1 from '../assets/rover1.png';
import processor from '../assets/processor.png';
import bloomblocker from '../assets/bloomblocker.jpg';
import { Link, NavLink } from 'react-router-dom'

export function Projects() {
    return (
    <div className="main">
        <br></br><br></br><br></br>
        <h1>Projects</h1>

        <div className="row">
        <div className="column">
            <div className="content">
            <Link to="/rover" className="navlink"><img src={rover1} alt="Autonomous Rover" className="contentimage" /></Link>
            <h3>Autonomous Rover<br></br><span className="italic">KiCad, ESP32, C++</span></h3>
            <p>Capstone project for Open Project Space.</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <NavLink to="/processor" className="navlink"><img src={processor} alt="Processor" className="contentimage" /></NavLink>
            <h3>RISC-V Single Cycle Processor.<br></br><span className="italic">Verilog HDL</span></h3>
            <p>Capstone project for EECS 31L, a digital logic design</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <NavLink to="/rocklock" className="navlink"><img src={rocklock1} alt="RockLock" className="contentimage" /></NavLink>
            <h3>RockLock<br></br><span className="italic">ESP32, C++</span></h3>
            <p>My team's 3rd place submission for ESC's EngiTank.</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <NavLink to="/bloomblocker" className="navlink"><img src={bloomblocker} alt="BloomBlocker" className="contentimage" /></NavLink>
            <h3>BloomBlocker<br></br><span className="italic">ESP32, C++</span></h3>
            <p>My team's 3rd place submssion for ESC's LIFETank.</p>
            <br></br>
            </div>
        </div>
        </div>

        <div className="content">
        <br></br>
        <h3>More projects coming soon!</h3>
        <br></br>
        </div>

    </div>
    )
}