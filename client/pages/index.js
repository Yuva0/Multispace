import Image from "next/image";
import classes from '../styles/index.module.css'
import planets from '../assets/planets.png';
import { Space, Button, Typography } from "antd";
import Link from "next/link";
const { Title, Paragraph, Text } = Typography;
import { AuthContext } from '../store/authContext';

export default function HomePage(){
  return (
    <div className={classes.homepageWrapper}>
		<AuthContext>
			<Space direction="vertical" size="large" className={classes.spaceIndex} block="true">
				<Image className={classes.homepageImg} src={planets} alt="Planets"/>
				<Typography>
					<Space direction="vertical" size={4}>
						<Title level={3}>Welcome</Title>
						<Title level={3}>to</Title>
						<Title level={1}>Multispace</Title>
					</Space>
					<Text className={classes.description}><h5>An online chat community where you can talk to anyone and everyone by creating separate spaces</h5></Text>
				</Typography>
				<Button type="primary" block className={classes.createButton}><Link href="/register"><h5>Create an account</h5></Link></Button>
				<Link href="/login" className={classes.existingLink}><h5><u>Already have an account?</u></h5></Link>
			</Space>
		</AuthContext>
    </div>
  );
};