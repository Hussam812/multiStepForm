import { createSlice } from "@reduxjs/toolkit";

const PlanSlice = createSlice({
  name: "plan",
  initialState: { selectedplan: {}, duration: "monthly" },
  reducers: {
    selectedLength: (state, action) => {
      state.duration = action.payload;
    },
    selectPlan: (state, action) => {
      state.selectedplan = { ...action.payload };
    },
  },
});

export const { selectPlan, selectedLength } = PlanSlice.actions;
export default PlanSlice.reducer;
