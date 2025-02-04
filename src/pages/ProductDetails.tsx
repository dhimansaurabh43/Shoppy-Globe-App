import { Link, useParams } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import useFetchProductDetail from "../hooks/useFetchProductDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const ProductDetail = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useFetchProductDetail(id);
  const [singleProduct, setSingleProduct] = useState<typeof product>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      setSingleProduct(product);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (singleProduct) {
      const cartItem = {
        id: singleProduct.id,
        name: singleProduct.title,
        price: singleProduct.price,
        qty: 1,
        image: singleProduct.thumbnail,
      };
      dispatch(addToCart(cartItem));
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <InfinitySpin width="200" color="#1995AD" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-red-500 text-2xl font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="px-8 py-4">
      {singleProduct && (
        <div className="flex flex-col items-center">
          <img
            src={singleProduct.thumbnail}
            alt={singleProduct.title}
            className="mb-4"
          />
          <h1 className="text-2xl font-semibold text-center">
            {singleProduct.title}
          </h1>
          <p className="text-lg">${singleProduct.price}</p>
          <div className="mx-auto w-full sm:w-1/2">
            <p className="mt-4 text-sm  sm:mb-8 ">
              {singleProduct.description}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-10">
            <div className="flex items-center gap-1">
              Rating:
              <FaStar className="text-yellow-500" />
              <p className="text-sm">{singleProduct.rating}</p>
            </div>
            <p className="text-sm text-zinc-600">
              Category: {singleProduct.category}
            </p>
            <p className="text-sm text-zinc-600">
              Brand: {singleProduct.brand}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 items-center ">
            <button
              onClick={handleAddToCart}
              className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
            <Link to="/">
              <button className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded">
                Back to Browse Products
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
