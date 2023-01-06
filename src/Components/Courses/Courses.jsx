import './Courses.css';

const Courses = () => {
  return (
    <div className='courses'>
        <h1>Courses We Offer</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <div className="row">
            <div className="course-col">
                <h3>Intermediate</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nesciunt nobis magni ab debitis quo ad doloremque iste suscipit.</p>
            </div>
            <div className="course-col">
                <h3>Degree</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nesciunt nobis magni ab debitis quo ad doloremque iste suscipit.</p>
            </div>
            <div className="course-col">
                <h3>Post Graduation</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nesciunt nobis magni ab debitis quo ad doloremque iste suscipit.</p>
            </div>
        </div>
    </div>
  )
}

export default Courses