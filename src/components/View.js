import React from "react";

export default function ViewList({ pokeList }) {

  function pokeRenderHandler(poke) {
    return (
      <div >
        <img style={{height:'150px', width:'150px' }} src={poke.image} alt={poke.name} />
        <h6 style={{textTransform: "capitalize"}}>{poke.name}</h6>
      </div>
    )
  }

  return(
    <div>
      { pokeList.map(pokeRenderHandler) }
    </div>
  )
}