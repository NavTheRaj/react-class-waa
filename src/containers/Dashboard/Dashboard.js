import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { redirect } from 'react-router';
import AddPost from '../../components/AddPost/AddPost';
import Form from '../../components/Form/Form';
import PostDetail from '../../components/PostDetail/PostDetail';
import Posts from '../../pages/Posts';
import "./Dashboard.css"
import PageRoutes from './PageRoutes';


export const PostContext = createContext()

const Dashboard = () => {


    const [selected, setSelected] = useState(0)
    const [detail, setDetail] = useState([])
    const [detailUpdateState, setDetailUpdateState] = useState()
    const [postDeleteState, setPostDeleteState] = useState(false)





    return (
        <>
            <PageRoutes />
        </>
    )

}
export default Dashboard;