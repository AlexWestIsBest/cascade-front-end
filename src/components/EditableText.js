import { useState } from 'react'

const EditableText = ({ value, setValue, updatePost, id }) => {
    const [currentValue, setCurrentValue] = useState(value)
    const onChange = (event) => setCurrentValue(event.target.value)

    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.target.blur()
        }
    }

    const onBlur = (event) => {
        if (event.target.value.trim() === "") {
            setCurrentValue(value)
        } else {
            setValue(event.target.value)
            event.preventDefault()
            updatePost(id, {title: currentValue})
        } 
    }

    return(
        <input
            type="text"
            value={currentValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
        />
    )
}

export default EditableText