import { useDispatch, useSelector } from "react-redux"
import { handleSearch, handleSearchName } from "../store/slices/carsSlice"
import { handleCarName } from "../store/slices/addCarSlice"

const CarSearch = () => {
  const state = useSelector(state => state.cars)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(handleSearch(e.target.value))
    dispatch(handleCarName(''))
    dispatch(handleSearchName(''))
  }
  
  return (
    <div className="mb-4">
      <input 
        value={state.searchTerm}
        onChange={handleChange}
        className="w-full" 
        placeholder="Search..."
      />
    </div>
  )
}

export default CarSearch