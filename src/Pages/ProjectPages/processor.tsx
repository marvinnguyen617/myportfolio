import processor2 from '../../assets/processor2.png';

export function Processor() {
    return (
        <>
    <br></br><br></br>
    <div className="column">
        <div className = "experiencecontent">
        <br></br>
        <h1>RISC-V Single Cycle Processor</h1>
            
        <div className = "experiencecontainer"><div className="projtextcontainer"><div className="altrow">
        <h3>In my freshmen year of spring, I took the class EECS 31L, which covered digital logic design in Verilog HDL. I will link the project repository <a href="https://github.com/marvinnguyen617/Single-Cycle-RISC-V-Processor" className="projlink">here</a>, which covers all relevant documentation.</h3>
        </div></div></div>

        <div className = "experiencecontainer">
        <img src={processor2} alt="processor" className="projimage" />
        </div>

        </div>
    </div>
    </>
    )
}