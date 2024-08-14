import { Link } from "react-router-dom";

function ProductCard({ product, addToCart, addedProduct }) {
  return (
    <>
      <div className="hover:border-2 border-black rounded-lg 
        h-[400px] max-h-[400px] p-6 w-64 max-w-64 justify-between items-center flex flex-col gap-2">
        <div>
          <img
            className="max-w-36 max-h-36 flex"
            src={product.image}
            alt="IMAGE"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold antialiased">{product.title}</h1>
          <h1>{product.category}</h1>
          <h1>PRICE:- {product.price} /-</h1>
          <h1>RATING:- {product.rating.rate}</h1>
        </div>

        {addedProduct && (
          <button
            onClick={addToCart}
            className="bg-slate-800 text-white w-full"
          >
            Add to Cart
          </button>
        )}
      </div>
    </>
  );
}

export const withRatedLabel = (Component) => {
  return (props) => {
    return (
      <>
        <label className="absolute bg-black text-white 
        m-1 p-0.5 border-1 rounded-lg
        
        ">Highly Rated</label>
        <Component {...props} />
      </>
    );
  };
};

export default ProductCard;
