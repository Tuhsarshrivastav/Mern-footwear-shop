import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const RegisterConplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    setEmail(window.localStorage.getItem("EmailforRegistration"));
  }, []);
  

  const completeregisterform = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
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
        </div>
      </div>
    </div>
  );
};

export default RegisterConplete;
