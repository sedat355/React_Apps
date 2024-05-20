import { useDispatch, useSelector } from "react-redux"
import { deleteCar } from "../store/slices/carsSlice";

const CarList = () => {
  const state = useSelector(state => state.cars);
  const searchName = useSelector(state => state.cars.searchName)
  const dispatch = useDispatch()


  const renderedCars = state.cars.map(car => {
    const isMatchedName = searchName !== '' && car.name.toLowerCase().includes(searchName.toLowerCase());

    const isMatchedSearch = car.name.toLowerCase().includes(state.searchTerm.toLowerCase());
    if(isMatchedSearch) {
      return(
        <li 
          key={car.id} 
          className={`${isMatchedName && 'font-bold'} flex gap-x-1 items-center justify-between border rounded border-zinc-600 p-1`}
        >
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