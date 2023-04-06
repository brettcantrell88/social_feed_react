import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts';

function App() {
  const [entries, setEntries] = useState([])
  return (
    <div>
      <DisplayPosts parentPost={entries} />

    </div>
  )
}
export default App;