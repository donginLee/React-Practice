import React from 'react';
import {Link,useNavigate} from 'react-router-dom';
function Post({ post }) {
  const { title, body } = post;
  const navigate=useNavigate();
  const goToHome=()=>{navigate("/");}
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      <button onClick={goToHome}></button>
     </div>
  );
}

export default Post;