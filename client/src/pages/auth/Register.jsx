import React, { useState,useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const Register = ({history}) => {
  const [email, setEmail] = useState("");

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  });
  const registerform = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const config = {
        url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
        handleCodeInApp: true,
      };
      await auth.sendSignInLinkToEmail(email, config);
      toast.success(
        `Email is send to ${email}. Click the link to complete registration`
      );
      //   save user email in localstorage
      window.localStorage.setItem("EmailforRegistration", email);

      // clear state
      setEmail("");
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
          disabled={!email}
        >
          Register with Email Password
        </Button>
      </form>
    );
  };
  return (
    <div style={{ marginTop: "110px" }} className="container p-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          {registerform()}
        </div>
      </div>
    </div>
  );
};

export default Register;
