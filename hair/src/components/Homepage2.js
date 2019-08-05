import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";

import AddEditForm from "./AddEditPost3";
import StylistPosts from "./StylistsPosts3";
import InsideStylistDetails2 from "../components/InsideStylistDetails2";
import { profiles } from "../components/data";
import StarRatingComponent from "react-star-rating-component";


//CSS //
import styled, { css } from "styled-components";
import { Button, Top, H1, CropImg, AlignLeft, AlignRight, Wrap } from "./styledComponents";

function Homepage2(props) {
  console.log("props stylist", props);
  const [localData, setLocalData] = useState([...props.bringData]);
  const [ editing, setEditing ] = useState(false)


  //Add Post
  const addPost = post => {
    setLocalData([...localData, { ...post, id: Date.now() }]);
  };

// Delete Post - Working
const deleteUser = id => {
    setEditing(!false)
    setLocalData(localData.filter(user => user.id !== id))
    console.log(id)
}

//Edit Post
const handleEdit = e => {
    setEditing(!editing)
}

const updateHandler = e => {
    e.preventDefault()
    console.log('update fire')
    props.updateMember(localData);
    setEditing(!editing)
}

 //Edit Posts
//  const editPost = editedPost => {
//     const stylistPostCopy = [...stylistPost];
//     const oldStylistPost = stylistPostCopy.find(
//       post => post.id === editedPost.id
//     ); //

//     Object.assign(oldStylistPost, editedPost);
//     setStylistPost(stylistPostCopy);
//   };


  return (
    <div>

      <H1>STYLISTS' DASHBOARD</H1>

      <Top>
      <Button>Posts</Button>
      <Link to="/Homepage2/AddEditPost3"  >
            <Button className="add">Add Post</Button>
        </Link>     
            <AddEditForm {...props} submitPost={addPost} buttonText="Add" />
        </Top> 
            
        




      <div className="StyleContainer ">
      
        {localData.map((user, i) => {
          return <StylistDetails key={i} user={user} setLocalData={setLocalData} localData={localData} deleteUser={deleteUser} />;
        })}
      </div>
    </div>
  );
}

function StylistDetails(props) {
  const { user, deleteUser, localData, setLocalData } = props;
  const {image, name, last, city, role, stars, location} = user;

//   console.log('location', location)
  return (
    <Wrap>
        
      <Link
        to={{
          pathname: `/stylistas/${user.id}`,
          state: { ...user }
        }}
      >
        <div className="left">
          <CropImg>
            <img src={image} height="200px" />
          </CropImg>{" "}
        </div>
        <div className="right">
          <h2>
            {" "}
            {name} {last}{" "}
          </h2>
          <h3>{role}</h3>
          <p className="city">{location ? location.city: <span>Loading...</span>}</p>
          <p className="stars">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              starColor="pink"
              renderStarIcon={() => <span>♥</span>}
              value={stars}
            />
          </p>
          
        </div>
      
      </Link>
      <div className="endbtn">
      <Link    
                  to={`/Homepage2/postEdit/${user.id}`}
                >
          <button className="edit">Edit</button></Link>
      <button className="delete" onClick={()=> deleteUser(user.id)} >Delete</button>
      </div>
     
    </Wrap>
  );
}

export default Homepage2;

