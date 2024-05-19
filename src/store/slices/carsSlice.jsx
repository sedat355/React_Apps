import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const initialState = [
  {id: nanoid(), name: 'Audi A5', value: 8000 },
  {id: nanoid(), name: 'Toyota Corolla', value: 18000 },
  {id: nanoid(), name: 'Ford Mondeo', value: 12000 },
]

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      const newCar = action.payload
      state.push(newCar)
    },
    deleteCar: (state, action) => {
      const index = state.findIndex(car => car.id === action.payload)
      state.splice(index,1)//veya filter ile:
      //return state.filter(car => car.id !== action.payload)
    },
  }
});

export const carsReducer = carsSlice.reducer
export const { addCar, deleteCar } = carsSlice.actions
