import React from 'react';
import { Route, Link } from "react-router-dom";

import AddEditForm from "./AddEditForm";
import StylistPosts from "./StylistPosts";

export default function Dashboard () {

    const [stylistPost, setStylistPost] =([
        {
            id:1,
            image:
        }
    ]);

    // //Add posts
    // const addPost = post => {
    //     setStylistPost([...stylistPost, {...post, id:Date.now()}
    //     ])
    // }

    // //Edit Posts

    // const editPost = editedPost => {
    //     const postCopy = [...stylistPost];
    //     const oldStylistPost = postCopy.find(post =>
    //         post.id === editedPost.id);

    //         Object.assign(oldStylistPost, editedPost )
    //         setStylistPost(postCopy)
    // }

    return(
        <div>
            This is the Dashboard <br></br>
            Nav and header will go here
            <StylistPosts 
             stylistPost={stylistPost}
             setStylistPost={setStylistPost}
             />
        </div>
    );
}