import React, { useContext, useMemo } from 'react'
import { PostContext } from '../../containers/Dashboard/Dashboard'
import Comments from '../../pages/Comments'
import './PostDetail.css'

const PostDetail = ({ deletePostById, setDetailUpdateState }) => {

    const data = useContext(PostContext)

    const comments = useMemo(() => data.comments, [data])

    const CommentArea = () => {
        return comments && <Comments comments={comments} />
    }

    return <>
        <h2>Post Detail</h2>
        <div className='post-detail-container'>
            <div>
                <h3>{data.title}</h3>
                <p><strong>ID : </strong>{data.id}</p>
                <p><strong>Description:</strong> {data.description}</p>
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
            <div>
                <CommentArea />
            </div>
        </div>
    </>
}

export default PostDetail