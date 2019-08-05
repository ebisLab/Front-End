//Code and styling done by Jade Lopez

import React, { useState } from "react";

//CSS
import styled, { css } from "styled-components";
import { FormContainer, PostForm, PostLabel, PostInput, FormButton } from "./styledComponents";

export default function AddEditForm(props) {
  const { submitPost, initialPost, buttonText, history } = props;
  const [newPost, setNewPost] = useState(
    initialPost || { image: "", name: "", role: "", last: "", location:"", stars: "" }
  );
console.log('props bring data', props.bringData)

  //Change Event
  function handleChange(event) {
    const updatedPost = { ...newPost, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedPost
    );
    setNewPost(updatedPost);
  }

  //Submit Event
  function handleSubmit(event) {
    event.preventDefault();
console.log('Form submit props', props)
// props.updateMember(newPost);

submitPost(newPost);
//  setNewPost({ image: "", name: "", city: "", description: "" });
//history.push("/Homepage2");
  }



  return (
    <div>
     <h2 className="postFormTitle">{buttonText}</h2>
      <FormContainer>
        <PostForm onSubmit={handleSubmit}>
          {/* Placeholder for image url */}
          <PostForm className="form-group">
            <PostLabel>Image:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="image"
              placeholder=" "
              value={newPost.image}
              //https://i.imgur.com/foKD70t.jpg?1
              onChange={handleChange}
            />
          </PostForm>

          <PostForm className="form-group">
            <PostLabel>Name:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="name"
              placeholder="Please enter name"
              value={newPost.name}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Role:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="role"
              placeholder="Please enter a role/title"
              value={newPost.role}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>Last:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="last"
              placeholder="Please enter Last Name"
              value={newPost.last}
              onChange={handleChange}
            />
          </PostForm>
          <PostForm className="form-group">
            <PostLabel>City:</PostLabel>
            <PostInput
              type="text"
              className="input"
              name="city"
              placeholder="Please add a city"
              value={newPost.city}
              onChange={handleChange}
            />
          </PostForm>

          <PostForm >
            <PostLabel>Stars:</PostLabel>
            <PostInput
              min="1" 
              max="5"
              type="number"
              className="number"
              name="stars"
              placeholder="Please add a number rating"
              value={newPost.stars}
              onChange={handleChange}
            />
          </PostForm>
          
          <FormButton type="submit">{buttonText}</FormButton>
        </PostForm>
        
      </FormContainer>
    </div>
  );
}
