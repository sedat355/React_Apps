import './assets/css/style.css'
import CarForm from './components/CarForm'
import CarList from './components/CarList'
import CarSearch from './components/CarSearch'
import CarValue from './components/CarValue'

function App() {
  return(
    <div>
      <h1>Car Apps</h1>
      <CarForm/>
      <CarSearch/>
      <CarList/>
      <CarValue />
    </div>
  )
}

export default App
