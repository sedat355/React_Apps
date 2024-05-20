import { useSelector } from "react-redux"

const CarValue = () => {
  const searchName = useSelector(state => state.cars.searchName)
  const state = useSelector(state => state.cars)

  let isMatchedName = state.cars.some(car => {
    if (searchName !== "") {
      return car.name.toLowerCase().includes(searchName.toLowerCase())
    }
  })

  const filteredCars = state.cars.filter( car => {
    return car.name.toLowerCase().includes(state.searchTerm.toLowerCase())
  })

  const totalValue = filteredCars.reduce((total,currCar) => {
    return total += currCar.value
  },0)

  return (
    <div>
      <span>
        Total Value: <strong>&#36;{totalValue}</strong>
      </span>
      {isMatchedName && (
        <div className="absolute  text-wrap p-2 bg-red-600 font-bold text-white">
          Eklemeye çalıştığınız arabanın aynısından listenizde olabilir, lütfen
          kontrol edin!
        </div>
      )}
    </div>
  )
}

export default CarValue
