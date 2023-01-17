import ActionBar from "./ActionBar";

const Post = (props) => {
    return (
        <>
            <h3>{props.post.title}</h3>
            <p><img className="postImg" src={props.post.image} alt={props.post.title} /></p>
            <p>{props.post.content}</p>
            <ActionBar id={props.id} deletePost={props.deletePost} /> 
        </>
    );
}

export default Post;