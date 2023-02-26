import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PokemonModal = () => {
  const [pokemon, setPokemon] = useState(null);


  return (
    <Modal isOpen={pokemon !== null} onRequestClose={() => setPokemon(null)}>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      )}
    </Modal>
  );
};

export default PokemonModal
