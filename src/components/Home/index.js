// Write your JS code here
import './index.css'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <h1> Home Route </h1>
      <button className="logout-button" type="button">
        Logout
      </button>
    </div>
  </>
)

export default Home
