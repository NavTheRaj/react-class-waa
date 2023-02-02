import React from 'react'
import "./Comment.css"

const Comment = ({ comment }) => {

    return <>
        <div className="single-comment">
            <p>{comment}</p>
        </div>
    </>
}

export default Comment