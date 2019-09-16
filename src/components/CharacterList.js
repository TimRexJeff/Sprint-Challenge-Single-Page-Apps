import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then((res) => {
        setCharacters(res.data.results)
      })
      .catch((err) => {
        console.log('Error:', err)
      })
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map((character) => (
        <CharacterCard  image={character.image}
                        name={character.name}
                        species={character.species}
                        status={character.status}
                        location={character.location.name}
                        origin={character.origin.name}
                        episode={character.episode} />
      ))}
    </section>
  );
}