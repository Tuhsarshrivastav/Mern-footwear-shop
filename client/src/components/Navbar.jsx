import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { SubMenu } = Menu;
const Navbar = () => {
  const [current, setState] = useState("");
  const handleClick = () => {};
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        Navbar
      </Menu.Item>

      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Register"
      >
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Navbar;
