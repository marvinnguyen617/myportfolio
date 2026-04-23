import bloomblocker from '../../assets/bloomblocker.jpg';

export function BloomBlocker() {
    return (
        <div className="column">
        <h1>BloomBlocker</h1>
        <img src={bloomblocker} alt="BloomBlocker" className="contentimage" />
            <p>My team's 3rd place submssion for ESC's LIFETank.</p>
        </div>
    )
}