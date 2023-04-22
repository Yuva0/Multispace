import classes from '../styles/spaces.module.css';

import { Space, Typography, Button, Avatar, FloatButton } from "antd";
const { Title, Paragraph, Text } = Typography;
import { PlusOutlined } from '@ant-design/icons';

export default function Spaces(){
    return (
        <div className={classes.spaceWrapper}>
            <Space direction="vertical" size="large" className={classes.spacesSpace}>
                <Title>My Spaces</Title>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
                <Button className={classes.spaceButton} type="primary" style={{ padding:"0 4px", borderRadius:"80px", width:"100%" }}>
                    <Avatar size={108} src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"/>
                    <Space direction="vertical" size={0} style={{textAlign:"left", marginLeft:"32px"}}>
                        <Title level={3} className={classes.spaceTitle}>Sharing Is Caring</Title>
                        <Title level={5}>5 members</Title>
                    </Space>
                </Button>
            </Space>
            <FloatButton className={classes.addSpace} icon={<PlusOutlined/>} style={{ right: 40 }}/>
        </div>
    );
};