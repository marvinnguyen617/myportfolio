import rocklock1 from '../../assets/rocklock1.png';
import rocklock2 from '../../assets/rocklock2.jpg';

export function RockLock() {
    return (
        <>
    <br></br><br></br>
    <div className="column">
        <div className = "experiencecontent">
        <br></br>
        <h1>RockLock: Climbing Companion</h1>
            
        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>This project was made for EngiTank, a SharkTank-style team competition where we researched and designed a device 
            that was then pitched to a panel of judges. During my freshman year, on a whim, I decided to ask a random group of 
            upperclassmen about whether they had a spot available in their team. 
        </h3>
        </div></div></div>
        
        <div className = "experiencecontainer">
        <img src={rocklock1} alt="Rover" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>While in the research and design phase of the project, my team and I settled on rock climbers as our area of focus. 
            Our idea was to implement a climbing anchor point integrity tester, which would help to reduce anchorage-related mortalities. 
            <br></br><br></br>In my research, I stumbled upon the theory of a “half-cell voltage test,” which involved taking the voltage 
            across metal and a reference electrode to detect leaking voltage. Since the redox reaction of iron oxidizing emitted electrons, 
            we could theoretically read this in a small voltage difference as a anchor bolt was actively rusting, reducing its integrity.
            <br></br><br></br>The idea was as follows: 
            <br></br>1. Voltage, using an external ADC, would be measured across a bolt and reference AgCl electrode
            <br></br>3. Measurements would be processed and averaged within an ESP32 microcontroller
            <br></br>3. Results would be printed onto a LCD

            <br></br><br></br>One of my main constraints working on this project was budget. Specifically, the AgCl electrode costed $50, 
            which meant I would need to be incredibly resourceful with the rest of my BOM. I did end up buying an ADS1115 ADC 
            because it had more sampling resolution, which was crucial to measuring the leaking voltage to mV precision.
        </h3>
        </div></div></div>

        <div className = "experiencecontainer">
        <img src={rocklock2} alt="Rover" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>With our outstanding research and idea novelty, we placed 3rd. My teammates were incredibly helpful to me in this learning process. 
            One helped with debugging software, while the other developed an enclosure for the electronics. I'm very grateful that I was able to work with them.</h3>
        </div></div></div>
        
        </div>
    </div>
    </>
    )
}