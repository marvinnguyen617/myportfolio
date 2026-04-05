import rocklock1 from '../assets/rocklock1.png';
import rover1 from '../assets/rover1.png';

export function Projects() {
    return (
    <div className="main">

        <h1>Projects</h1>

        <div className="row">
        <div className="column">
            <div className="content">
            <img src={rover1} alt="Autonomous Rover" className="contentimage" />
            <h3>Autonomous Rover</h3>
            <p>Capstone project for Open Project Space.</p>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src={rocklock1} alt="RockLock" className="contentimage" />
            <h3>RockLock</h3>
            <p>My team's 3rd place submission for ESC's EngiTank.</p>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src="react.svg" alt="Processor" className="contentimage" />
            <h3>RISC-V Single Cycle Processor</h3>
            <p>Capstone project for EECS 31L, a digital logic design.</p>
            </div>
        </div>
        <div className="column">
            <div className="content">
            <img src="react.svg" alt="BloomBlocker" className="contentimage" />
            <h3>BloomBlocker</h3>
            <p>My team's 3rd place submssion for ESC's LIFETank.</p>
            </div>
        </div>
        </div>

        <div className="content">
        <img src="react.svg" alt="Bear" className="contentimage" />
        <h3>Current Project</h3>
        <p>Not sure, maybe an antenna?</p>
        </div>

    </div>
    )
}