import ActionBar from "./ActionBar";
import { useState } from "react";
import EditableText from "./EditableText";
import EditableTextArea from "./EditableTextArea";

const Post = (props) => {
    const [titleValue, setTitleValue] = useState(props.post.title)
    const [contentValue, setContentValue] = useState(props.post.content)

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
            <EditableText id={props.id} value={titleValue} setValue={setTitleValue} updatePost={updatePost} URL={props.URL} />
            <p><img className="postImg" src={props.post.image} alt={props.post.title} /></p>
            <EditableTextArea id={props.id} value={contentValue} setValue={setContentValue} updatePost={updatePost} URL={props.URL} />
            <ActionBar id={props.id} URL={props.URL} deletePost={deletePost} /> 
        </>
    );
}

export default Post;