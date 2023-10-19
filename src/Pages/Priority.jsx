import React, { useEffect, useState } from "react";
import "./priority.css";
import LargeCard from "../Components/LargeCard";

const Priority = ({ display, data }) => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    const urgent = [];
    const high = [];
    const medium = [];
    const low = [];
    const noPriority = [];
    for (let i = 0; i < data?.tickets?.length; i++) {
      if (data.tickets[i].priority === 0) {
        noPriority.push(data.tickets[i]);
      } else if (data.tickets[i].priority === 1) {
        low.push(data.tickets[i]);
      } else if (data.tickets[i].priority === 2) {
        medium.push(data.tickets[i]);
      } else if (data.tickets[i].priority === 3) {
        high.push(data.tickets[i]);
      } else if (data.tickets[i].priority === 4) {
        urgent.push(data.tickets[i]);
      }
    }
    setShowData([noPriority, low, medium, high, urgent]);
    if (display.ordering === "title") {
      const sortedShowData = [
        noPriority.sort((a, b) => a.title.localeCompare(b.title)),
        low.sort((a, b) => a.title.localeCompare(b.title)),
        medium.sort((a, b) => a.title.localeCompare(b.title)),
        high.sort((a, b) => a.title.localeCompare(b.title)),
        urgent.sort((a, b) => a.title.localeCompare(b.title)),
      ];

      setShowData(sortedShowData);
    }

    // console.log(showData);
  }, [display, data]);

  return (
    <div className="priority">
      {showData &&
        showData.map((d) => <LargeCard display={display} data={d} />)}
    </div>
  );
};

export default Priority;
