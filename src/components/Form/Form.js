import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [titleId, setTitleId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        title === "" ?
            alert("Title Empty") :
            props.updatePost(titleId, title)
    }

    return (
        <>
            <h2>Update Post</h2>
            <div className='form-container'>
                <input type='number'
                    onChange={e => setTitleId(e.target.value)}
                    placeholder='ID'
                    required={true}
                    defaultValue={1}
                    min={1}
                    max={8}
                />
                <input type='text'
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title Name'
                    required={true}
                />
                <button className='btn-simple'
                    onClick={e => handleSubmit(e)}>Change Title</button>

            </div>
        </>
    )
}

export default Form