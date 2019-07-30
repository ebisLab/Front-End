import React, {useState}  from 'react';
import { Route, Link } from "react-router-dom";

import AddEditForm from "./AddEditForm";
import Posts from "./StylistPosts";

export default function Dashboard () {

    const [stylistPost, setStylistPost] = useState([
        {
            id:1,
            image: 'picture 1',
            name: 'Image 1',
            description: 'Picture description One'
        },
        {
            id:2,
            image: 'picture 2',
            name: 'Image 2',
            description: 'Picture description Two'
        }
    ]);


    return(
        <div>
            This is the Dashboard <br></br>
            Nav and header will go here <br></br>
            {/* {stylistPost.map(post => <Posts post={post} />)} */}

            <Posts 
             stylistPost={stylistPost}
             setStylistPost={setStylistPost}
             />

             <AddEditForm
             stylistPost={stylistPost}
             setStylistPost={setStylistPost}
             />
             
             {/* {console.log("Dashboard",stylistPost)} */}
        </div>
    );
}