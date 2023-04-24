import { useRef, useContext } from 'react';
import classes from '../styles/create.module.css';
import { Space, Button, Typography, Input, Form } from "antd";
const { Title, Paragraph, Text } = Typography;
import Link from 'next/link';
import GoogleOutlined from '@ant-design/icons/GoogleOutlined';

import { useRouter } from 'next/router';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase-config";

import AuthContext from '@/store/authContext';

export default function create(){

    const router = useRouter();
    const errorRef = useRef();

    const { isLoggedIn, userUID, login } = useContext(AuthContext);

    const register = (event, registerCTX) => {
        let user;
        createUserWithEmailAndPassword(auth, event.email, event.password).then((userCredentials) => 
        {
            // registerCTX.login(userCredentials.user.uid);
            router.push("/profile");
        })
        .catch((error) => {
            errorRef.current.innerHTML = error.message;
        });
    };

    return (
        <div className={classes.createWrapper}>
            <Space direction="vertical" size="large" className={classes.spaceIndex} block="true">
                <Typography>
                    <Title level={3}>Create an account</Title>
                </Typography>
                <Form onFinish={() => login} scrollToFirstError>
                    <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!' },
                                                                          { required: true, message: 'Please enter your email address!' }]} >
                        <Input placeholder="Enter Email ID"/>
                    </Form.Item>
                    <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!'}]} hasFeedback>
                        <Input.Password placeholder="Enter Password"/>
                    </Form.Item>
                    <Form.Item name="confirm" dependencies={['password']} hasFeedback rules={[
                                                                                        { required: true, message: 'Please confirm your password!'},
                                                                                        ({ getFieldValue }) => ({ validator(_, value) {
                                                                                            if (!value || getFieldValue('password') === value) {
                                                                                                return Promise.resolve();
                                                                                            }
                                                                                            return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                                                                            } }), ]} >
                        <Input.Password placeholder="Confirm Password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block className={classes.createButton} htmlType="submit"><h5>Create an account</h5></Button>
                    </Form.Item>
                    <Text ref={errorRef} type="danger"></Text>
                </Form>
                
                <Link href="/login" className={classes.existingLink}><h5><u>Already have an account?</u></h5></Link>
                <Button type="primary" block className={classes.googleButton} icon={<GoogleOutlined/>}><Link href="/create"><h5>Create an account with Google</h5></Link></Button>
            </Space>
        </div>
    );
};