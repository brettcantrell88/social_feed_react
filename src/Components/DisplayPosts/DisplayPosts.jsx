const DisplayPosts = (props) => {
    return ( 
        <table>
            <thead>
            <tr>

            </tr>
            </thead>
            <tbody>
            {props.parentPost.map((entry, index) => {
                return (
                <tr>
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