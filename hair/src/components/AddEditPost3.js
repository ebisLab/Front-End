//Code and styling done by Jade Lopez

import React, { useState } from "react";

//CSS
import styled, { css } from "styled-components";
import { FormContainer2, PostForm2, PostLabel2, PostInput2, FormButton2 } from "./styledComponents";

export default function AddEditForm(props) {
  const { submitPost, initialPost, buttonText, history } = props;
  const [newPost, setNewPost] = useState(
    initialPost || { image: "", name: "", role: "", last: "", location:"", stars: "" }
  );
console.log('props bring data', props.bringData)
console.log('newPost', newPost)

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
console.log('newpost', newPost)
console.log('')
submitPost(newPost);
 setNewPost({ image: "", name: "", city: "", description: "" });
history.push("/Homepage2");
  }



  return (
    <div>
     <h2 className="postFormTitle">{buttonText}</h2>
      <FormContainer2>
        <PostForm2 onSubmit={handleSubmit}>
          {/* Placeholder for image url */}
          <PostForm2 className="form-group">
            <PostLabel2>Image:</PostLabel2>
            <PostInput2
              type="text"
              className="input"
              name="image"
              placeholder=" "
              value={newPost.image}
              //https://i.imgur.com/foKD70t.jpg?1
              onChange={handleChange}
            />
          </PostForm2>
<div className="2col">
          <PostForm2 className="form-group">
            <PostLabel2>Name:</PostLabel2>
            <PostInput2
              type="text"
              className="input"
              name="name"
              placeholder="Please enter name"
              value={newPost.name}
              onChange={handleChange}
            />
          </PostForm2>

          <PostForm2 className="form-group">
            <PostLabel2>Last:</PostLabel2>
            <PostInput2
              type="text"
              className="input"
              name="last"
              placeholder="Please enter Last Name"
              value={newPost.last}
              onChange={handleChange}
            />
          </PostForm2>
</div>
          <PostForm2 className="form-group">
            <PostLabel2>Role:</PostLabel2>
            <PostInput2
              type="text"
              className="input"
              name="role"
              placeholder="Please enter a role/title"
              value={newPost.role}
              onChange={handleChange}
            />
          </PostForm2>
          <div className="2col">
          <PostForm2 className="form-group">
            <PostLabel2>City:</PostLabel2>
            <PostInput2
              type="text"
              className="input"
              name="city"
              placeholder="Please add a city"
              value={newPost.city}
              onChange={handleChange}
            />
          </PostForm2>

          <PostForm2 >
            <PostLabel2>Stars:</PostLabel2>
            <PostInput2
              min="1" 
              max="5"
              type="number"
              className="number"
              name="stars"
              placeholder="Please add a number rating"
              value={newPost.stars}
              onChange={handleChange}
            />
          </PostForm2>
          </div>
          
          <FormButton2 type="submit">{buttonText}</FormButton2>
        </PostForm2>
        
      </FormContainer2>
    </div>
  );
}
