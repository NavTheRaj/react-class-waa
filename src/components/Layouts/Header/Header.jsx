import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <nav className="header-container">
                <div className='header-contents'>
                    <ul>
                        <li>
                            <Link to="/add-post">Add Post</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Header;