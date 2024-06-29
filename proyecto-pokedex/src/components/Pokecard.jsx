import { useState } from "react";
import "../styles/Pokecard.css";

export const Pokecard = ({ seleccionado }) => {
    const [estaSeleccionado, setEstaSeleccionado] = useState(seleccionado);
    
    const seleccionar = () => {
        setEstaSeleccionado(!estaSeleccionado);
    };

    return (
        <article onClick={seleccionar} className="pokecard">
            <section className="pokecard-image">
                <img src="" alt="Imagen del Pokemon" />
            </section>
            <h3 className="pokecard-title">
                {!estaSeleccionado ? "Nombre del Pokémon" : "Seleccionado"}
            </h3>
            <section className="pokecard-types">Electrico</section>
        </article>
    );
};
