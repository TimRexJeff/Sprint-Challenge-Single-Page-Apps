import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/episode/')
      .then((res) => {
        setEpisodes(res.data.results)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, []);

  return (
    <section className="episode-list grid-view">
        {episodes.map((episode) => (
            <h2>{episode.name}</h2>
        ))}
    </section>
  );
}
