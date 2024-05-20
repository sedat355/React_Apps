import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store/slices/carsSlice";

const CarList = () => {
  const state = useSelector(state => state.cars);
  const dispatch = useDispatch()


  const renderedCars = state.cars.map(car => {
    if(car.name.toLowerCase().includes(state.searchTerm.toLowerCase())) {
      return(
        <li key={car.id} className="flex gap-x-1 items-center justify-between border rounded border-zinc-600 p-1">
          <span className="">{car.name}</span>
          <span className="ml-auto mr-8">&#36;{car.value}</span>
          <button
            onClick={() => dispatch(deleteCar(car.id))}
          >Delete</button>
        </li>
      )
    }
  })

  return (
    <ul className="flex flex-col gap-y-1 mb-4">
      {renderedCars}
    </ul>
  )
}

export default CarList