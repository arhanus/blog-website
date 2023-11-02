import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import Login from "./pages/Login"
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import "./App.css"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "./firebase-config"


function App() {
  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () => {
    signOut(auth).then(()=> {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"
    })
  }
  return (
    <>
      <Router>
        <nav>
          <Link to={"/"}>Anasayfa</Link>
          <Link to={"/tartisma-baslat"}>Tartışma Başlat</Link>
          {!isAuth ? <Link to={"/giris"}>Giriş</Link> : <button className="logOutBtn" onClick={signUserOut}>Çıkış</button>}
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/tartisma-baslat" element={<CreatePost isAuth = {isAuth}/>}></Route>
          <Route path="/giris" element={<Login setIsAuth = {setIsAuth}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
