import React from 'react'
import './Posts.css'
import Post from '../components/Post/Post';

const Posts = ({ postList, changeSelected }) => {

    const posts = postList
        .map(post =>
            <Post
                key={post.id}
                id={post.id}
                title={post.title}
                changeSelected={changeSelected}
            />)

    return <div className='postList'
    >{posts}</div>

}

export default Posts;