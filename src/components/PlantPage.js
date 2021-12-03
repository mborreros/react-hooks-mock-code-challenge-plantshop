import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onSubmit, onSearch }) {

  return (
    <main>
      <NewPlantForm onSubmit={onSubmit}/>
      <Search onSearch={onSearch}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
