import { createSlice } from "@reduxjs/toolkit";

const AddonSelectorSlice = createSlice({
  name: "Selectedaddons",
  initialState: [],
  reducers: {
    selectAddons: (state, action) => {
      const existingAddon = state.find(
        (addon) => addon.id === action.payload.id
      );

      if (!existingAddon) {
        state.push(action.payload);
      } else {
        return state.filter((addon) => addon.id !== action.payload.id);
      }
    },

    sumAddonTotal: (state, action) => {
      let totalAddons = 0;
      if (state.length === 0) {
        totalAddons = 0;
      } else if (state.length === 1) {
        action.payload === "monthly"
          ? (totalAddons = +state[0].price[0].match("[0-9]+")[0])
          : (totalAddons = +state[0].price[1].match("[0-9]+")[0]);
      } else {
        action.payload === "monthly"
          ? state.map((item) => {
              totalAddons += +item.price[0].match("[0-9]+")[0];
            })
          : state.map((item) => {
              totalAddons += +item.price[1].match("[0-9]+")[0];
            });
      }
    },
  },
});

export const { selectAddons, sumAddonTotal } = AddonSelectorSlice.actions;
export default AddonSelectorSlice.reducer;
