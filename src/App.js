import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';
import Post from './Components/AddPost/Post';

function App() {
  const [entries, setEntries] = useState([{name: "Brett", post: "Sup"}, {name: "Mike", post: "Dude"}])
  return (
    <div>
      <DisplayPosts parentPost={entries} />
      <Post />

    </div>
  )
}
export default App;

// need a create post component, look at weight tracker for this
// refer to weigh tracker 
