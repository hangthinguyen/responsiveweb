import { faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <h1>What Our Students Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className="row">
          <div className="testimonials-col">
            <img src={user1} alt="user1" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est velit fugiat asperiores reiciendis debitis officia sit! Mollitia ab, eaque minima quasi eligendi, aspernatur quisquam in magni iusto ipsum modi dolorum?</p>
              <h3>Christine Berkley</h3>
              <FontAwesomeIcon icon={faStar} className='star' />
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStarHalfStroke} className='star'/>
            </div>
          </div>
          <div className="testimonials-col">
            <img src={user2} alt="user2" />
            <div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est velit fugiat asperiores reiciendis debitis officia sit! Mollitia ab, eaque minima quasi eligendi, aspernatur quisquam in magni iusto ipsum modi dolorum?</p>
              <h3>David Byer</h3>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
              <FontAwesomeIcon icon={faStar} className='star'/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Testimonials