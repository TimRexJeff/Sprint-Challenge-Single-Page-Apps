import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodeCard from "./EpisodeCard"

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
            <EpisodeCard    name={episode.name}
                            episode={episode.episode}
                            air_date={episode.air_date}
                            characters={episode.characters.length} />
        ))}
    </section>
  );
}
