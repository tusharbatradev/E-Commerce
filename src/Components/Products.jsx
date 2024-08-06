import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../Utils/useOnlineStatus";
import useSearchProducts from "../../Utils/useSearchProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  const addToCart = (product) => {
    dispatch(addItem(product));
    console.log("clicked");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const { filteredProducts, searchInput, handleSearchChange } =
    useSearchProducts(products);

  let onlineStatus = useOnlineStatus();

  if (onlineStatus === "false") {
    return <h1>Looks Like you're Offline</h1>;
  }

  return (
    <>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search a Product"
          value={searchInput}
          onChange={handleSearchChange}
          className="p-2 border-2 border-black"
        />
      </div>

      <div className="flex flex-wrap gap-12 justify-center">
        {filteredProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard
              addToCart={() => addToCart(product)}
              product={product}
              addedProduct={true}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default Products;
