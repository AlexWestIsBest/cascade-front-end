const ActionBar = (props) => {

    const handleDelete = () => {
        props.deletePost(props.id)
    }

    return (
        <div className="actionBar">
            <button>Like</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default ActionBar;