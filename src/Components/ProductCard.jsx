import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <>
      <div className="border-2 border-black p-4 w-64 max-w-64 justify-between flex flex-col gap-2">
        <div>
          <img
            className="max-w-36 max-h-36 flex"
            src={product.image}
            alt="IMAGE"
          />
        </div>
        <div>
          <h1>{product.title}</h1>
          <h1>{product.category}</h1>
          <h1>{product.price}</h1>
        </div>

        <button onClick={addToCart} className="bg-slate-800 text-white">
          Add to Cart
        </button>
      </div>
    </>
  );
}

export default ProductCard;
