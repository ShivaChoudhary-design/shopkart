import React from "react";

import vector from "./images/Vector.png";
import bacimg from "./images/jessica-radanavong-IchPBHFD0pw-unsplash.png";

import star from "./images/Star 3.png";

const Body = () => {
  return (
    <div className="body">
      <div className="body-element">
        <div>
          <h1 id="fresh">Fresh</h1>
          <h1 id="year">2022</h1>
          <h1 id="look">Look</h1>
        </div>

        <div className="orange">
          <p>Oregon jacket</p>
          <p>$124</p>
        </div>
      </div>
      <p>
        See more
        <img src={vector} />
      </p>
    </div>
  );
};

export default Body;
