import Posts from "../components/Posts";
import Card from 'react-bootstrap/Card';

const Newsfeed = (props) => {

    return (
        <div className="newsfeed">
            <Card className="createPost" style={{ width: '30rem' }}>
                <Card.Body>
                Would you like to share something?
                    <form action="">
                        <input className="createInput" type="text" name="title" placeholder="Title" /><br />
                        <input className="createInput" type="text" name="image" placeholder="Image URL" /><br />
                        <input className="createInput" type="text" name="content" placeholder="Say something fun!" /><br />
                        <input className="createInput" type="submit" value="Post" />
                    </form>
                </Card.Body>
                {/* <Card.Img variant="top" className="postImg" src={props.post.image} alt={props.post.title} />
                <Card.Body>
                    <Card.Text>
                    <EditableTextArea id={props.id} value={contentValue} setValue={setContentValue} updatePost={updatePost} URL={props.URL} />
                    </Card.Text>
                    <ActionBar id={props.id} URL={props.URL} deletePost={deletePost} /> 
                </Card.Body> */}
            </Card>
            <Posts posts={props.posts} URL={props.URL} getPosts={props.getPosts} />
        </div>
    )
};

export default Newsfeed;