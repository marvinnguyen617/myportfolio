import rover1 from '../../assets/rover1.png';
import rover_pcb from '../../assets/rover_pcb.png';
import rover_sch from '../../assets/rover_sch.png';
import rover_vis from '../../assets/rover_vis.png';
import rover_wip from '../../assets/rover_wip.jpg';

export function Rover() {
    return (
    <>
    <br></br><br></br>
    <div className="column">
        <div className = "experiencecontent">
        <br></br>
        <h1>Autonomous Rover</h1>
            
        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>As a program member in my freshmen year, I built/programmed the rover/remote control for my capstone project.
        In the following year, I was given the privilege of being able to work on the program's curriculum. 
        One of the tasks I was given was to develop the Capstone Rover further. 
        At the time, the rover was capable of multi-directional movement with joystick inputs, but there were various avenues for improvement.</h3>
        </div></div></div>
        
        <div className = "experiencecontainer">
        <img src={rover_wip} alt="Rover" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>The leads determined that we could integrate an ultrasonic sensor to allow for autonomous movement of the rover.
            Modes would be swapped using the joystick's switch input. 
            Overall, this was a great idea, because all the parts were already a part of our current BOM, and it would integrate seamlessly with our current joystick PCB.
        <br></br><br></br>After much testing, and with help from my fellow lab instructors, we were able to iterate a properly working “autonomous mode,” which worked as follows:
        <br></br><br></br>1. The ultrasonic sensor sends out regular pulses. If any are reflected, the pulse's return time is measured and converted into a distance. 
        <br></br>2. Once a threshold distance is reached, the rover will automatically turn 90 degrees.
        <br></br>3. Afterwards, the rover will continue moving straight until another object is detected, or the mode is switched to manual mode.
        <br></br><br></br>This was our finished result: </h3>
        </div></div></div>

        <div className = "experiencecontainer">
        <img src={rover1} alt="Rover" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>On my own time, I created a PCB for the rover's receiver (it is currently built on a breadboard) to be eventually integrated into the curriculum during my time as lead.
        </h3>
        </div></div></div>

        <div className = "experiencecontainer">
        <img src={rover_sch} alt="Rover" className="projimage" />
        <img src={rover_pcb} alt="Rover" className="projimage" />
        <img src={rover_vis} alt="Rover" className="projimage" /> 
        </div>

        </div>
    </div>
    </>
    )
}