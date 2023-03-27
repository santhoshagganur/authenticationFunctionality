// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/">
      <li className="list-items"> Home </li>
    </Link>
    <Link to="/about">
      <li className="list-items"> About </li>
    </Link>
  </ul>
)

export default Header
