import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase-config";


function Home() {
  const [postList,setPostList] = useState([])
  const postCollection = collection(db, "posts")
  
  useEffect(() => {
    const getPosts = async () =>{
      const data = await getDocs(postCollection)
      setPostList(data.docs.map((doc)=> ({...doc.data()})))  
    }
    getPosts()
  })

  return (
    <div className="homePage">
      {postList.map((post)=> {
        return(
        <div className="textContainer">
          <div className="innerTextContainer">
            <h3 className="title">{post.title}</h3>
            <p>{post.postText}</p>
            <h3 className="userName">{post.userName}</h3>
          </div>
        </div>
      )})}
    </div>
    
  )
}

export default Home