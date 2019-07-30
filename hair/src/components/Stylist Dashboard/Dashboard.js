import React, {useState}  from 'react';
import { Route, Link } from "react-router-dom";

import AddEditForm from "./AddEditForm";

export default function Dashboard () {

    const [stylistPost, setStylistPost] = useState([
        {
            id:1,
            image: 'picture 1',
            name: 'Image 1',
            description: 'Picture description One'
        },
        {
            id:2,
            image: 'picture 2',
            name: 'Image 2',
            description: 'Picture description Two'
        }
    ]);

    //Add Post
    const addPost = post => {
        setStylistPost([...stylistPost, {...post, id:Date.now()}])
    }

    //Edit Posts
    const editPost = editedPost => {
        const stylistPostCopy = [...stylistPost]
        const oldStylistPost = stylistPostCopy.find(post => post.id === editedPost.id);

        Object.assign(oldStylistPost, editedPost)
        setStylistPost(stylistPostCopy);
    }


    return(
        <div>
            This is the Dashboard <br></br>
            Nav and header will go here <br></br>
            {/* <Link to="/StylisPost">Dashboard</Link> */}
            <Link to="/AddEditForm" >Add Post</Link>

            <div>
            <h1>Posts</h1>
            {stylistPost.map((post, index) => {
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
            
            <Route path="/AddEditForm"
                render={props => <AddEditForm {...props}
                submitPost={addPost}
                buttonText='Add Post'

                    />}
                />

            <Route path="/postEdit/:id"
                   render={props => {
               const card = stylistPost.find(post => post.id.toString() === props.match.params.id);
               return <AddEditForm {...props}
                                     initialPost={card}
                                     submitStylist={editPost}
                                     buttonText="Edit Post"
                                     />;
             }}/>
             
        </div>
    );
}