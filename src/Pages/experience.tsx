import esclogo from '../assets/esclogo.webp';
import ieeelogo from '../assets/ieeelogo.jpg';
import ggusdlogo from '../assets/ggusdlogo.jpeg';

export function Experience() {
    return (
    <>
        <br></br><br></br>
        <div className = "column">
            <div className = "experiencecontent">
                <br></br>
                <h1>Experience</h1>
                <div className = "experiencecontainer">
                    <img src={ieeelogo} alt="IEEE" className="alticon" />
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2><span className="altlefttext">Open Project Space Co-Lead | </span><span className="italic">IEEE Student Branch </span></h2>
                            <h2 className="altrighttext">Apr 2026 - Present</h2>
                        </div>
                        <h3 className="altlefttext light">• Will co-lead the Open Project Space program, developing project curriculum and lecturing students.</h3>
                        <div className="altrow">
                            <h2><span className="altlefttext">Open Project Space Lab Instructor | </span><span className="italic">IEEE Student Branch </span></h2>
                            <h2 className="altrighttext">Apr 2025 - Jun 2026</h2>
                        </div>
                        <h3 className="altlefttext light">• Developed ESP-32 labs covering UART, I2C, and SPI protocols, PWM actuator control, and firmware programming</h3>
                        <h3 className="altlefttext light">• Led workshops on THT soldering, PCB design in KiCad, and embedded C++ programming to teach hardware skills</h3>
                        <h3 className="altlefttext light">• Mentored 11 students in prototyping circuits from schematics and debugging, achieving 100% project completion</h3>
                    </div>
                </div>
                <div className = "experiencecontainer">
                    <img src={esclogo} alt="ESC" className="alticon" />
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2><span className="altlefttext">Vice President of Development | </span><span className="italic">Engineering Student Council </span></h2>
                            <h2 className="altrighttext">Apr 2026 - Present</h2>
                        </div>
                        <h3 className="altlefttext light">• Will lead ESC's LIFE program, mentoring ESC's next freshmen class.</h3>
                        <div className="altrow">
                            <h2><span className="altlefttext">Mentorship Co-Director | </span><span className="italic">Engineering Student Council </span></h2>
                            <h2 className="altrighttext">May 2025 - Jun 2026</h2>
                        </div>
                        <h3 className="altlefttext light">• Spearheaded mentorship program using spreadsheet-based engagement tracking to boost participation by 2x</h3>
                        <h3 className="altlefttext light">• Paired 90 mentors and mentees and coordinated events to strengthen engineering community engagement</h3>
                        <h3 className="altlefttext light">• Collaborated with VPs of Development to provide targeted workshops and skill-building for freshmen engineers</h3>
                    </div>
                </div>
                <div className = "experiencecontainer">
                    <img src={ggusdlogo} alt="GGUSD" className="alticon" />
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2><span className="altlefttext">College Mentor | </span><span className="italic">Garden Grove Unified School District</span></h2>
                            <h2 className="altrighttext">Oct 2024 - Present</h2>
                        </div>
                        <h3 className="altlefttext light">• Guided 250+ students through college applications and financial aid, improving overall completion rates by 30%</h3>
                        <h3 className="altlefttext light">• Mentored students on academic and career planning, helping them set goals and align coursework with opportunities</h3>
                        <h3 className="altlefttext light">• Tracked progress for 1000+ students using spreadsheets, providing support to at-risk students to improve outcomes</h3>
                    </div>
                </div>

                <h1>Technical Skills</h1>
                    <h3>Hardware: <span className="light">Digital Logic Design, Circuit Design/Analysis, PCB Design, Microcontrollers</span></h3>
                    <h3>Software/Programming: <span className="light">LTspice, Cadence Virtuoso, Altium, KiCAD, C/C++, Verilog HDL, Excel</span></h3>
                    <h3>Test Equipment: <span className="light">Multimeter, Digital Storage Oscilloscope</span></h3>
                    <h3>Manufacturing: <span className="light">THT/SMD Soldering, MIG Welding, Woodworking, Manual Fabrication</span></h3>

                <h1>Education</h1>
                <h3>B.S. Electrical Engineering, Minor in Biomedical Engineering</h3>
                <h3><span  className = "italic">University of California - Irvine | Expected Graduation: May 2028</span></h3>
                <br></br>

            </div>
        </div>
    </>
    )
}