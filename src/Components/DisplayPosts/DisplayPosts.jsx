

const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Post</th>
            </tr>
            </thead>
            <tbody>
            {props.parentPost.map((entry, index) => {
                return (
                <tr>
                    <td>{index + 1}</td>
                    <td>{entry.name}</td>
                    <td>{entry.post}</td>
                </tr>
                );
            })}
            </tbody>
      </table>
     );
}
 
export default DisplayPosts;