import React, { useState } from "react";
// import Images from "../img";
import { Link } from "react-router-dom";
import InsideStylistDetails2 from "../components/InsideStylistDetails2";
import { profiles } from "../components/data";
import StarRatingComponent from "react-star-rating-component";

//CSS //
import styled, { css } from "styled-components";
import {
  Button,
  H1,
  WrapDiv,
  CropImg,
  AlignLeft,
  AlignRight,
  Wrap
} from "./styledComponents";

function Homepage2(props) {
  console.log("props stylist", props);
  const [bringData, setBringData] = useState([]);

  return (
    <div>

      <H1>STYLISTS' DASHBOARD</H1>
      <div className="StyleContainer ">
        {props.bringData.map((user, i) => {
          return <StylistDetails key={i} user={user} />;
        })}
      </div>
    </div>
  );
}

function StylistDetails({ user }) {
  const { image, name, last, role, stars, location } = user;
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
      <button className="delete">Delete</button>
      </div>
      
    </Wrap>
  );
}

export default Homepage2;
