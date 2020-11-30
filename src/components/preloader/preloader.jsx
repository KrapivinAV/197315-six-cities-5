import React from "react";

const Preloader = () => {

  return (
    <div style={{
      position: `absolute`,
      top: `50%`,
      left: `50%`,
      color: `red`,
      textSize: `50`
    }}>
      PROCESSING
    </div>
  );
};

export default Preloader;
