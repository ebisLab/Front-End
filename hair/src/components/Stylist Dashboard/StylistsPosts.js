import React from "react";
import { Link } from "react-router-dom";


import { Container, PostCard,  PostBody, Descript, BtnContainer,H1 } from "./styled-components";


export default function StylistPosts(props) {
    const { submitPost, buttonText, deletePost } = props


    return (
        <div>
            <H1>My Clients</H1>
            <Container>
                {props.stylistPost.map((post, index) => {
                    return (
                        <PostCard  key={index}>
                            <img src={post.image} alt={post.name}/>
                            <PostBody>
                                <h2>{post.name}</h2>
                                <Descript>{post.description}</Descript>
                            </PostBody>
                            <BtnContainer >
                                <Link to={`/components/Dashboard/StylistsPosts/postEdit/${post.id}`} className='editPostButton '>
                                {buttonText}
                                </Link>
                                <button className='postButton' onClick={() => props.deletePost(post.id)}>Delete</button>
                            </BtnContainer>
                        </PostCard>
                         )
                })}
            </Container>

            {console.log(props)}
        </div>
    )
}