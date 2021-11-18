import { Menu } from "antd";
import {
  LoginOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const Navbar = () => {
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </SubMenu>
      <Menu.Item
        key="register"
        className="flot-right"
        icon={<UserAddOutlined />}
      >
        <Link to="/register">Register</Link>
      </Menu.Item>
      <Menu.Item key="login" icon={<LoginOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu> 
  );
};

export default Navbar;
