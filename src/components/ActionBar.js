import { MDBIcon } from 'mdb-react-ui-kit';
import { useState } from 'react'

const ActionBar = (props) => {
    const [count, setCount] = useState(0)
    const [myLike, setMyLike] = useState(false)
    
    const handleIncrement = () => {
        setCount(count + 1)
        setMyLike(true)
    }

    const handleDelete = () => {
        props.deletePost(props.id)
    }

    return (
        <div className="actionBar">
            <button
                className='likeButton'
                onClick={handleIncrement}
                style={{backgroundColor: myLike ? 'rgb(175, 220, 255)' : ''}}
                >
                <MDBIcon far icon="thumbs-up" />{count > 0 ? " " + count : ""}
            </button>
            <button className="deleteButton" onClick={handleDelete}><MDBIcon fas icon="trash-alt" /></button>
        </div>
    );
}

export default ActionBar;