import React, { Component } from 'react'
import './login.less'
import logo from '../../images/login/logo.png'
export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt=''/>
          <h1>React Project</h1>
        </header>
        <section className='login-content'>
          <header>Login</header>
          FORM 
        </section>
      </div> 
    )
  }
}