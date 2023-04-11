import React, { useState } from "react";
import "./LikeButton.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


const LikeButton = (props) => {
  const [like, setLike] = useState("inactive");

  function handleLike() {
    if (like === "inactive") {
      setLike("active");
    } else {
      setLike("inactive");
    }
  };
  return (
    <div>
      <button className={buttonClass} onClick={handleLike} style={ThumbUpIcon}>
        {props.message}
      </button>
    </div>
  );
};

export default LikeButton;
