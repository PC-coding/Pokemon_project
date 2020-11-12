import React, { useState, useEffect } from "react";

const useStateWithSessionStorage = (key, initialValue) => {
  const [value, setValue] = useState(
    JSON.parse(sessionStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    const newVal = JSON.stringify(value);
    sessionStorage.setItem(key, newVal);
    }, [value])

  return [value, setValue];
}

export default function Lookup({ addFunc }) {
  const [data, setData] = useStateWithSessionStorage("data", {});
  const [searchTerm, setSearchTerm] = useStateWithSessionStorage("searchTerm", "");

  async function getData() {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    const responseData = await response.json()
    setData({"name": responseData.name, 
             "image": responseData.sprites.front_default, 
             "id": responseData.id,
             "hp": responseData.stats[0].base_stat,
             "attack": responseData.stats[1].base_stat,
             "defense": responseData.stats[2].base_stat,
             "speed": responseData.stats[5].base_stat,
             "spattack": responseData.stats[3].base_stat,
             "spdef": responseData.stats[4].base_stat,
             "weight": responseData.weight,
             "height": responseData.height
            });
  }
  
  return (
    <div>
      <br></br>
      <input value={searchTerm || ""} onChange={e => setSearchTerm(e.target.value)} 
      placeholder="Enter 'pikachu' or 25"/>
      <button onClick={getData}>Search</button>
      { data.image && (
        <div>
            <img src={data.image} className='img' alt="Image" />
          <h2 style={{textTransform:"capitalize", fontWeight: 'bold'}}>{data.name}</h2>
          <p>ID: {data.id}</p>
          <div className="bottom-container">
            <table>
              <tr>
                <th>Base</th>
                <th>Stats</th>
              </tr>
              <tr>
                <td>HP:</td>
                <td class="hp">{data.hp}</td>
              </tr>
              <tr>
                <td>Attack:</td>
                <td class="attack">{data.attack}</td>
              </tr>
              <tr>
                <td>Defense:</td>
                <td class="defense">{data.defense}</td>
              </tr>
              <tr>
                <td>Special Atk:</td>
                <td class="special-attack">{data.spattack}</td>
              </tr>
              <tr>
                <td>Special Def:</td>
                <td class="special-defense">{data.spdef}</td>
              </tr>
              <tr>
                <td>Speed:</td>
                <td class="speed">{data.speed}</td>
              </tr>
            </table>
          </div>
          <button onClick={e => addFunc(data)}>Save</button>
          <br></br>
          <br></br>
        </div>
      )}
    </div>
  )
}