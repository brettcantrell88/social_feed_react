import React, { useState } from "react";
import "./DisLikeButton.css"



const DisLikeButton = (props) => {
    const [disLikeClass, setDisLike] = useState("inactive");
  
    function handleLike() {
      if (disLikeClass === "inactive") {
        setDisLike("active-dislike");
      } else {
        setDisLike("inactive");
      }
    };
    return (
      <div>
        <button className={`DisLikeButton ${disLikeClass}`} onClick={handleLike} >{props.message}</button>
      </div>
    );
  };
  export default DisLikeButton;