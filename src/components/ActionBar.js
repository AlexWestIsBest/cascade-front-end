import { MDBIcon } from 'mdb-react-ui-kit';
import {useState} from 'react'

const ActionBar = (props) => {
    const [count, setCount] = useState(0)
    let isLiked = false
    const handleIncrement = () => {
        setCount(count + 1)
        isLiked = true
    }


    const handleDelete = () => {
        props.deletePost(props.id)
    }

    return (
        <div className="actionBar">
            <button
                className='likeButton'
                onClick={handleIncrement}
            >
                <MDBIcon far icon="thumbs-up" />{count > 0 ? " " + count : ''}
            </button>
            <button className="deleteButton" onClick={handleDelete}><MDBIcon fas icon="trash-alt" /></button>
        </div>
    );
}

export default ActionBar;