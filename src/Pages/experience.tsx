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
                        <p className="altlefttext">• Will co-lead the Open Project Space program, developing project curriculum and lecturing students.</p>
                        <div className="altrow">
                            <h2><span className="altlefttext">Open Project Space Lab Instructor | </span><span className="italic">IEEE Student Branch </span></h2>
                            <h2 className="altrighttext">Apr 2025 - Jun 2026</h2>
                        </div>
                        <p className="altlefttext">• Developed ESP-32 labs covering UART, I2C, and SPI protocols, PWM actuator control, and firmware programming</p>
                        <p className="altlefttext">• Led workshops on THT soldering, PCB design in KiCad, and embedded C++ programming to teach hardware skills</p>
                        <p className="altlefttext">• Mentored 11 students in prototyping circuits from schematics and debugging, achieving 100% project completion</p>
                    </div>
                </div>
                <div className = "experiencecontainer">
                    <img src={esclogo} alt="ESC" className="alticon" />
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2><span className="altlefttext">Vice President of Development | </span><span className="italic">Engineering Student Council </span></h2>
                            <h2 className="altrighttext">Apr 2026 - Present</h2>
                        </div>
                        <p className="altlefttext">• Will lead ESC's LIFE program, mentoring ESC's next freshmen class.</p>
                        <div className="altrow">
                            <h2><span className="altlefttext">Mentorship Co-Director | </span><span className="italic">Engineering Student Council </span></h2>
                            <h2 className="altrighttext">May 2025 - Jun 2026</h2>
                        </div>
                        <p className="altlefttext">• Spearheaded mentorship program using spreadsheet-based engagement tracking to boost participation by 2x</p>
                        <p className="altlefttext">• Paired 90 mentors and mentees and coordinated events to strengthen engineering community engagement</p>
                        <p className="altlefttext">• Collaborated with VPs of Development to provide targeted workshops and skill-building for freshmen engineers</p>
                    </div>
                </div>
                <div className = "experiencecontainer">
                    <img src={ggusdlogo} alt="GGUSD" className="alticon" />
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2><span className="altlefttext">College Mentor | </span><span className="italic">Garden Grove Unified School District</span></h2>
                            <h2 className="altrighttext">Oct 2024 - Present</h2>
                        </div>
                        <p className="altlefttext">• Guided 250+ students through college applications and financial aid, improving overall completion rates by 30%</p>
                        <p className="altlefttext">• Mentored students on academic and career planning, helping them set goals and align coursework with opportunities</p>
                        <p className="altlefttext">• Tracked progress for 1000+ students using spreadsheets, providing support to at-risk students to improve outcomes</p>
                    </div>
                </div>

                <h1>Skills</h1>
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2 className="altlefttext">Hardware: </h2>
                        </div>
                        <p className="altlefttext">Digital Logic Design, Circuit Design/Analysis, PCB Design, Microcontrollers, THT/SMD Soldering</p>
                    </div>
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2 className="altlefttext">Software/Programming: </h2>
                        </div>
                        <p className="altlefttext">LTspice, Altium, KiCAD, C/C++, Verilog HDL, Excel</p>
                    </div>
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2 className="altlefttext">Test Equipment: </h2>
                        </div>
                        <p className="altlefttext">Multimeter, Digital Storage Oscilloscope</p>
                    </div>
                    <div className="alttextcontainer">
                        <div className="altrow">
                            <h2 className="altlefttext">Manufacturing: </h2>
                        </div>
                        <p className="altlefttext">MIG Welding, Woodworking, Manual Fabrication</p>
                    </div>
           
                <h1>Education</h1>
                <h2>B.S. Electrical Engineering, Minor in Biomedical Engineering</h2>
                <h2>University of California - Irvine | Expected Graduation: May 2028</h2>
                <br></br>
            </div>
        </div>
    </>
    )
}