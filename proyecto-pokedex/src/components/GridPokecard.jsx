// import { useEffect } from "react";
import { Pokecard } from "./Pokecard";
import "../styles/GridPokecard.css";

export const GridPokecard = () => {
    const numeros = [1, 2, 3, 4, 5, 6, 7];
    const seleccionado = false;
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Pokédex</h1>
            <div className="GridPokecard">
                {numeros.map((numero) => (
                    <Pokecard key={numero} seleccionado={seleccionado} />
                ))}
            </div>
        </>
    );
};
