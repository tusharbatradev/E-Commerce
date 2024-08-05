import { useState, useEffect } from "react";

const useSeperateProduct = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  return product;
};

export default useSeperateProduct;
