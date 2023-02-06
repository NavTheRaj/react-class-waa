import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { redirect, useNavigate } from 'react-router'
import "./AddPost.css"


const AddPost = () => {

    const titleRef = useRef()
    const descRef = useRef()
    const priceRef = useRef()

    const navigate = useNavigate()


    const addPost = (title, description, price) => {

        axios
            .post('https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products',
                {
                    title: title,
                    description: description,
                    price: price
                })
            .then(() => navigate("/posts"))
            .catch((e) => alert("Failed to add!"))
    }

    const handleChange = (e) => {
        e.preventDefault()
        addPost(titleRef.current.value,
            descRef.current.value,
            priceRef.current.value)
    }

    return (
        <>

            <div className='form-container'>
                <div className='form-elements'>
                    <input
                        className=''
                        type='text'
                        placeholder='Title Name'
                        required={true}
                        ref={titleRef}
                    />
                </div>
                <div>
                    <input
                        className=''
                        type='text'
                        placeholder='Title Description'
                        required={true}
                        ref={descRef}
                    />
                </div>
                <div>
                    <input
                        className=''
                        type='text'
                        placeholder='Price'
                        required={true}
                        ref={priceRef}
                    />
                </div>

                <button className='btn-simple'
                    onClick={e => handleChange(e)}>Add Post</button>
            </div>
        </>
    )
}

export default AddPost