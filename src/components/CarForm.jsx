import { useDispatch, useSelector } from "react-redux"
import { handleCarName, handleCarValue } from "../store/slices/addCarSlice"
import { addCar } from "../store/slices/carsSlice"

const CarForm = () => {
  const car = useSelector(state => state.car)
  const dispatch = useDispatch()
  
  console.log(car)

  const handleName = e => {
    dispatch(handleCarName(e.target.value))
  }

  const handleValue = e => {
    dispatch(handleCarValue(parseInt(e.target.value)))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCar(car))

  }

  return (
    <form 
      className="flex gap-x-1 mb-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col">
        <span>Car Name:</span>
        <input value={car.name} name="name" onChange={handleName} />
      </div>
      <div className="flex flex-col">
        <span>Car Value:</span>
        <input value={car.value} name="value" onChange={handleValue} />
      </div>

      <button 
        className="self-end" 
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}

export default CarForm
