import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import Header from "./components/Header";
import Footer from "./components/Footer";

const About = React.lazy(() => import("./pages/About"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const CheckoutPage = React.lazy(() => import("./pages/Checkout"));
const Contact = React.lazy(() => import("./pages/Contact"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Login = React.lazy(() => import("./pages/Login"));
const OrderSuccess = React.lazy(() => import("./pages/OrderSuccess"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
const ProductList = React.lazy(() => import("./pages/ProductList"));

const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-[60vh]">
              <InfinitySpin width="200" color="#1995AD" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order" element={<OrderSuccess />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
