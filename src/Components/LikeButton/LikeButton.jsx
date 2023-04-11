import React, { useState } from "react";
import "./LikeButton.css";



const LikeButton = (props) => {
  const [likeClass, setLike] = useState("inactive");

  function handleLike() {
    if (likeClass === "inactive") {
      setLike("active-like");
    } else {
      setLike("inactive");
    }
  };
  return (
    <div>
      <button className={`LikeButton ${likeClass}`} onClick={handleLike} >{props.message}</button>
    </div>
  );
};

export default LikeButton;
