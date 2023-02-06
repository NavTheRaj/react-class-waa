import React from 'react'
import { Navigate, Route, Routes } from 'react-router';
import AddPost from '../../components/AddPost/AddPost';
import PostDetail from '../../components/PostDetail/PostDetail';
import Posts from '../../pages/Posts';
import Dashboard from './Dashboard';

export default function PageRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/" />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/add-post" element={<AddPost />} />
        </Routes>
    );
}