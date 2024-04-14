/** @format */

import React, { useEffect, useState } from "react";
import "./productList.css";

export default function ProductList() {
  const [productsList, setproductsList] = useState(0);
  useEffect(() => {
    fetchApi();
    console.log("fecthing");
  }, []);

  const fetchApi = async () => {
    let response = await fetch("https://fakestoreapi.com/products");
    let objects = await response.json();
    setproductsList(objects);
    console.log(objects, "=========");
  };

  if (productsList === 0) {
    return <h1>Fetching Data</h1>;
  }
  return (
    <>
      <h1>Products List</h1>
      <div className="totalContainer">
        {productsList.map((i) => {
          return (
            <>
              <div
                className="border card shadow-lg p-3 mb-5 bg-white rounded"
                key={i.id}>
                <img
                  src={i.image}
                  alt="prod"
                  className="img-responsive"
                />

                <p className="mt-4">Price : {i.price}$</p>
                <p>{i.title}</p>
                <p>
                  Rating :
                  <span className="text text-danger">{` ${i.rating.rate}`}</span>
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
