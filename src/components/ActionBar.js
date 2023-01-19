import { MDBIcon } from 'mdb-react-ui-kit';

const ActionBar = (props) => {

    const handleDelete = () => {
        props.deletePost(props.id)
    }

    return (
        <div className="actionBar">
            <button><MDBIcon far icon="thumbs-up" /></button>
            <button onClick={handleDelete}><MDBIcon fas icon="trash-alt" /></button>
        </div>
    );
}

export default ActionBar;