import './assets/css/style.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
  return(
    <div className='w-full mx-auto relative'>
      <h1 className="text-center mb-4">Car Apps</h1>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue />
    </div>
  )
}

export default App
