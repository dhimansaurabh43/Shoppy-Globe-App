import { useState, useEffect } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
}

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // fetched all products
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/product");
        const data = await response.json();
        setProducts(data.products);
      } catch (err:any) {
        setError("Server Error Failed to Load Products...");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return { products, loading,error };
};

export default useFetchProducts;
