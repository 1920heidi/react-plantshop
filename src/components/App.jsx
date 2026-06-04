import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  // 1. FETCH plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // 2. ADD new plant (POST request)
  function addPlant(newPlant) {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => setPlants([...plants, data]));
  }

  // 3. TOGGLE out of stock (NON-PERSISTING)
  function toggleStock(id) {
    const updated = plants.map((plant) =>
      plant.id === id
        ? { ...plant, isSoldOut: !plant.isSoldOut }
        : plant
    );

    setPlants(updated);
  }

  // 4. SEARCH filter
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <PlantPage
        plants={filteredPlants}
        onAddPlant={addPlant}
        onToggleStock={toggleStock}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default App;