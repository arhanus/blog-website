import { useState } from "react";
import { db, auth } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const navigate = useNavigate();

  const postCollection = collection(db, "posts");

  
    const createPostFunc = async () => {
      if(isAuth === true && title != "" && postText != "") {
      await addDoc(postCollection, {
        title,
        postText,
        author: auth.currentUser.displayName
      });
      navigate("/");
    }
    else if(isAuth === false) {
      alert("You must be logged in to create a post.")
      navigate("/giris")
    }
    else if (title == ""){
      alert("Lütfen bir başlık giriniz...")
    }
    else if (postText == ""){
      alert("Lütfen bir metin giriniz...")
    }
  }
  

  return (
    <div className="createPostPage">
      <div className="createPostContainer">
        <div className="inputContainer">
          <h1>Tartışma Başlat</h1>
          <input
            type="text"
            placeholder="Başlık"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            placeholder="Birşeyler yaz..."
            onChange={(e) => {
              setPostText(e.target.value);
            }}
          ></textarea>
          <button onClick={createPostFunc}>Paylaş</button>
        </div>
      </div>
    </div>
  );
}
CreatePost.propTypes = {isAuth: PropTypes.bool}
export default CreatePost;
