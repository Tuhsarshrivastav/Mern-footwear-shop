import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { GoogleOutlined, MailOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const googleLogin = async () => {
    auth
      .signInWithPopup(provider)
      .then(async (result) => {
        const { user } = result;
        const idtokenResult = await user.getIdTokenResult;
        dispatch({
          type: "LOGGED_IN__USER",
          payload: {
            email: user.email,
            token: idtokenResult.token,
          },
        });
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  const registerform = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const result = await auth.signInWithEmailAndPassword(email, password);
        const { user } = result;
        const idtokenResult = await user.getIdTokenResult;
        dispatch({
          type: "LOGGED_IN__USER",
          payload: {
            email: user.email,
            token: idtokenResult.token,
          },
        });
        history.push("/");
      } catch (error) {
        console.log(error);
        toast.error(error.message);
        setLoading(false);
      }
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
          disabled={!email || password.length < 6 || loading}
        >
          {loading ? "Please Wait " : "Login with Email Password"}
        </Button>
      </form>
    );
  };
  return (
    <div style={{ marginTop: "110px" }} className="container p-5 ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {loading ? (
            <h4 className="text-danger">Loading...</h4>
          ) : (
            <h4>Login</h4>
          )}
          {registerform()}
          <Button
            onClick={googleLogin}
            type="danger"
            className="mb-3"
            block
            shape="round"
            size="large"
            icon={<GoogleOutlined />}
          >
            Login With Google
          </Button>
          <Link to="forgot/password" className="float-right text-danger">
            Forgot Password{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
