import React from "react";

import vector from "./images/Vector.png";
import star from "./images/Star 3.png";
import man from "./images/jessica-radanavong-IchPBHFD0pw-unsplash.png";

const Body = () => {
  return (
    <div className="body">
      <div className="body-element">
        <div className="new-ele">
          <h1 id="fresh">Fresh</h1>
          <h1 id="year">2022</h1>
          <h1 id="look">Look</h1>
        </div>
        <img className="abs-img" src={star} />
        <img className="abs1-img" src={man} />
        <div className="orange">
          <p>Oregon jacket</p>
          <p>$124</p>
        </div>
      </div>
      <p className="see-more">
        See more
        <img src={vector} />
      </p>
    </div>
  );
};

export default Body;
