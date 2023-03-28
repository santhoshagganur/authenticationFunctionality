// Write your JS code here
import './index.css'
import Cookies from 'js-cookie'

const LogoutButton = props => {
  const {history} = props
  const onLogout = () => {
    Cookies.remove('jwt_token')
    history.replace('/')
  }

  return (
    <button className="logout-button" type="submit" onClick={onLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
