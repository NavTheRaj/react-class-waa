import React, { useEffect, useRef, useState } from 'react'
import "./AddPost.css"


const AddPost = ({ addPost }) => {

    const [title, setTitle] = useState()
    const titleRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()


    useEffect(() => {
        titleRef.current = title
        descRef.current = description
        priceRef.current = price
    }, [title, description, price])

    const handleChange = (e) => {
        e.preventDefault()
        console.log(titleRef)
        addPost(titleRef.current,
            descRef.current,
            priceRef.current)
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
                        ref={titleRef}
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
                        ref={descRef}
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
                        ref={priceRef}
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