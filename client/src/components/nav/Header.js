import React, { useState } from "react";
import { Menu } from "antd";
import {
  LoginOutlined,
  LogoutOutlined,
  HomeOutlined,
  SettingOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";

const { SubMenu, Item } = Menu;

const Header = () => {
  const handleClick = (e) => {
    setCurrent(e.key);
  };
  const [current, setCurrent] = useState("home");
  let dispatch = useDispatch();

  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();
  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode='horizontal'>
      <Item key='home' icon={<HomeOutlined />}>
        <Link to='/'>Home</Link>
      </Item>
      {!user && (
        <Item key='register' icon={<UserAddOutlined />} className='float-right'>
          <Link to='/register'>Register</Link>
        </Item>
      )}
      {!user && (
        <Item key='login' icon={<LoginOutlined />} className='float-right'>
          <Link to='/login'>Login</Link>
        </Item>
      )}
      {user && (
        <SubMenu
          key='SubMenu'
          icon={<SettingOutlined />}
          title={user.email && user.email.split("@")[0]}
          className='float-right'
        >
          <Item key='setting:1'>Option 1</Item>
          <Item key='setting:2'>Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </SubMenu>
      )}
    </Menu>
  );
};

export default Header;
