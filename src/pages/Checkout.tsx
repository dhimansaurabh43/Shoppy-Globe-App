import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from "react-redux";
import { selectTotalItems, selectTotalPrice } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../redux/slices/CartSlice";

//checkout page with formik an yup validation

const CheckoutForm = () => {
  const totalPrice = useSelector(selectTotalPrice);
  const totalItems = useSelector(selectTotalItems);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //form validation
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    address: Yup.string().required("Address is required"),
    cardNumber: Yup.string()
      .required("Card number is required")
      .matches(/^[0-9]{16}$/, "Card number must be 16 digits"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      cardNumber: "",
    },
    validationSchema,
    onSubmit: () => {
      alert("Order successful!");
      navigate("/order");
      dispatch(clearCart());
    },
  });

  return (
    <div className="p-4 min-h-screen">
      <h2 className="text-2xl sm:text-3xl text-zinc-600 font-bold mb-4 text-center">
        Checkout
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="p-2 w-full border rounded-lg outline-none"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 text-lg">
            Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            className="border p-2 w-full rounded-lg outline-none"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500">{formik.errors.address}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-gray-700 text-lg">
            Card Number
          </label>
          <input
            id="cardNumber"
            name="cardNumber"
            type="text"
            className="border p-2 w-full rounded-lg outline-none"
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <div className="text-red-500">{formik.errors.cardNumber}</div>
          ) : null}
        </div>

        <div className="mb-4">
          <p className="text-sm text-zinc-500">Total Items: {totalItems}</p>
          <p className="text-sm text-zinc-500">
            Total Price: ${totalPrice.toFixed(2)}
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-[#1995AD] hover:bg-[#356570] transition-all duration-300 ease-linear text-white px-4 py-2 mt-2 rounded"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
