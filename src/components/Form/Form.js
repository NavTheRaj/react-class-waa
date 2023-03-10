import React, { useContext, useEffect, useState } from 'react'
import { PostContext } from '../../containers/Dashboard/Dashboard'
import './Form.css'

const Form = (props) => {


    const { postDeleteState } = useContext(PostContext)

    const [title, setTitle] = useState('')
    const [titleId, setTitleId] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        title === "" ?
            alert("Title Empty") :
            props.updatePost(titleId, title)
    }

    useEffect(() => {
        if (props.detailUpdateState) {
            setTitle(props.detailUpdateState.title)
            setTitleId(props.detailUpdateState.id)
        }

        if (postDeleteState) {
            setTitle("")
            setTitleId("")
        }

    }, [props.detailUpdateState])


    const TitleElement = () => props.detailUpdateState === undefined ?
        <h2> Edit Post By Id</h2> : <h2>Edit Selected Post</h2>

    return (
        <>
            <TitleElement />
            <div className='form-container'>
                <input
                    className='title-id-input'
                    type='number'
                    onChange={e => setTitleId(e.target.value)}
                    placeholder='ID'
                    required={true}
                    defaultValue={1}
                    min={1}
                    max={8}
                    value={titleId}
                    disabled={props.detailUpdateState === undefined ? false : true}
                />
                <textarea
                    className='title-input'
                    type='text'
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title Name'
                    value={title}
                    required={true}
                />
                <button className='btn-simple'
                    onClick={e =>
                        handleSubmit(e)}>Change Title</button>

            </div>
        </>
    )
}

export default Form