import { createSlice } from "@reduxjs/toolkit";

const FormInfoSlice = createSlice({
  name: "useinfo",
  initialState: { usrname: "", usremail: "", usrphone: "" },
  reducers: {
    addName: (state, action) => {
      state.usrname = action.payload;
    },
    addemail: (state, action) => {
      state.usremail = action.payload;
    },
    addphone: (state, action) => {
      state.usrphone = action.payload;
    },
  },
});
export const { addName, addemail, addphone } = FormInfoSlice.actions;
export default FormInfoSlice.reducer;
