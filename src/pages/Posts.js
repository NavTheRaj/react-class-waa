import React, { useEffect, useState } from 'react'
import './Posts.css'
import Post from '../components/Post/Post';

const Posts = ({ postList, changeSelected }) => {

    const posts = postList
        .map(post =>
            <Post id={post.id}
                title={post.title}
                changeSelected={changeSelected}
            />)

    return <div className='postList'
    >{posts}</div>

}

export default Posts;