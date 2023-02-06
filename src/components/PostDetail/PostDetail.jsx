import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { redirect, useNavigate, useParams } from 'react-router'
import Comments from '../../pages/Comments'
import './PostDetail.css'

const PostDetail = () => {

    const [data, setData] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    const deletePostById = (id) => {
        axios
            .delete(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${id}`)
            .then(() => navigate("/posts"))
    }

    const fetchOne = (id) => {
        axios
            .get(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${id}`)
            .then((res) => {
                setData(res.data)
            })

    }


    // const updatePost = (titleId, title) => {
    //     axios
    //         .put(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${titleId}`,
    //             {
    //                 title: title
    //             })
    //         .then(() => {
    //             fetchData();
    //             if (selected) {
    //                 fetchOne(selected)
    //             }
    //         })
    //         .catch(e => alert("Failure!"))
    // }


    // const comments = useMemo(() => data.comments, [data])

    const CommentArea = () => {

        const comments = data.comments && data.comments
        console.log(data)
        if (comments === null || comments.length < 1)
            return <h4>No Comments</h4>
        else
            return <Comments comments={comments} />
    }

    useEffect(() => {
        fetchOne(id)
    }, [id])

    if (!data) {
        return <p>Loading ...</p>
    }

    return <>
        <div className='post-detail-container'>
            <div>
                <h3>{data.title}</h3>
                <p><strong>ID : </strong>{data.id}</p>
                <p><strong>Description:</strong> {data.description}</p>
            </div>
            <div className='post-detail-action'>
                <button
                    className='post-edit'
                >Edit</button>
                <button
                    className='post-delete'
                    onClick={e => deletePostById(data.id)}
                >Delete</button>
            </div>
            <div>
                {/* <CommentArea /> */}
            </div>
        </div>
    </>
}

export default PostDetail