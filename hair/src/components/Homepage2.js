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


const deleteUser = id => {
    
    setEditing(!false)

    setLocalData(localData.filter(user => user.id !== id))
    console.log(id)
}


  return (
    <div>

      <H1>STYLISTS' DASHBOARD</H1>

      <Top>
      <Button>Posts</Button>
      <Link to="/AddEditPost3" >
            <Button className="add">Add Post</Button>
        </Link>     
            {/* <AddEditForm {...props} submitPost={addPost} buttonText="Add" /> */}
        </Top> 
        <AddEditForm />
            <Switch>
        
          </Switch>
        




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
  const {image, name, last, role, stars, location} = user;
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
          <p className="city">{location.city}</p>
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
          <button className="edit">Edit</button>
      <button className="delete" onClick={()=> deleteUser(user.id)} >Delete</button>
      </div>
     
    </Wrap>
  );
}
//onClick={()=>{console.log('Wast')}}
//props.deleteUser(post.id)
//console.log('The goal is to delete this', user)
export default Homepage2;

