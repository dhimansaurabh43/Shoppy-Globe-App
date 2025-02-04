import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  //defined types for cart item
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}
interface CartState {
  //defined type for cart state
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
}

const initialState: CartState = {
  //initial value of cart
  cart: [],
  totalItems: 0,
  totalPrice: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.cart.push({
          ...action.payload,
        });
      }
    },
    //remove from cart
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    //increment product quantity
    incrementQty: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) item.qty += 1;
    },
    //decrement product quantity
    decrementQty: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    //clear cart after order success
    clearCart: (state) => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});
//total price for product
export const selectTotalPrice = (state: { cart: CartState }) => {
  return state.cart.cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
};
//total number of items in cart
export const selectTotalItems = (state: { cart: CartState }) => {
  return state.cart.cart.reduce((total, item) => total + item.qty, 0);
};

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = CartSlice.actions;
export default CartSlice.reducer;
