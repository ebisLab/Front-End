import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import AddEditForm from "./AddEditForm";
import StylistPosts from "./StylistsPosts"

export default function Dashboard() {

    const [stylistPost, setStylistPost] = useState([
        {
            id: 1,
            image: 'picture 1',
            name: 'Image 1',
            description: 'Picture description One'
        },
        {
            id: 2,
            image: 'picture 2',
            name: 'Image 2',
            description: 'Picture description Two'
        }
    ]);

    //Add Post
    const addPost = post => {
        setStylistPost([...stylistPost, { ...post, id: Date.now() }])
    }

    //Edit Posts
    const editPost = editedPost => {
        const stylistPostCopy = [...stylistPost]
        const oldStylistPost = stylistPostCopy.find(post => post.id === editedPost.id);

        Object.assign(oldStylistPost, editedPost)
        setStylistPost(stylistPostCopy);
    }

console.log(addPost)


    return (
        <div>
            This is the Dashboard <br></br>
            Nav and header will go here <br></br>
            {/* <Link to="/StylisPost">Dashboard</Link> */}
            <Link to="/components/Dashboard/StylistsPosts">Dashboard</Link>
            <Link to="/components/Dashboard/AddEditForm">Add Post</Link>

            <Switch>


                <Route path="/components/Dashboard/AddEditForm"
                    render={props => <AddEditForm {...props}
                        submitPost={addPost}
                        buttonText='Add Post'

                    />} />

                <Route exact path="/components/Dashboard/StylistsPosts"
                    render={props => <StylistPosts {...props}
                        stylistPost={stylistPost}
                        setStylistPost={setStylistPost}
                        buttonText="Edit Post"
                    />} />


                <Route path="/components/Dashboard/StylistsPosts/postEdit/:id"
                    render={props => {
                        const card = stylistPost.find(post => post.id.toString() === props.match.params.id);
                        return <AddEditForm {...props}
                            initialPost={card}
                            submitStylist={editPost}
                            buttonText="Edit Post"
                        />;
                    }} />
            </Switch>



        </div>
    );
}