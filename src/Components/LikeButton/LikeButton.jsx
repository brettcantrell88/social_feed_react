import React, { useState } from "react";
import "./LikeButton.css";

const LikeButton = (props) => {
  const [buttonClass, setButtonClass] = useState("inactive");

  function handleLike() {
    if (buttonClass === "inactive") {
      setButtonClass("active");
    } else {
      setButtonClass("inactive");
    }
  };
  return (
    <div>
      <button className={buttonClass} onClick={handleLike}>
        {props.message}
      </button>
    </div>
  );
};

export default LikeButton;
