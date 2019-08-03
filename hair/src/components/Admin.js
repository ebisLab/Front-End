//Code and styling done by Jade Lopez

import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";


import AddEditForm from "./AddEditPost2";
import StylistPosts from "./StylistsPosts2";

import { profiles1 } from "../components/datainfo";

//CSS ** this
import { DashNav, DashLink } from "./styledComponents";

export default function Admin(props) {
    console.log('props', props)
  
    const [exData, setExData] = useState(profiles1);


  

  //Add Post
  const addPost = post => {
    setExData([...exData, { ...post, id: Date.now() }]);
  };

  //Edit Posts
  const editPost = editedPost => {
    const exDataCopy = [...exData];
    const oldExData = exDataCopy.find(
      post => post.id === editedPost.id
    );

    Object.assign(oldExData, editedPost);
    setExData(exDataCopy);
  };

  //Delete post
  const deletePost = id => {
    setExData(exData.filter(post => post.id !== id));
  };

  return (
    <div>
      <DashNav>
        <DashLink>
          <Link className="link-color" to="/Admin/StylistsPosts2">
            Posts
          </Link>
        </DashLink>
        <DashLink>
          <Link
            className="link-color"
            to="/Admin/StylistsPosts2/AddEditPost2"
          >
            Add Post
          </Link>
        </DashLink>
      </DashNav>
<p>


</p>
      <Switch>
        <Route
          exact
          path="/Admin/StylistsPosts2/AddEditPost2"
          render={props => (
            <AddEditForm {...props} submitPost={addPost} buttonText="Add" />
          )}
        />

        <Route
          exact
          path="/Admin/StylistsPosts2"
          render={props => (
            <StylistPosts
              {...props}
              exData={exData}
              setExData={setExData}
              deletePost={deletePost}
              buttonText="Edit"
            />
          )}
        />

        <Route
          path="/Admin/StylistsPosts2/postEdit/:id"
          render={props => {
            const card = exData.find(
              post => post.id.toString() === props.match.params.id
            );
            return (
              <AddEditForm
                {...props}
                initialPost={card}
                submitPost={editPost}
                buttonText="Edit"
              />
            );
          }}
        />
      </Switch>
    </div>
  );
}
