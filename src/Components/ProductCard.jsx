import { Link } from "react-router-dom";

function ProductCard({ product, addToCart, addedProduct }) {
  return (
    <>
      <div className="rounded-lg h-[250px] max-h-[500px] w-64 max-w-64   flex flex-col gap-[8px]">
        <div className="w-full">
          <img
            className="max-w-full max-h-[300px] flex"
            src={product.image}
            alt="IMAGE"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold antialiased">{product.title}</h1>
          <h1>{product.category}</h1>
          <h1>PRICE:- {product.price} /-</h1>
          {/* <h1>RATING:- {product.rating}</h1> */}
        </div>

        {addedProduct && (
          <button
            onClick={addToCart}
            className="bg-slate-800 text-white w-[100px]"
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
