import React from "react";
import GamesIcon from "@mui/icons-material/Games";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import InfoIcon from "@mui/icons-material/Info";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem">
            <GamesIcon />
            <span>Game</span>
          </div>
          <div className="headerListItem">
            <NewspaperIcon />
            <span>News</span>
          </div>
          <div className="headerListItem">
            <EventSeatIcon />
            <span>Events</span>
          </div>
          <div className="headerListItem">
            <InfoIcon />
            <span>About</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
