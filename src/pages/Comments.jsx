import Comment from "../components/Comment/Comment"
import "./Comments.css"


const Comments = ({ comments }) => {
    return <>
        <div className="comment-container">
            {comments.map((comment, id) => {
                return <Comment key={id} comment={comment} />
            })}
        </div>
    </>
}

export default Comments