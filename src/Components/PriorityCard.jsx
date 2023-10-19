import React from "react";
import "./priorityCard.css";
import { CgProfile } from "react-icons/cg";
import { BsFillBarChartFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { AiFillCheckCircle } from "react-icons/ai";

const PriorityCard = ({ display, data }) => {
  // console.log(data);
  return (
    <div className="priorityCard">
      <div className="priorityCard-h-p">
        <h6>{data.id}</h6>
        <CgProfile />
      </div>
      <div className="priorityCard-c-t">
        <AiFillCheckCircle className="userCard-c-t-icon" />
        <p>{data.title}</p>
      </div>
      <div className="priorityCard-p-d-t">
        <BsFillBarChartFill className="priorityCard-p-d-t-icon"></BsFillBarChartFill>
        <div className="priorityCard-d-t">
          <GoDotFill className="priorityCard-d-t-icon" />
          <h6>{data.tag[0]}</h6>
        </div>
      </div>
    </div>
  );
};

export default PriorityCard;
