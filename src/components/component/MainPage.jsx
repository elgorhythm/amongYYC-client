import { blue } from "@mui/material/colors";
import React from "react";

import image from "../../images/minion.png"; //Image of Minion Landing Page

// import ReactPlaceholder from 'react-placeholder'; {/* Placeholder Code*/}
// import "react-placeholder/lib/reactPlaceholder.css"; {/* Placeholder Code*/}

const MainPage = () => {
  return (
    <div
      style={{
        padding: 25,
        display: "flex",
        width: "33%",
        alignItems: "left",
        justifyContent: "left",
        borderTop: "20px solid rgba(0, 0, 0, .125)",
        borderBottom: "20px solid rgba(0, 0, 0, .125)",
        color: "white",
        text: "bold",
      }}
    >
      <div style={{ backgroundColor: "black", height: "65vh" }}>
        <p>
          About Among Us YYC{" "}
          {/* <div className="bg-info clearfix">
            <button className="btn btn-secondary float-left">About</button>
            <button className="btn btn-secondary float-right">GamePlay</button>
          </div> */}

          <div
          style={{Color:"black",}}>
            About Among Us YYC Community Gaming App.<div></div>
            The Among Us YYC Community Gaming APP was developed to unite the
            City of Calgary, communities and the people of Calgary. <div></div> The games
            intent is to activate the space with people with community and
            events. Creating a fun way for interaction to engage people that
            guide them throughout the city.
          </div>
        </p>
      </div>
      <div>XXXX</div>
    </div>
  );
};

export default MainPage;
