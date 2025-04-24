import './SassStyling.scss';

const SassStyling = () => {
    return (
        <div id='sassComponent'>
            <h2>sass styling</h2>

            <div id="sassContainer">
                <h4>mano sass bandymas</h4>
                <p className='sassLoremText'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus asperiores vero maiores dolores quia sapiente ipsum cum praesentium repellendus iste nobis nam beatae, corporis, accusantium dolorem mollitia ab est. Fuga!</p>
                <button className='btn-click'>Click me</button>
            </div>

            <div className='sassLinks'>
                <ul>
                    <li><a className='link'>pvz</a></li>
                    <li><a className='link'>example</a></li>
                </ul>
            </div>
        </div>
    )
};

export default SassStyling;