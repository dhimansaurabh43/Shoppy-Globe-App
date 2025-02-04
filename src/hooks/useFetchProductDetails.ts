import { useState, useEffect } from "react";

interface Product { //defined types
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  rating: number;
  description: string;
  category: string;
  brand: string;
}

const useFetchProductDetail = (id: string | undefined) => { 
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      // fetched the product according to id
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setProduct(data);
      } catch (err: any) {
        setError("Failed to load product details...");
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  return { product, loading, error }; //returned the states
};

export default useFetchProductDetail;
