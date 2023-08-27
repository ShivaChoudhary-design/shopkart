import React, { useState } from "react";

const LowerHeader = () => {
  return (
    <>
      <div className="lower-header">
        <h2>ShopKart</h2>
        <ul className="cart">
          <li>WISHLIST (0)</li>
          <li>BAG (0)</li>
        </ul>
      </div>
    </>
  );
};

export default LowerHeader;
