import ActionBar from "./ActionBar";
import { useState } from "react";
import EditableText from "./EditableText";
import EditableTextArea from "./EditableTextArea";
import Card from 'react-bootstrap/Card';


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
            <Card style={{ width: '30rem' }}>
                <Card.Title>
                    <EditableText id={props.id} value={titleValue} setValue={setTitleValue} updatePost={updatePost} URL={props.URL} />
                </Card.Title>
                <Card.Img variant="top" className="postImg" src={props.post.image} alt={props.post.title} />
                <Card.Body>
                    <Card.Text>
                    <EditableTextArea id={props.id} value={contentValue} setValue={setContentValue} updatePost={updatePost} URL={props.URL} />
                    </Card.Text>
                    <ActionBar id={props.id} URL={props.URL} deletePost={deletePost} /> 
                </Card.Body>
            </Card>
        </>
    );
}

export default Post;