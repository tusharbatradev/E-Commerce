import { useState, useEffect } from "react";

const useSeperateProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return product;
};

export default useSeperateProduct;
