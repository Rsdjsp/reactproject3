import React from "react";

export default function Product({ products }) {
  return (
    <div>
      {products.map((product,index) => {
          return <div key={index}><p>{ product.name}</p><img src={product.img} alt="images"  /></div>;
      })}
    </div>
  );
}
