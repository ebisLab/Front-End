import React from "react";
import { Link } from 'react-router-dom';

export default function Posts(props) {
    // const {post} =props
    console.log( 'StylistPosts',props)
    
    return (
        <div>
            <h1>Posts</h1>
            {props.stylistPost.map((post, index) => {
                return (
                    <div className='card' key={index}>
                        <p>Image:{post.image}</p>
                        <p>Name:{post.name}</p>
                        <p>{post.description}</p>
                        
                    </div>
                )
                })}
            { console.log('Bottom of StylistPosts',props) }
        </div>
    )
}