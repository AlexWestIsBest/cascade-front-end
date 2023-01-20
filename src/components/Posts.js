import Post from "./Post";

const Posts = (props) => {
    const loaded = () => {
        return props.posts.map((post) => (
            <div key={post._id} className="post">
                <Post post={post} id={post._id} URL={props.URL} getPosts={props.getPosts} />
            </div>
        ));
    };

    const loading = () => {
        return <h3>Loading...</h3>;
    };

    return (
        <>
            {props.posts ? loaded() : loading()}
        </>
    );
}

export default Posts;