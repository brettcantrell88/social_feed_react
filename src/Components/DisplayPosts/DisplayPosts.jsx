import "./DisplayPosts.css";

const DisplayPosts = (props) => {
  return (
    <div className="feed">
      {props.parentPost.map((entry, index) => {
        return (
          <div>
            <p>{entry.name}</p>
            <p>{entry.post}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
