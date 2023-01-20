import { useState, useEffect, useRef } from 'react'

const EditableTextArea = ({ value, setValue, updatePost, id }) => {
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
            updatePost(id, {content: currentValue})
        } 
    }

    const onInput = (target) => {
        if (target.scrollHeight > 16) {
            target.style.height = "5px"
            target.style.height = (target.scrollHeight +5) + "px"
        }
    }

    const textareaRef = useRef()

    useEffect(() => {
        onInput(textareaRef.current)
    }, [onInput, textareaRef])

    return(
        <textarea
            className="editableTextArea"
            rows={1}
            type="text"
            value={currentValue}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onBlur={onBlur}
            onInput={onInput}
            ref={textareaRef}
        />
    )
}

export default EditableTextArea