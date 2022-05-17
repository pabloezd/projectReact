import React from 'react'

function TextInput({ isTextarea, inputType, color }) {

    return (
        isTextarea ? <textarea style={{color: color}}></textarea> : <input style={{color: color}} type={inputType} />
    )
}

export default TextInput