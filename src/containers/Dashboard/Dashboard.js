import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import AddPost from '../../components/AddPost/AddPost';
import Form from '../../components/Form/Form';
import PostDetail from '../../components/PostDetail/PostDetail';
import Posts from '../../pages/Posts';
import "./Dashboard.css"


export const PostContext = createContext()

const Dashboard = () => {

    const [postList, setPostList] = useState([])
    const [selected, setSelected] = useState(0)
    const [detail, setDetail] = useState([])
    const [detailUpdateState, setDetailUpdateState] = useState()


    const changeSelected = (id) => {
        setSelected(id)
        fetchOne(id)
    }

    const addPost = (title, description, price) => {
        axios
            .post('https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products',
                {
                    title: title,
                    description: description,
                    price: price
                })
            .then(() => fetchData())
            .catch((e) => alert("Failed to add!"))
    }

    const deletePostById = (id) => {
        axios
            .delete(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${id}`)
            .then(() => fetchData())
            .then(() => setSelected(-1))
    }

    const fetchOne = async (id) => {
        const { data } = await axios
            .get(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${id}`);
        setDetail(data)
    }

    const fetchData = async () => {
        const { data } = await axios
            .get('https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products');
        setPostList(data)
    }


    const updatePost = (titleId, title) => {
        axios
            .put(`https://623c441d7efb5abea67da60b.mockapi.io/api/v1/products/${titleId}`,
                {
                    title: title
                })
            .then(() => {
                fetchData();
                if (selected) {
                    fetchOne(selected)
                }
            })
            .catch(e => alert("Failure!"))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <PostContext.Provider value={detail} >
            <div className='dashboard-container'>
                <AddPost addPost={addPost} />
                <h2>Posts</h2>
                <Posts postList={postList} changeSelected={changeSelected} />
                {selected > 0 && detail && <PostDetail
                    updatePost={updatePost}
                    setDetailUpdateState={setDetailUpdateState}
                    deletePostById={deletePostById}
                />}
                <Form
                    updatePost={updatePost}
                    detailUpdateState={detailUpdateState}
                />


            </div>
        </PostContext.Provider >
    )

}
export default Dashboard;