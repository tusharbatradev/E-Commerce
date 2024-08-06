import { useState, useEffect } from "react";

const useSearchProducts = (initialProducts) => {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput) {
      const filtered = initialProducts.filter((product) =>
        product.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(initialProducts);
    }
  }, [searchInput, initialProducts]);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  return { filteredProducts, searchInput, handleSearchChange };
};

export default useSearchProducts;
