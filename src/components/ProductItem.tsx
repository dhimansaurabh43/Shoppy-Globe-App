import { FaShoppingCart } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { Link } from "react-router-dom";

interface ProductItemProps {
  //defined props type
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
}

const ProductItem = ({
  //destructured to accept props
  id,
  name,
  price,
  image,
  rating,
}: ProductItemProps): JSX.Element => {
  const shortedTitle = (title: string) => {
    //shorted title to 20 chars
    if (title.length > 20) {
      return title.substring(0, 20) + "...";
    }
    return title;
  };

  const dispatch = useDispatch();

  const handleAddToCart = (
    //added function to adding product via redux
    id: number,
    name: string,
    price: number,
    image: string
  ) => {
    dispatch(addToCart({ id, name, price, qty: 1, image })); //from redux
  };

  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition-all duration-200 ease-linear  cursor-pointer">
      {/* Link to products according to id */}
      <Link to={`/products/${id}`}>
        <img
          src={image}
          alt={name}
          className="h-56 w-full  bg-[#98c1d9] mb-3 rounded-lg"
        />
        {/* displayed shorted title of product */}
        <h3 className="text-xl font-bold">{shortedTitle(name)}</h3>
        {/* displayed price */}
        <p className="text-gray-600">
          <span className="text-black">Price: $</span>
          {price}
        </p>
        {/* displayed rating ofd product */}
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <span className="text-black">Rating:</span>{" "}
          <IoIosStar className="text-yellow-500" /> {rating}
        </p>
      </Link>
      {/* added button to add to cart */}
      <button
        onClick={() => handleAddToCart(id, name, price, image)}
        className="bg-[#14213d] hover:bg-[#780000] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded flex items-center gap-1"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
