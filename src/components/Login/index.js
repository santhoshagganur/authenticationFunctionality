// Write your JS code here
import './index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'

class Login extends Component {
  onSuccess = jwtToken => {
    const {history} = this.props

    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 1})
  }

  submitDetails = async event => {
    event.preventDefault()
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure()
    }
  }

  render() {
    return (
      <div className="login-container">
        <h1> Please Login </h1>
        <button
          type="submit"
          className="login-button"
          onClick={this.submitDetails}
        >
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
