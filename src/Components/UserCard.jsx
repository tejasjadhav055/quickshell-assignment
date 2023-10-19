import React from "react";
import "./userCard.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillBarChartFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const UserCard = ({ display, data }) => {
  // console.log(data);
  return (
    <div className="userCard">
      <div className="userCard-h-p">
        <h6>{data.t.id}</h6>
      </div>
      <div className="userCard-c-t">
        <AiFillCheckCircle className="userCard-c-t-icon" />
        <p>{data.t.title}</p>
      </div>
      <div className="userCard-p-d-t">
        <BsFillBarChartFill className="userCard-p-d-t-icon"></BsFillBarChartFill>
        <div className="userCard-d-t">
          <GoDotFill className="userCard-d-t-icon" />
          <h6>{data.t.tag[0]}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
