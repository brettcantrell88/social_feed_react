import React, { useState } from "react";
import DisplayPosts from "./Components/DisplayPosts/DisplayPosts";
import Post from "./Components/AddPost/Post";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import LikeButton from "./Components/LikeButton/LikeButton";


function App() {
  const [entries, setEntries] = useState([
    { name: "Brett", post: "Sup" },
    { name: "Mike", post: "Dude" },
  ]);
  function addNewPost(entry) {
    let tempPosts = [entry, ...entries];
    setEntries(tempPosts);
  }
  return (
    <div className="app">
      <div className="box">
        <NavBar />
      </div>
      <div className="container-fluid" >
        <div className="row" style={{"display":"flex","flexDirection":"column","alignItems":"center"}}>
          <div className="col-md-6">
            <div className="border-box">
              <Post addNewPostProp={addNewPost} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="border-box">
              <DisplayPosts parentPost={entries} />
              <div><LikeButton /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;

// need a create post component, look at weight tracker for this
// refer to weigh tracker
