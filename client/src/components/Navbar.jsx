import { Menu } from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
const { SubMenu } = Menu;

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  const [current, setCurrent] = useState("home");
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const { user } = useSelector((state) => ({ ...state }));
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<MailOutlined />}>
        <Link to="/">Home {JSON.stringify(user?.email)}</Link>
      </Menu.Item>

      {!user ? (
        <>
          <Menu.Item
            key="register"
            className="flot-right"
            icon={<UserAddOutlined />}
          >
            <Link to="/register">Register</Link>
          </Menu.Item>
          <Menu.Item
            key="login"
            icon={<LoginOutlined />}
            className="float-right"
          >
            <Link to="/login">Login</Link>
          </Menu.Item>
        </>
      ) : (
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
          <Menu.Item icon={<LogoutOutlined />} key="setting:3" onClick={logout}>
            Logout
          </Menu.Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Navbar;
