import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import RegisterComplete from "./pages/auth/RegisterComplete";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import forgotPassword from "./pages/auth/ForgotPassword";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idtokenResult = await user.getIdTokenResult();
        
        dispatch({
          type: "LOGGED_IN__USER",
          payload: {
            email: user.email,
            token: idtokenResult.token,
          },
        });
      }
    });
    // clean up
    return () => unsubcribe;
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/forgot/password" component={forgotPassword} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
      </Switch>
    </Router>
  );
}

export default App;
