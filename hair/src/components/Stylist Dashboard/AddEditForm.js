import React, {useState} from 'react';
import { Button, Form } from 'semantic-ui-react'



export default function AddEditForm (props) {
    const sizes = ['mini', 'tiny', 'small', 'large', 'big', 'huge', 'massive']

    const {submitPost, initialPost, buttonText, history} = props;
    const [newPost, setNewPost] = useState(initialPost || { image:"", name:"", description:""})
    console.log(props)
    // console.log("form", submitPost)
    //Change Event
    function handleChange(event) {
        const updatedPost = {...newPost, [event.target.name]: event.target.value};
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
        submitPost(newPost);
        setNewPost({ image:"", name:"", description:""})
        history.push('/components/Dashboard/StylistsPosts')
        console.log("form", submitPost)
    }

    // console.log("form", submitPost)

    return(
        <div>
           <h2>{buttonText}</h2>
           <Form onSubmit={ handleSubmit }>
               <Form.Group >
                   {/* Placeholder for image */}
                   <Form.Input 
                            width={8}
                            fluid label= "Image"
                            type="text"
                            className="input"
                            name="image"
                            placeholder="Your image goes here"
                            value={newPost.image}
                            onChange={handleChange} 
                            />
               </Form.Group>
               <Form.Group >
                   {/* Placeholder for image */}
                   <Form.Input 
                            width={8}
                            fluid label= "Name"
                            type="text"
                            className="input"
                            name="name"
                            placeholder="name"
                            value={newPost.name}
                            onChange={handleChange} 
                            />
               </Form.Group>
               <Form.Group >
                   {/* Placeholder for image */}
                   <Form.Input 
                            width={8}
                            fluid label= "Description"
                            type="text"
                            className="input"
                            name="description"
                            placeholder="Description of Image"
                            value={newPost.description}
                            onChange={handleChange}
                            />
               </Form.Group>
               <Button type="submit">{buttonText}</Button>
           </Form>
           {/* <button type="submit">{buttonText}</button> */}

           {/* <form onSubmit={ handleSubmit }> */}
               {/* Placeholder for image */}
               {/* <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="text"
                        className="input"
                        name="image"
                        placeholder="Please enter name"
                        value={newPost.image}
                        onChange={handleChange}
                    />
                </div> */}

               {/* <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="input"
                        name="name"
                        placeholder="Please enter name"
                        value={newPost.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input
                        type="text"
                        className="input"
                        name="description"
                        placeholder="Please enter name"
                        value={newPost.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">{buttonText}</button>
           </form> */}

        </div>
    )
}