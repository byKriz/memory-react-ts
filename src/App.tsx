import { useEffect, useState } from "react";
import { Character } from "./models/Character";
import { ApiResult } from "./models/ApiResult";

function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data: ApiResult) => {
        setCharacters(data.results);
      });
  }, []);

  return (
    <>
      <div className="flex flex-1 flex-col">
        <h1 className="text-3xl font-bold underline">Memory Game</h1>
        {characters.map((char) => (
          <div className="flex gap-5" key={char.id}>
            <div>
              <h3>{char.name}</h3>
              <p className="flex flex-col">
                <span>Location: {char.location.name}</span>
                <span>Gender: {char.gender}</span>
                <span>Origin Episode: {char.episode[0]}</span>
                <span>Status: {char.status}</span>
              </p>
            </div>
            <div>
              <img src={char.image} alt={char.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
