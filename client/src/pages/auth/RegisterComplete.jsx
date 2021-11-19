import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterConplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setEmail(window.localStorage.getItem("EmailforRegistration"));
  }, []);

  const completeregisterform = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!email && !password) {
        toast.error("Email and Password is Required");
        return;
      }
      if (password.length < 6) {
        toast.error("Password must be 6 Characters");
        return;
      }
      try {
        const result = await auth.signInWithEmailLink(
          email,
          window.location.href
        );
        if (result.user.emailVerified) {
          window.localStorage.removeItem("EmailforRegistration");
          let user = auth.currentUser;
          await user.updatePassword(password);
          await user.getIdTokenResult();
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" value={email} disabled />
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          autoFocus
        />
        <button type="submit" className="btn btn-raised">
          Complete Registration
        </button>
      </form>
    );
  };
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register Complete</h4>
          {completeregisterform()}

          <Link to="/register">
            <h5>Want to Chnage Email ?</h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterConplete;
