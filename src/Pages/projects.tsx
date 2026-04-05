import rocklock1 from '../assets/rocklock1.png';
import rover1 from '../assets/rover1.png';
import processor from '../assets/processor.png';
import bloomblocker from '../assets/bloomblocker.jpg';

export function Projects() {
    return (
    <div className="main">
        <br></br><br></br><br></br>
        <h1>Projects</h1>

        <div className="row">
        <div className="column">
            <div className="content">
            <img src={rover1} alt="Autonomous Rover" className="contentimage" />
            <h3>Autonomous Rover</h3>
            <p>Capstone project for Open Project Space.</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src={processor} alt="Processor" className="contentimage" />
            <h3>RISC-V Single Cycle Processor</h3>
            <p>Capstone project for EECS 31L, a digital logic design.</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src={rocklock1} alt="RockLock" className="contentimage" />
            <h3>RockLock</h3>
            <p>My team's 3rd place submission for ESC's EngiTank.</p>
            <br></br>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src={bloomblocker} alt="BloomBlocker" className="contentimage" />
            <h3>BloomBlocker</h3>
            <p>My team's 3rd place submssion for ESC's LIFETank.</p>
            <br></br>
            </div>
        </div>
        </div>

        <div className="content">
        <br></br>
        <h3>Work in Progress</h3>
        <p>More projects (and individual webpages for each project here) will be implemented in time!</p>
        <br></br>
        </div>

    </div>
    )
}