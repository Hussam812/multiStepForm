import { configureStore } from "@reduxjs/toolkit";
import PlanSlice from "./Slices/PlanSlice";
import AddonSelctorSlice from "./Slices/AddonSelctorSlice";
import FormInfoSlice from "./Slices/FormInfoSlice";

export const store = configureStore({
  reducer: {
    plan: PlanSlice,
    selectedAddons: AddonSelctorSlice,
    userinfo: FormInfoSlice,
  },
});
