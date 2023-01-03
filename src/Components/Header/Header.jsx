import NavBar from '../NavBar/NavBar';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <NavBar />
      <div className="text-box">
        <h1>World's Biggest University</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi magnam in, dolores iste a ut? <br/> Soluta nulla quia numquam.</p>
        <a href="/" className='hero-btn'>Visit Us To Know More</a>
      </div>
    </div>
  )
}

export default Header