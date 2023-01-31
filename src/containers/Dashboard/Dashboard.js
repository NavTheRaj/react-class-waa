import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Form from '../../components/Form/Form';
import PostDetail from '../../components/PostDetail/PostDetail';
import Posts from '../../pages/Posts';
import "./Dashboard.css"

const Dashboard = () => {

    const [postList, setPostList] = useState([])
    const [selected, setSelected] = useState(0)
    const [detail, setDetail] = useState([])


    const changeSelected = (id) => {
        setSelected(id)
        fetchById(id)
    }

    const fetchById = async (id) => {
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
                    fetchById(selected)
                }
            })
            .catch(e => alert("Failure!"))
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div className='dashboard-container'>
            <h2>Products</h2>
            <Posts postList={postList} changeSelected={changeSelected} />
            <Form updatePost={updatePost} />
            {selected > 0 ? <PostDetail data={detail} /> : null}
        </div>
    )

}
export default Dashboard;