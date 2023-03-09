import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  question1: "What is your name?",
  question2: "",
};

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    updateQuestion1(state, action) {
      state.question1 = action.payload;
      return state;
    },
    updateQuestion2(state, action) {
      state.question2 = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      AsyncStorage.removeItem("root");
      state.question1 = "";
      state.question2 = "";
    });
  },
});

export const { updateQuestion1, updateQuestion2 } = questionSlice.actions;

const questionReducer = questionSlice.reducer;

export default questionReducer;
