import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({
  plants,
  onAddPlant,
  onToggleStock,
  search,
  setSearch,
}) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />

      <Search search={search} setSearch={setSearch} />

      <PlantList
        plants={plants}
        onToggleStock={onToggleStock}
      />
    </main>
  );
}

export default PlantPage;
