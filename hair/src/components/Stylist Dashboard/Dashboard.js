import React, { useState } from 'react';
import { Route, Link, Switch } from "react-router-dom";

import AddEditForm from "./AddEditForm";
import StylistPosts from "./StylistsPosts";

import {DashNav, DashLink} from "./styled-components";

// import { Container, Button, Card, Image } from 'semantic-ui-react'

export default function Dashboard() {

    const [stylistPost, setStylistPost] = useState([
        {
            id: 1,
            image: "https://i.imgur.com/xtLBuaV.png",
            name: "Trina",
            description: "Cut & Color"
          },
          {
            id: 2,
            image: "https://i.imgur.com/4SbP5L9.png",
            name: "Mallory",
            description: "Color"
          },
          {
            id: 3,
            image: "https://i.imgur.com/Udfrvdr.png",
            name: "Jason",
            description: "Cut & Style"
          },
          {
            id: 4,
            image: "https://i.imgur.com/pGTbbJQ.png",
            name: "Trent",
            description: "Cut & Style"
          },
          {
            id: 5,
            image: "https://i.imgur.com/3DyC3X3.png",
            name: "Liela",
            description: "Color, Cut, & Style"
          },
          {
            id: 6,
            image: "https://i.imgur.com/XRZuSP0.png",
            name: "Jazmine",
            description: "Cut, Press, & Style"
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




    const deletePost =id => {
        setStylistPost(stylistPost.filter(post => post.id !== id))
    }

    // const postCopy = [...stylistPost]
    //      postCopy.find(post => {
    //         return post !== deletedPost.id
    // setStylistPost(postCopy.slice(postCopy, deletedPost.id))

    // const deletePost = deletedPost => {
    //     const postCopy = [...stylistPost]
    //     const oldPostCopy = postCopy.indexOf(deletedPost.target.value)
    //     if(oldPostCopy !== -1) {
    //         postCopy.splice(oldPostCopy, 1);
    //         setStylistPost(deletePost)
    //         console.log('deletePost', deletedPost);
    //     }

        

    // }

console.log(addPost)


    return (
        <div>
            
            
            <DashNav className="dashNav-container">
                <DashLink>
                    <Link className="link-color" to="/components/Dashboard/StylistsPosts">Posts</Link>
                </DashLink>
                <DashLink>
                    <Link className="link-color" to="/components/Dashboard/AddEditPost ">Add Post</Link>
                </DashLink>
                {/* /components/Dashboard/AddEditForm */}
            </DashNav>

            <Switch>


                <Route exact path="/components/Dashboard/AddEditPost "
                    render={props => <AddEditForm {...props}
                        submitPost={addPost}
                        buttonText='Add '

                    />} />


                <Route exact path="/components/Dashboard/StylistsPosts"
                    render={props => <StylistPosts {...props}
                        submitPost={addPost}
                        stylistPost={stylistPost}
                        setStylistPost={setStylistPost}
                        deletePost={deletePost}
                        buttonText="Edit"
                    />} />


                <Route path="/components/Dashboard/StylistsPosts/postEdit/:id"
                    render={props => {
                        const card = stylistPost.find(post => post.id.toString() === props.match.params.id);
                        return <AddEditForm {...props}
                            initialPost={card}
                            submitPost={editPost}
                            buttonText="Edit"
                        />;
                    }} />
            </Switch>



        </div>
    );
}