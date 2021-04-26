import React, {useEffect, useState} from "react";
import {Menu} from "antd";
import {Link} from "react-router-dom";
import {CalendarOutlined, HomeOutlined,} from "@ant-design/icons";
import {observer} from "mobx-react-lite";
import {useStore} from "../../utils/useStore";

const {SubMenu} = Menu;

export const MenuList = observer((props) => {
	const store = useStore();
	useEffect(() => {
	}, []);

	const [setKeys, setSetKeys] = useState(["dashboard"]);

	return (
		<Menu
			defaultOpenKeys={["sub4"]}
			theme="light"
			style={{
				backgroundColor: "transparent",
				borderRightWidth: 0,
				fontWeight: 400,
				paddingLeft: 0,
			}}
			onClick={({keyPath, item}) => {
				props.closeLeftDrawer();
			}}
			mode="inline"
			selectedKeys={setKeys}
			onSelect={({setKeys, item, selectedKeys}) => setSetKeys(selectedKeys)}
			overflowedIndicator={0}
			forceSubMenuRender={true}
		>
			<Menu.Item key="home">
				<Link to={'/app/home'}>
					<HomeOutlined/>
					<span>Home</span>
				</Link>
			</Menu.Item>
			<Menu.Item key="about">
				<Link to={'/app/about'}>
					<CalendarOutlined/>
					<span>About</span>
				</Link>
			</Menu.Item>
			<Menu.Divider style={{background: "transparent", paddingTop: 15}}/>
		</Menu>
	);
});
