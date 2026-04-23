import processor from '../../assets/processor.png';

export function Processor() {
    return (
        <div className="main">
        <h1>Processor</h1>
        <img src={processor} alt="Processor" className="contentimage" />
            <p>Capstone project for EECS 31L, a digital logic design.</p>
        </div>
    )
}