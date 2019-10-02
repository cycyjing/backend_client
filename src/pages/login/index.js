import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import './login.less'
import logo from '../../images/login/logo.png'
class Login extends Component {
  handleSubmit = e => {
    const { getFieldsValue } = this.props.form
    e.preventDefault();
    const params = getFieldsValue()
    console.log(params)
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt='' />
          <h1>React Project: Management System</h1>
        </header>
        <section className='login-content'>
          <h2>Log in</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [
                  {required:true,message:'Please input username'},
                  {min:4,message:'Please input username at least 4 characters'},
                  {max:12,message:'Please input username no more than 12 characters'},
                  {pattern:/^[a-zA-Z0-9]+$/,message:'Please input username with letter, number and under dash'},
                ]
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password',{
                rules:[
                  {required:true,message:'Please input password'},
                  {min:6,message:'Please input password at least 6 characters'},
                  {max:20,message:'Please input password no more than 20 characters'},
                ]
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />
              )}
            </Form.Item>
            <Form.Item>

              <Button type="primary" htmlType="submit" className="login-form-button">
                Login
              </Button>
            </Form.Item>
          </Form>

        </section>
      </div>
    )
  }
}
const WrapLogin = Form.create()(Login)
export default WrapLogin