import bloomblocker from '../../assets/bloomblocker.jpg';
import bloomblocker2 from '../../assets/bloomblocker2.jpg';

export function BloomBlocker() {
    return (
       <>
    <br></br><br></br>
    <div className="column">
        <div className = "experiencecontent">
        <br></br>
        <h1>BloomBlocker</h1>
            
        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>This project was made for LIFETank, another SharkTank-style team competition where we researched and designed a device 
            that was then pitched to a panel of judges. As a member of ESC's LIFE program, I was placed with three other engineering freshmen, 
            and was tasked with design and pitching a device we created. 
        </h3>
        </div></div></div>
        
        <div className = "experiencecontainer">
        <img src={bloomblocker} alt="BloomBlocker" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>This project was made for LIFETank, another SharkTank-style team competition where we researched and designed a device 
            that was then pitched to a panel of judges. As a member of ESC's LIFE program, I was placed with three other engineering freshmen, 
            and was tasked with design and pitching a device we created.
            <br></br><br></br>When researching algal blooms, we discovered that one of the limiting reactants that enabled algal blooms was phosphate. 
            As such, we wanted to create an autonomous buoy that could measure phosphate concentrations in water, and notify a ground station of algal bloom risk.
            <br></br><br></br>I was the sole person responsible for the electronics. The project leaned more theoretical, but the idea was to create an autonomous 
            logic to allow the buoy to navigate a predetermined route. My idea was to hard code the route with predefined motor movements, which would loop 
            continuously until it was time to charge. In hindsight, this idea was not as robust as I would've liked since I could have implemented a GPS to better 
            align the buoy, preventing interference from water waves.
        </h3>
        </div></div></div>

        <div className = "experiencecontainer">
        <img src={bloomblocker2} alt="BloomBlocker" className="projimage" />
        </div>

        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>Our device leaned more theoretially, since a phosphate sensor would cost thousands. In spite of that, we placed 3rd because of our unique idea. 
            One of my teammates cadded and 3-D printed an enclosure for the buoy, which looks amazing. Overall, this was another interesting experience that taught me 
            much about the engineering design process.</h3>
        </div></div></div>
        
        </div>
    </div>
    </>
    )
}