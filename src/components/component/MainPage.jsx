import { blue } from "@mui/material/colors";
import React from "react";

import Images from "../../images/minion.png";

// import ReactPlaceholder from 'react-placeholder'; {/* Placeholder Code*/}
// import "react-placeholder/lib/reactPlaceholder.css"; {/* Placeholder Code*/}

const MainPage = () => {
  return (
    <div
      style={{
        padding: 25,
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "20px solid rgba(0, 0, 0, .125)",
        borderBottom: "20px solid rgba(0, 0, 0, .125)",
        color: "white",
      }}
    >
      <div style={{ backgroundColor: "gray", height: "65vh" }}>
        <p>
          MainPage{" "}
          <div className="bg-info clearfix">
            <button className="btn btn-secondary float-left">About</button>
            <button className="btn btn-secondary float-right">GamePlay</button>
          </div>
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default MainPage;
