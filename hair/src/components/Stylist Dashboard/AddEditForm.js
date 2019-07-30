import React, {useState} from 'react';


export default function AddEditForm (props) {
    console.log("form", props)

    const {submitPost, initialPost, buttonText, history} = props
    const [newPost, setNewPost] = useState(initialPost || { image:"", name:"", description:""})

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
        history.push('/StylistPosts')
    }



    return(
        <div>
           <h2>Add</h2>
           <form onSubmit={ handleSubmit }>
               {/* Placeholder for image */}
               <div className="form-group">
                    <label>Image:</label>
                    <input
                        type="text"
                        className="input"
                        name="image"
                        placeholder="Please enter name"
                        value={newPost.image}
                        onChange={handleChange}
                    />
                </div>

               <div className="form-group">
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
           </form>

        </div>
    )
}