import React from 'react'
import './PostDetail.css'

const PostDetail = ({ data, deletePostById, setDetailUpdateState }) => {
    // console.log(data)
    return <>
        <h2>Post Detail</h2>
        <div className='post-detail-container'>
            <div>
                <h3>{data.title}</h3>
                <p><strong>ID : </strong>{data.id}</p>
                <p><strong>Description:</strong> {data.description}</p>
                {/* <p><strong>Reviewed By: </strong> {data.stars}</p> */}
            </div>
            <div className='post-detail-action'>
                <button
                    className='post-edit'
                    onClick={e => setDetailUpdateState(
                        {
                            "id": data.id,
                            "title": data.title
                        }
                    )}
                >Edit</button>
                <button
                    className='post-delete'
                    onClick={e => deletePostById(data.id)}
                >Delete</button>
            </div>
        </div>
    </>
}

export default PostDetail