import PropTypes from "prop-types";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Login({setIsAuth}) {
  let navigate = useNavigate();
  
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then(() => {
      setIsAuth(true);
      navigate("/")
    })
  }

  return (
    <div className="login-container">
    <div className="loginPage">
      <p>Google ile giriş yap.</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
    </div>
  )
}

Login.propTypes = {setIsAuth: PropTypes.func}

export default Login 