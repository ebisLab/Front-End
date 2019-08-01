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
            image: 'picture 1',
            name: 'Jack',
            description: 'Picture description '
        },
        {
            id: 2,
            image: 'picture 2',
            name: 'Jill',
            description: 'Picture description '
        },
        {
            id: 3,
            image: 'picture 3',
            name: 'Holly',
            description: 'Picture description'
        },
        {
            id: 4,
            image: 'picture 4',
            name: 'Lisa',
            description: 'Picture description '
        },
        {
            id: 5,
            image: 'picture 5',
            name: 'Aaron',
            description: 'Picture description '
        },
        {
            id: 6,
            image: 'picture 6',
            name: 'Tina',
            description: 'Picture description '
        },
        {
            id: 7,
            image: 'picture 4',
            name: 'Lisa',
            description: 'Picture description '
        },
        {
            id: 8,
            image: 'picture 5',
            name: 'Aaron',
            description: 'Picture description '
        },
        {
            id: 9,
            image: 'picture 6',
            name: 'Tina',
            description: 'Picture description '
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
            
            
            <DashNav className="dashNav-container">
                <DashLink>
                    <Link className="link-color" to="/components/Dashboard/StylistsPosts">Dashboard</Link>
                </DashLink>
                <DashLink>
                    <Link className="link-color" to="/components/Dashboard/AddEditForm ">Add Post</Link>
                </DashLink>
                {/* /components/Dashboard/AddEditForm */}
            </DashNav>

            <Switch>


                <Route path="/components/Dashboard/AddEditForm "
                    render={props => <AddEditForm {...props}
                        submitPost={addPost}
                        buttonText='Add Post'

                    />} />


                <Route exact path="/components/Dashboard/StylistsPosts"
                    render={props => <StylistPosts {...props}
                        submitPost={addPost}
                        stylistPost={stylistPost}
                        setStylistPost={setStylistPost}
                        buttonText="Edit Post"
                    />} />


                <Route path="/components/Dashboard/StylistsPosts/postEdit/:id"
                    render={props => {
                        const card = stylistPost.find(post => post.id.toString() === props.match.params.id);
                        return <AddEditForm {...props}
                            initialPost={card}
                            submitPost={editPost}
                            buttonText="Edit Post"
                        />;
                    }} />
            </Switch>



        </div>
    );
}