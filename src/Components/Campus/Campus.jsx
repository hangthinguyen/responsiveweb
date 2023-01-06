import london from '../../images/london.png';
import newyork from '../../images/newyork.png';
import washington from '../../images/washington.png';
import './Campus.css';

const Campus = () => {
  return (
    <div className='campus'>
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
            <div className="campus-col">
                <img src={london} alt="london" />
                <div className="layer">
                    <h3>LONDON</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src={newyork} alt="london" />
                <div className="layer">
                    <h3>NEW YORK</h3>
                </div>
            </div>
            <div className="campus-col">
                <img src={washington} alt="london" />
                <div className="layer">
                    <h3>WASHINGTON</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Campus