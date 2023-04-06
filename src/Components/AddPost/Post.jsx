import React, { useState } from 'react';


const Post = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');
    function handleSubmit(event) {
        event.preventDefault();
        let newPost = {
            name: name,
            post: post
        };
        props.addNewPostProp(newPost)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
            <label>Post</label>
            <input type='text' value={post} onChange={(event) => setPost(event.target.value)} />
            <button type='submit'>Add</button>
        </form>
     );
}
 
export default Post;

// import post into display post, call it inside mapping then pass in the entry props.entry index +1 will 
// have error to figure out
// like and dislike button will need to be on post component, need conditional rendering then need 2 functions
// that change two state variables for this conditional rendering
