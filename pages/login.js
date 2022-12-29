import { useEffect, useState } from 'react';
import { Alert, Button, Checkbox, Form, Input } from 'antd'
import { apiClient } from '../shared/apiClient';
import { useRouter } from 'next/router';
import { setCookie,getCookie } from 'cookies-next';
import coverImage from '../styles/assets/login-cover.png'
import Image from 'next/image';

export default function LoginPage() {
    
    let router = useRouter()

    useEffect(()=>{
        let user = getCookie('user')
        if(user){
            router.back()
        }
    },[router])

    const [errMsg,setErrMsg] = useState()

    const onFinish = (values) => {
        setCookie('user',true)
        router.push('/dashboard')
    };

    return (
        <div className="login-page">
            <div className="login-box">
                <div className="illustration-wrapper">
                    <Image src={coverImage} alt="Login" height={500} width={"100%"}/>
                </div>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    size="large"
                // onFinishFailed={onFinishFailed}
                >
                    <p className="form-title">Welcome back</p>
                    <p>Login to the Dashboard</p>
                    {errMsg &&<Alert type='error' message="Hurra" style={{marginBottom:'15px'}} closable closeIcon/>}
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button size='large' type="primary" htmlType="submit" className="login-form-button">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
