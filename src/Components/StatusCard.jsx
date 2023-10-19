import React from "react";
import "./statusCard.css";
import { CgProfile } from "react-icons/cg";
import { BsFillBarChartFill } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const StatusCard = ({ display, data }) => {
  // console.log(data);
  return (
    <div className="statusCard">
      <div className="statusCard-h-p">
        <h6>{data.id}</h6>
        <CgProfile />
      </div>
      <p>{data.title}</p>
      <div className="statusCard-p-d-t">
        <BsFillBarChartFill className="statusCard-p-d-t-icon"></BsFillBarChartFill>
        <div className="statusCard-d-t">
          <GoDotFill className="statusCard-d-t-icon" />
          <h6>{data.tag[0]}</h6>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
