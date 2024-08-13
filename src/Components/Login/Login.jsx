import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message } from 'antd'
import { useNavigate } from 'react-router';
import axios from 'axios';
import Rasm from "../images/qulf.png"
import "./Login.css"

const Login = () => {
    const [phone,setPhone] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate()
    const Registr = () =>{
        axios({
            url:'https://autoapi.dezinfeksiyatashkent.uz/api/auth/signin/',
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            data:{
                phone_number:phone,
                password:password
            }
            })
            .then(res=>{
            if(res.data.success){
                localStorage.setItem('token',res?.data?.data?.tokens?.accessToken?.token)
                message.success("Siz Tizimga Kirdingiz")
                navigate('/home')
            }
            })
           .catch(err=>{message.error("Xatolik")
        })
    }
  return (
    <div className='login'>
        <div className='container login-container'>
            <ul className='login-list'>
                <img className='login-img' src={Rasm} alt="" />
                <Form className='login-form'
                        name="basic"
                        labelCol={{span: 8,}}
                        wrapperCol={{span: 16,}}
                        style={{maxWidth: 400,}}
                        initialValues={{remember: true,}}
                        autoComplete="off"
                        onFinish={Registr}
                    >
                    <Form.Item className='login-item'
                        label="Username"
                        name="username"
                        rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                    >
                    <Input className='login-input' onChange={(e) =>setPhone(e.target.value)}/>
                    </Form.Item>
                    <Form.Item className='login-item'
                        label="Password"
                        name="password"
                        rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    >
                    <Input.Password className='login-input' onChange={(e) =>setPassword(e.target.value)} />
                    </Form.Item>
                    <Form.Item 
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{offset: 8,span: 16,
                        }}
                        >
                    <Button className='login-btn' htmlType="submit">Submit</Button>
                    </Form.Item>
                </Form>
            </ul>
        </div>
    </div>
  )
}

export default Login
