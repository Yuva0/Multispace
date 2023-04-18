import classes from '../styles/login.module.css';
import { Space, Typography, Button, Input, Form } from 'antd';
const { Title } = Typography;
import Link from 'next/link';

import { useRouter } from 'next/router';

import { auth } from "../firebase-config";

import GoogleOutlined from '@ant-design/icons/GoogleOutlined';

export default function login(){

    const router = useRouter();

    return (
        <div className={classes.loginWrapper}>
            <Space direction="vertical" size="large" className={classes.spaceIndex} block="true">
                <Typography>
                    <Title level={3}>Login to existing account</Title>
                </Typography>
                <Form onFinish={login} scrollToFirstError>
                    <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!' },
                                                                        { required: true, message: 'Please enter your email address!' }]} >
                        <Input placeholder="Enter Email ID"/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]} hasFeedback>
                        <Input.Password placeholder="Enter Password"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block className={classes.createButton} htmlType="submit"><h5>Login</h5></Button>
                    </Form.Item>
                </Form>
                <Link href="/register" className={classes.newLink}><h5><u>Dont have an account? Register now</u></h5></Link>
                <Button type="primary" block className={classes.googleButton} icon={<GoogleOutlined/>}><Link href="/create"><h5>Login with Google</h5></Link></Button>
            </Space>
        </div>
    );
};