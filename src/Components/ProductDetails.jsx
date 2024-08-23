import { useParams } from "react-router-dom";
import useSeperateProduct from "../../Utils/useSeperateProduct";

function ProductDetails() {
  const { id } = useParams();

  const product = useSeperateProduct(id);

  console.log(product);

  return (
    <>
      <div className="flex justify-center gap-[50px]">
        <div className="">
          <img
          className="h-[400px]"
            src={product.image}
            alt="PRODUCT IMAGE"
          />
        </div>
        <div className="flex flex-col gap-[24px] w-1/2">
          <h1 className="text-4xl">{product.title}</h1>
          <h1 className="text-xl">{product.description}</h1>
          <h1 className="text-3xl">Price:- {product.price}/-</h1>        </div>
      </div>
    </>
  );
}

export default ProductDetails;
