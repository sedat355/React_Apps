import { useSelector } from "react-redux"

const CarValue = () => {
  const searchName = useSelector(state => state.cars.searchName)
  const cars = useSelector(state => state.cars.cars)

  let isMatchedName = cars.some(car => {
    if (searchName !== "") {
      return car.name.toLowerCase().includes(searchName.toLowerCase())
    }
  })

  return (
    <div>
      <span>
        Total Value: <strong>&#36;{22500}</strong>
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
