import "./DisplayPosts.css";
import LikeButton from "./Components/LikeButton/LikeButton";

const DisplayPosts = (props) => {
  return (
    <div className="feed">
      {props.parentPost.map((entry, index) => {
        return (
          <div>
            <p>{entry.name}</p>
            <p>{entry.post}</p>
            <LikeButton />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
