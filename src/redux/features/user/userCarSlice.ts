import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  id: 1,
  name: "Add name...",
};

const userCarSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addUserCar(state, action) {
      //replace initialState with action.payload
      state = action.payload;
      return state;
    },
    deleteUserCar(state, action) {
      //deletes initialState
      state = {
        id: 0,
        name: "Add name...",
      };
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.id = 1;
      state.name = "";
    });
  },
});

export const { addUserCar, deleteUserCar } = userCarSlice.actions;
const userCarReducer = userCarSlice.reducer;

export default userCarReducer;
