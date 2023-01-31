import React from 'react'
import './PostDetail.css'

const PostDetail = ({ data }) => {
    console.log(data)
    return <>
        <h2>Post Detail</h2>
        <div className='post-detail-container'>
            <div>
                <h3>{data.title}</h3>
                <p>{data.description}</p>
            </div>
            <div className='post-detail-action'>
                <button className='post-edit'>Edit</button>
                <button className='post-delete'>Delete</button>
            </div>
        </div>
    </>
}

export default PostDetail