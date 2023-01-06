import Header from './Components/Header/Header';
import './App.css';
import Courses from './Components/Courses/Courses';
import Campus from './Components/Campus/Campus';
import Facilties from './Components/Facilities/Facilties';
import Testimonials from './Components/Testimonials/Testimonials';
import CTA from './Components/CTA/CTA';

function App() {
  return (
    <div className="App">
      <Header />
      <Courses />
      <Campus />
      <Facilties />
      <Testimonials />
      <CTA />
    </div>
  );
}

export default App;
