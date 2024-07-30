import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  console.log(product);
  return (
    <>
      <img className="h-44 w-44" src={product.image} alt="PRODUCT IMAGE" />
      <h1 className="text-3xl">{product.title}</h1>
      <h1 className="text-sm">{product.description}</h1>
      <h1 className="text-3xl">{product.price}/-</h1>
    </>
  );
}

export default ProductDetails;
