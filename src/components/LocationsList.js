import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function LocationList() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/location/')
      .then((res) => {
        setLocations(res.data.results)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, []);

  return (
    <section className="location-list grid-view">
      {locations.map((location) => (
        <h2>{location.name}</h2>
      ))}
    </section>
  );
}
