import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        height: "9%",
        width: "100%",
        backgroundColor: "#d64224",
        color: "black",
        textAlign: "center",
        verticalAlign: "center",
      }}
    >
      About: You see the results of decisions made by The City of Calgary every
      day – in <div></div>your roads, drinking water, parks and much more. Get
      involved and provide your input on City projects and programs. Together we
      can build a better community!
      <div>
        Have questions or want to learn more about a project, contact us below:
        Phone 311 or 403-268-CITY (2489) Website www.calgary.ca
      </div>
    </div>
  );
};

export default Footer;
