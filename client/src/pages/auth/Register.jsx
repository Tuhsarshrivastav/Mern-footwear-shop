import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const registerform = () => {
    const handleSubmit = () => {};
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
        <div className="col-md-6 offset-md-3">{registerform()}</div>
      </div>
    </div>
  );
};

export default Register;
