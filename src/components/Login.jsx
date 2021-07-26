import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";




const Login = () => {

  axios.defaults.withCredentials = true;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');
  let history = useHistory();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', 'Please enter email and password');
  };


  const checkValues = () => {

    setMessage('')

    axios.post('controle/userInfo/', {
      email: email,
      password: password
    })
    .then((result) => {
      
      sessionStorage.setItem('email', result.data.email);
      if (!result.data.userRole) {

        setMessage('Email or password incorrect!')
      }
      else if (result.data.userRole === 'admin') {

        console.log(sessionStorage)
        history.push("/admin");
      }
      else if (result.data.userRole === 'employe') {
        history.push("/employe");
      }
      else if (result.data.userRole === 'client') {
        history.push("/client");
      }
    });
  }

  return (
    <div className="login">
      <div className="container">
        <div style={{ width: '500px', padding: '10px', margin: '5px auto' }} >
          <Form
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={checkValues}
            onFinishFailed={onFinishFailed}
          >

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <h2>Login</h2>
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input onChange={e => setEmail(e.target.value)} />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!'

                },
              ]}
            >
              <Input.Password onChange={e => setPassword(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>


            <Form.Item
              wrapperCol={{
                offset: 9,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" >
                Login
              </Button>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 16,
              }}
            >
              <p style={{ color: 'red' }}>{message}</p>

            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}
export default Login;
