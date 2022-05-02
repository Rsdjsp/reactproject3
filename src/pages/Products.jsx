import React, { useEffect, useState } from "react";
import { get } from "../api";
import Product from "../components/Product";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    get("/products?limit=30&page=1")
      .then(({ data }) => setProducts(data.docs))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Product products={products} />
    </div>
  );
}
