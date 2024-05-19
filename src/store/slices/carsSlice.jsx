import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const initialState = [
  {id: nanoid(), name: 'Audi', value: 8000 },
  {id: nanoid(), name: 'Toyota', value: 18000 },
  {id: nanoid(), name: 'Ford', value: 12000 },
]

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state,action) => {
      state.push(action.payload)
    }
  }
});

export const carsReducer = carsSlice.reducer
export const { addCar } = carsSlice.actions
