import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const NewProducts = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductsList(data);
      console.log(productsList);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <div className="new-products">
      <header className="product-header">
        <h2>New products</h2>
        <ul className="arrow">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
            >
              <path
                d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
            >
              <path
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </li>
        </ul>
      </header>

      <main>
        <ul className="options">
          <li className="option-list">Apparel</li>
          <li id="accessories">Accessories</li>
          <li id="best-seller" className="option-list">
            Best sellers
          </li>
          <li className="option-list">50% off</li>
        </ul>
        <div className="all-products">
          {productsList.map((product) => (
            <ProductCard key={product.id} data={product} />
          ))}
        </div>
        <ul className="arrow-2">
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
            >
              <path
                d="M55 3.5H55.5V2.5H55V3.5ZM0 3L5 5.88675V0.113249L0 3ZM55 2.5L4.5 2.5V3.5L55 3.5V2.5Z"
                fill="#161615"
              />
            </svg>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="56"
              height="6"
              viewBox="0 0 56 6"
              fill="none"
            >
              <path
                d="M1 2.5H0.5L0.5 3.5H1L1 2.5ZM56 3L51 0.113249V5.88675L56 3ZM1 3.5L51.5 3.5V2.5L1 2.5L1 3.5Z"
                fill="#161615"
              />
            </svg>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default NewProducts;
