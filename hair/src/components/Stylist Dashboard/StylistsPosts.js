import React from "react";
import { Link } from "react-router-dom";


import { Container, PostCard,  PostBody, Descript, BtnContainer,H1 } from "./styled-components";
// import { Button, Card, Image } from 'semantic-ui-react';



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
                                {/* <Link to={`/components/Dashboard/StylistsPosts/`} className='postButton' >
                                Delete
                                </Link> */}
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

// {/* <Card.Group itemsPerRow={4}>
//                 {props.stylistPost.map((post, index) => {
//                     return (
//                         <Card className='post-card' key={index}>
//                             <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
//                             {/* <p>Image:{post.image}</p> This will be for the picture once we have it figured out */}
                //             <Card.Content>
                //                 <Card.Header> {post.name} </Card.Header>
                //                 <Card.Description> {post.description}</Card.Description>
                //             </Card.Content>
                //             <Card.Content extra>
                //                 <Button>
                //                     <Link to={`/components/Dashboard/StylistsPosts/postEdit/${post.id}`} className="post-button">{buttonText}</Link>
                //                 </Button>
                //             </Card.Content>
                //         </Card>
                //          )
                // })}
                // </Card.Group> */}