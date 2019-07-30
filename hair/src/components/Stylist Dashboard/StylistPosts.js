import React from "react";

export default function Posts (props) {
    const{ post, buttonText} = props
    console.log(props)
    return (
        <div>
            <h1>Posts</h1>
            {props.stylistPost.map((post, index) => {
                return (
                    <div className='card' key={index}>
                        <p>Name;{post.name}</p>
                    </div>
                )
            })}
            {/* { console.log(props) } */}
        </div>
    )
}