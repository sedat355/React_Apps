import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid'

const initialState = {
  searchName: '',
  searchTerm: '',
  cars: [
    {id: nanoid(), name: 'Audi A5', value: 8000 },
    {id: nanoid(), name: 'Toyota Corolla', value: 18000 },
    {id: nanoid(), name: 'Ford Mondeo', value: 12000 },
  ]
}

const carsSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {
    addCar: (state, action) => {
      state.cars.push({id: nanoid(), ...action.payload})
    },
    deleteCar: (state, action) => {
      const index = state.cars.findIndex(car => car.id === action.payload)
      state.cars.splice(index,1)//veya filter ile:
      //return state.filter(car => car.id !== action.payload)
    },
    handleSearch: (state, action) => {
      state.searchTerm = action.payload
    },
    handleSearchName: (state, action) => {
      state.searchName = action.payload
    }
  }
});

export const carsReducer = carsSlice.reducer
export const { addCar, deleteCar, handleSearch, handleSearchName } = carsSlice.actions
