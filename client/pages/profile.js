import classes from '../styles/profile.module.css'; 
import { useContext } from 'react';
import { Avatar, Form, Space, Select, Input, Button } from "antd";
const { Option } = Select;
const { TextArea } = Input;

import AuthContext from '@/store/authContext';

export default function profile(){

    const authCTX = useContext(AuthContext);

    const profileCreate = () => {
        console.log(authCTX.isLoggedIn);
    };

    return (
        <div className={classes.profileWrapper}>
            <Space direction="vertical" size="large" className={classes.spaceProfile}>
                <Avatar size={256} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                <Form  labelCol={{ span: 4 }} layout="horizontal" onFinish={profileCreate} >
                    <Form.Item>
                        <Input placeholder="Enter your Name"/>
                    </Form.Item>
                    <Form.Item name="gender" rules={[{ required: true }]}>
                        <Select style={{ textAlign:"left" }} placeholder="Select your gender"
                            // onChange={onGenderChange}
                            allowClear
                            >
                            <Option value="male">Male</Option>
                            <Option value="female">Female</Option>
                            <Option value="other">Other</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <TextArea placeholder="Write a short bio" allowClear/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" block className={classes.createButton} htmlType="submit"><h5>Submit Profile</h5></Button>
                    </Form.Item>
                </Form>
                
            </Space>
        </div>
    );
};