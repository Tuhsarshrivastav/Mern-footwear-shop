import React, { useState } from "react";
import UserNav from "../../components/nav/UserNav";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const Password = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(password);
    await auth.currentUser
      .updatePassword(password)
      .then(() => {
        setLoading(false);
        setPassword("");
        toast.success("Password updated");
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message);
      });
  };

  const passwordUpdateForm = () => (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Enter your new password'
          className='form-control'
          value={password}
          disabled={loading}
        />
        <button
          className='btn btn-primary'
          disabled={!password || password.lenght < 6 || loading}
        >
          Submits
        </button>
      </div>
    </form>
  );

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <UserNav />
        </div>
        <div className='col'>
          {loading ? <h4>Loading...</h4> : <h4>Password Update</h4>}
          {passwordUpdateForm()}
        </div>
      </div>
    </div>
  );
};

export default Password;
