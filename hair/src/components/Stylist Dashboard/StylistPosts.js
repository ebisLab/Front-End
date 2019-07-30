import React from "react";
import { Link } from 'react-router-dom';

export default function Posts(props) {
    
    return (
        <div>
            <h1>Posts</h1>
            {props.stylistPost.map((post, index) => {
                return (
                    <div className='card' key={index}>
                        <p>Image:{post.image}</p>
                        <p>Name:{post.name}</p>
                        <p>{post.description}</p>
                        <Link to={`/postEdit/${post.id}`}>Edit</Link>
                        
                    </div>
                )
                })}
        </div>
    )
}