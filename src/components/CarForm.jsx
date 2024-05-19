const CarForm = () => {
  return (
    <form className="flex gap-x-1 mb-4">
      <div className="flex flex-col">
        <span>Car Name:</span>
        <input />
      </div>
      <div className="flex flex-col">
        <span>Car Value:</span>
        <input />
      </div>

      <button 
        className="self-end"
        type="submit">Submit</button>
    </form>
  )
}

export default CarForm
