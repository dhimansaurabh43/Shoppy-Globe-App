import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const SearchProduct = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    //function to handle search via redux
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="flex justify-center mt-2">
      <div className="relative w-full max-w-xs sm:max-w-lg">
        {/* added input and on change display product */}
        <input
          type="text"
          placeholder="Search products..."
          className="w-full px-4 py-2 pl-10 rounded-full border border-gray-300 outline-none"
          onChange={handleSearch}
        />
        <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>
    </div>
  );
};

export default SearchProduct;
