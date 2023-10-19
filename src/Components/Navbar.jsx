import React, { useEffect, useState } from "react";
import "./navbar.css";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { RiArrowDropDownLine } from "react-icons/ri";
import Home from "../Pages/Home";

const Navbar = () => {
  const [ddClass, setDdClass] = useState("navbar_dd-n");
  const [display, setDisplay] = useState({
    grouping: "status",
    ordering: "priority",
  });
  function handleOnClick() {
    if (ddClass === "navbar_dd") {
      setDdClass("navbar_dd-n");
    } else {
      setDdClass("navbar_dd");
    }
  }
  function handleOnClickGrouping(e) {
    setDisplay({
      grouping: e.target.value,
      ordering: display.ordering,
    });
    localStorage.setItem("display", JSON.stringify(display));
  }
  function handleOnClickOdreing(e) {
    setDisplay({
      grouping: display.grouping,
      ordering: e.target.value,
    });
    localStorage.setItem("display", JSON.stringify(display));
  }

  useEffect(() => {
    const jsonString = localStorage.getItem("display");
    if (jsonString) {
      const dataObject = JSON.parse(jsonString);
      setDisplay(dataObject);
    }
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="navbar_container" onClick={handleOnClick}>
          <HiOutlineAdjustmentsHorizontal />
          <p>Display</p>
          <RiArrowDropDownLine />
        </div>
      </div>
      <div className={ddClass}>
        <div className="navbar_dd-1">
          <p>Grouping</p>
          <select onClick={handleOnClickGrouping}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className="navbar_dd-2" onClick={handleOnClickOdreing}>
          <p>Odreing</p>
          <select>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <Home display={display} className="navbar_home" />
    </>
  );
};

export default Navbar;
