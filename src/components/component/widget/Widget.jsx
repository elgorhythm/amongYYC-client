import "./widget.scss";
import React from "react";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AddTaskIcon from "@mui/icons-material/AddTask";
import TollIcon from "@mui/icons-material/Toll";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

const Widget = ({ type }) => {
  let data;

  //temporary data

  switch (type) {
    case "user":
      data = {
        title: "Users",
        value: "820",
        diff: "+32",
        isMoney: false,
        icon: (
          <PersonOutlinedIcon
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        link: "See all users",
      };
      break;

    case "tasks":
      data = {
        title: "Tasks",
        value: "4",
        diff: "4",
        isMoney: false,
        icon: (
          <AddTaskIcon
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
        link: "See all tasks",
      };
      break;

    case "coins":
      data = {
        title: "Coins",
        value: "4243",
        diff: "+22",
        isMoney: false,
        icon: (
          <TollIcon
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
        link: "See all coins",
      };
      break;

    case "donated":
      data = {
        title: "Donated",
        value: "2642",
        diff: "+35",
        isMoney: false,
        icon: (
          <VolunteerActivismIcon
          
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),

        link: "See all donated",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">{data.value}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage">
          <KeyboardArrowUpIcon          />
          {data.diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
