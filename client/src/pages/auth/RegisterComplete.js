import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { CreateOrUpdate } from "../../functions/auth";

const RegisterComplete = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  let dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation
    if (!email || !password) {
      toast.error("Email and Password required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be 6 characters");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        // remove user email from localstorage
        window.localStorage.removeItem("EmailForRegistration");
        let user = auth.currentUser;
        await user.updatePassword(password);
        // get user id token
        const idTokenResult = await user.getIdTokenResult();
        // redux store
        CreateOrUpdate(idTokenResult.token)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
        // redirect
        history.push("/");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    setEmail(window.localStorage.getItem("EmailForRegistration"));
  }, []);
  const completeRegisterForm = () => (
    <form onSubmit={handleSubmit}>
      <input type='email' className='form-control' value={email} disabled />
      <input
        type='password'
        className='form-control'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoFocus
      />
      <br />
      <button type='submit' className='btn btn-raised'>
        Complete Registration
      </button>
    </form>
  );

  return (
    <div className='container p-5'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <h4>Register Complete</h4>
          {completeRegisterForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
