import { useNavigate } from "react-router-dom";

//order success page with redirect to home button

const OrderSuccess = (): JSX.Element => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h2 className="text-3xl font-bold mb-4">Order Successful!</h2>
      <p className="text-xl mb-8">Thank you for your purchase.</p>
      <button
        onClick={handleBackToHome}
        className="bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded"
      >
        Back to Home
      </button>
    </div>
  );
};

export default OrderSuccess;
