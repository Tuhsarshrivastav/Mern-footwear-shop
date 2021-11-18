import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
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
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />
        <button type="submit" className="btn btn-raised">
          Register
        </button>
      </form>
    );
  };
  return (
    <div className="container p-5">
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
