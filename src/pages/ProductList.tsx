import { InfinitySpin } from "react-loader-spinner";
import ProductItem from "../components/ProductItem";
import SearchProduct from "../components/SearchProduct";
import useFetchProducts from "../hooks/useFetchProducts";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";

const ProductList = (): JSX.Element => {
  const { products, loading, error } = useFetchProducts();
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const searchedText = useSelector((state: RootState) => state.search.search);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [products, searchedText]);
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
    <div>
      <SearchProduct />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-3 gap-3">
        {filteredProducts.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.title}
            price={product.price}
            image={product.thumbnail}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
