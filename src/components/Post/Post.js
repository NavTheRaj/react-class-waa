import React from 'react'
import './Post.css'

const Post = (props) => {

    const handleSelected = (e, id) => {
        e.preventDefault()
        props.changeSelected(id)
    }

    return (<div className='product-container'
        onClick={e => handleSelected(e, props.id)}>
        <p>{props.id}</p>
        <p>{props.title}</p>
    </div>)
}

export default Post;