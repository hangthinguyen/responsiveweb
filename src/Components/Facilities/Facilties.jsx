import library from '../../images/library.png';
import basketball from '../../images/basketball.png';
import cafeteria from '../../images/cafeteria.png';
import './Facilities.css';

const Facilties = () => {
  return (
    <div className='facilities'>
        <h1>Our Global Campus</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="facilities-col">
            <img src={library} alt="library" />
            <h3>World Class Library</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad rerum voluptatum corporis maxime, qui eveniet nam?</p>
          </div>
          <div className="facilities-col">
            <img src={basketball} alt="basketball" />
            <h3>Largest Playground</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad rerum voluptatum corporis maxime, qui eveniet nam?</p>
          </div>
          <div className="facilities-col">
            <img src={cafeteria} alt="cafeteria" />
            <h3>Tasty and Healthy Food</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad rerum voluptatum corporis maxime, qui eveniet nam?</p>
          </div>
        </div>
    </div>
  )
}

export default Facilties