import React, { useEffect, useState } from 'react'
import './Posts.css'
import Post from '../components/Post/Post';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Posts = ({ changeSelected }) => {

    const [postList, setPostList] = useState([])

    const fetchData = async () => {
        const { data } = await axios
            .get('https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products');
        setPostList(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const posts = postList
        .map(post =>
            <Link to={`/posts/${post.id}`}
                key={post.id}
            >
                <Post
                    title={post.title}
                    changeSelected={changeSelected}
                />
            </Link>
        )

    return <div className='post-list'
    >{posts}</div>

}

export default Posts;