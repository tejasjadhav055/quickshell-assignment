import React from "react";
import "./largeCard.css";
import StatusCard from "./StatusCard";
import { GoDotFill } from "react-icons/go";
import { PiDotsThreeBold } from "react-icons/pi";
import UserCard from "./UserCard";
import PriorityCard from "./PriorityCard";

const LargeCard = ({ display, data }) => {
  return (
    <>
      {data && (
        <div className="lardeCard">
          <div className="lardeCard_heading">
            <div className="lardeCard_heading-s-t-c">
              <GoDotFill className="lardeCard_heading-s-t-c-icon" />
              <h6>
                {display?.grouping === "status"
                  ? data.length && data[0]?.status
                  : display?.grouping === "user"
                  ? data && data[0]?.u?.name
                  : data && data[0]?.priority === 0
                  ? "No priority"
                  : data && data[0]?.priority === 1
                  ? "Low"
                  : data && data[0]?.priority === 2
                  ? "Medium"
                  : data && data[0]?.priority === 3
                  ? "High"
                  : "Urgent"}
              </h6>

              <p>{data.length}</p>
            </div>
            <div className="lardeCard_heading-a-d">
              <p>+</p>
              <PiDotsThreeBold className="lardeCard_heading-a-d-icon" />
            </div>
          </div>
          <div className="lardeCard_container">
            {display?.grouping === "status"
              ? data &&
                data.map((d) => <StatusCard display={display} data={d} />)
              : display?.grouping === "user"
              ? data && data.map((d) => <UserCard display={display} data={d} />)
              : data &&
                data.map((d) => <PriorityCard display={display} data={d} />)}
          </div>
        </div>
      )}
    </>
  );
};

export default LargeCard;
