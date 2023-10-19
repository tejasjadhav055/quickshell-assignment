import React, { useEffect, useState } from "react";
import "./home.css";
import Status from "./Status";
import User from "./User";
import Priority from "./Priority";
import axios from "axios";

const Home = ({ display }) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(response.data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <div>
        {display?.grouping === "status" ? (
          <Status display={display} data={data} />
        ) : display?.grouping === "user" ? (
          <User display={display} data={data} />
        ) : (
          <Priority display={display} data={data} />
        )}
      </div>
    </div>
  );
};

export default Home;
