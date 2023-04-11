import React, { useState } from "react";
import "./Post.css";


const Post = (props) => {
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
      name: name,
      post: post,
    };
    props.addNewPostProp(newPost);
    setName('');
  }
  return (
    <form onSubmit={(event) => handleSubmit(event)} className="form-grid">
      <div
        className="form-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div
        className="form-group"
        style={{ display: "flex", alignItems: "center" }}
      >
        <label>Post</label>
        <input
          type="text"
          className="form-control"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ "marginTop": "1em", marginLeft: "1em" }}
      >
        Post
       
      </button>
    </form>
  );
};

export default Post;

// import post into display post, call it inside mapping then pass in the entry props.entry index +1 will
// have error to figure out
// like and dislike button will need to be on post component, need conditional rendering then need 2 functions
// that change two state variables for this conditional rendering
