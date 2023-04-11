import "./DisplayPosts.css";
import LikeButton from "../LikeButton/LikeButton";
import DisLikeButton from "../LikeButton/DisLikeButton";


const DisplayPosts = (props) => {
  return (
    <div className="feed">
      {props.parentPost.map((entry, index) => {
        return (
          <div>
            <p>{entry.name}</p>
            <p>{entry.post}</p>
            <LikeButton />
            <DisLikeButton />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
