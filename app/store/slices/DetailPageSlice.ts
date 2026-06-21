import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "@/data/detailPropertyData";

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setSelectedId(state, action: PayloadAction<number>) {
      state.selectedId = action.payload;
    },
  },
});



export const { setSelectedId } = propertySlice.actions;
export default propertySlice.reducer;