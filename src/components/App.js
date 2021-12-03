import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {

  // Plants API link = http://localhost:6001/plants

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")
 
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((res) => res.json())
    .then((plants) => {setPlants(plants)});
  }, [])

  function handleNewPlant(newPlant) {
    let updatedPlantsArray = [...plants, newPlant]
    setPlants(updatedPlantsArray)

  }

  function handleSearch(searchInput) {
    setSearch(searchInput)
  }

  const plantsToDisplay = plants.filter((plant) => {
    return (!search.length) ? true : plant.name.includes(search)
  })

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plantsToDisplay} onSubmit={handleNewPlant} onSearch={handleSearch}/>
    </div>
  );
}

export default App;
