import Posts from "../components/Posts";
import Card from 'react-bootstrap/Card';
import { useState } from "react";

const Newsfeed = (props) => {
    const formFields = {
        title: "",
        image: "",
        content: ""
    }
    const [createForm, setCreateForm] = useState(formFields)
 
    const handleChange = (event) => {
        setCreateForm({
            ...createForm,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        createPost(createForm)
        setCreateForm(formFields) // Something's missing here...
    }

    const createPost = async (post) => {
        await fetch(props.URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json'
            },
            body: JSON.stringify(post)
        })
        props.getPosts()
    }

    return (
        <div className="newsfeed">
            <Card className="createPost" style={{ width: '30rem' }}>
                <Card.Body>
                    <form onSubmit={handleSubmit}>
                        <input className="createInput" type="text" name="title" onChange={handleChange} placeholder="Title" maxLength="24" /><br />
                        <input className="createInput" type="text" name="image" onChange={handleChange} placeholder="Image URL" /><br />
                        <input className="createInput" type="text" name="content" onChange={handleChange} placeholder="Say something fun!" maxLength="1000" /><br />
                        <button type="submit" className='btn btn-primary'>Post</button>
                    </form>
                </Card.Body>
            </Card>
            <Posts posts={props.posts} URL={props.URL} getPosts={props.getPosts} />
        </div>
    )
};

export default Newsfeed;