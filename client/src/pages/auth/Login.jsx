import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerform = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
    };
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            placeholder="Your Password"
          />
        </div>
        <Button
          onClick={handleSubmit}
          type="primary"
          className="mb-3"
          block
          shape="round"
          size="large"
          icon={<MailOutlined />}
          disabled={!email || password.length < 6}
        >
          Login with Email Password
        </Button>
      </form>
    );
  };
  return (
    <div style={{ marginTop: "110px" }} className="container p-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Login</h4>
          {registerform()}
        </div>
      </div>
    </div>
  );
};

export default Login;
