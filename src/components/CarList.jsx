import { useSelector } from "react-redux"

const CarList = () => {
  const cars = useSelector(state => state.cars);

  console.log(cars)

  const renderedCars = cars.map(car => {
    return(
      <li key={car.id} className="flex gap-x-1 items-center justify-between border rounded border-zinc-600 p-1">
        <span>{car.name}</span>
        <button>Delete</button>
      </li>
    )
  })

  return (
    <ul className="flex flex-col gap-y-1 mb-4">
      {renderedCars}
    </ul>
  )
}

export default CarList