import React from "react";

function Products() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Products Page 😄</h1>

      <div
        style={{
          border: "1px solid black",
          padding: "20px",
          width: "250px",
          marginTop: "20px",
        }}
      >
        <h2>iPhone 15</h2>

        <p>Price: ₹80,000</p>

        <button>Add To Cart</button>
      </div>
    </div>
  );
}

export default Products;
