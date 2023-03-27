// Write your JS code here
import './index.css'
import {Component} from 'react'

class Login extends Component {
  submitDetails = event => {
    const url = 'https://apis.ccbp.in/login'
  }

  render() {
    return (
      <div className="login-container">
        <h1> Please Login </h1>
        <button
          type="button"
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
