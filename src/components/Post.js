import ActionBar from "./ActionBar";

const Post = (props) => {
    const deletePost = async (id) => {
        await fetch(props.URL + id, {
            method: 'DELETE'
        })
        props.getPosts()
    }

    return (
        <>
            <h3>{props.post.title}</h3>
            <p><img className="postImg" src={props.post.image} alt={props.post.title} /></p>
            <p>{props.post.content}</p>
            <ActionBar id={props.id} URL={props.URL} deletePost={deletePost} /> 
        </>
    );
}

export default Post;