import { createSlice } from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: 'car',
  initialState: {name: '', value: ''},
  reducers: {
    handleCarName: (state, action) => {
      state.name = action.payload;
    },
    handleCarValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const addCarReducer = carSlice.reducer
export const { handleCarName, handleCarValue } = carSlice.actions
