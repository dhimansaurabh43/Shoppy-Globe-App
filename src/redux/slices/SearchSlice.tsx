import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//search slice for searching products
interface SearchState {
  search: string;
}

const initialState: SearchState = {
  search: "",
};

const SearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;
export default SearchSlice.reducer;
