import React, { useState } from 'react'
import "./AddPost.css"


const AddPost = ({ addPost }) => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const handleChange = (e) => {
        e.preventDefault()
        addPost(title, description, price)
        setTitle('')
        setDescription('')
        setPrice('')
    }

    return (
        <>
            <h2>Add Post</h2>
            <div className='form-container'>
                <div className=''>
                    <input
                        className=''
                        type='text'
                        placeholder='Title Name'
                        required={true}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className=''
                        type='text'
                        placeholder='Title Description'
                        required={true}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className=''
                        type='text'
                        placeholder='Price'
                        required={true}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <button className='btn-simple'
                    onClick={e => handleChange(e)}>Add Post</button>
            </div>
        </>
    )
}

export default AddPost