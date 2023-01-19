import ActionBar from "./ActionBar";
import { useState } from "react";
import EditableText from "./EditableText";

const Post = (props) => {
    const [value, setValue] = useState(props.post.title)

    const updatePost = async (id, updatedPost) => {
        await fetch(props.URL + id, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updatedPost)
        })
    }

    const deletePost = async (id) => {
        await fetch(props.URL + id, {
            method: 'DELETE'
        })
        props.getPosts()
    }

    return (
        <>
            <EditableText id={props.id} value={value} setValue={setValue} updatePost={updatePost} URL={props.URL} />
            <p><img className="postImg" src={props.post.image} alt={props.post.title} /></p>
            <p>{props.post.content}</p>
            <ActionBar id={props.id} URL={props.URL} deletePost={deletePost} /> 
        </>
    );
}

export default Post;