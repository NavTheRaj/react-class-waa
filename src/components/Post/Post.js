import React from 'react'
import { useParams } from 'react-router'
import './Post.css'

const Post = (props) => {

    const params = useParams()

    // const handleSelected = (e, id) => {
    //     e.preventDefault()
    //     props.changeSelected(id)
    // }

    return (<div className='product-container'>
        <p>{params.id}</p>
        <p>{props.title}</p>
    </div>)
}

export default Post;