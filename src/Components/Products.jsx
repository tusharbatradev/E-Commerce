import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import { Link } from "react-router-dom";

function Products({ setCart }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addItem(product));
    console.log("clicked");
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    if (searchInput) {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchInput, products]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

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
