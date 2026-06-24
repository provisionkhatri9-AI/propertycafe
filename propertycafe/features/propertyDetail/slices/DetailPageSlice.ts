import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PropertyDetailAll } from "@/data/detailPropertyData";



const propertySlice = createSlice({
  name: "property",
  initialState : PropertyDetailAll,
  reducers: {
    setSelectedId(state, action: PayloadAction<number>) {
      state.selectedId = action.payload;
    },
  },
});



export const { setSelectedId } = propertySlice.actions;
export default propertySlice.reducer;