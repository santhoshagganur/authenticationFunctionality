// Write your JS code here
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-container">
      <h1> About Route </h1>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </>
)

export default About
