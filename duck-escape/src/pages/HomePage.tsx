import { FC } from "react";
import { Title } from "../components/primitives/Title";
import { Paragraph } from "../components/primitives/Paragraph";
import { GameCard } from "../components/ui/home-page/GameCard";
const gamesInfo = [
    {
        src: {
            img: "codigoCesar.webp",
            alt: "Descifrar código",
        },
        title: "Prueba tu ingenio",
    },
    {
        src: {
            img: "memory.webp",
            alt: "Prueba tu memoria",
        },
        title: "Prueba tu memoria",
    },
    {
        src: {
            img: "palabraDesordenada.webp",
            alt: "Prueba tu velocidad",
        },
        title: "Prueba tu velocidad",
    },
];

export const HomePage: FC = (): JSX.Element => {
    return (
        <div className="px-2">
            <Title
                title="DuckEscape"
                className="text-4xl font-bold text-center "
            />
            <Paragraph className="text-xl">
                ¡Bienvenido a nuestra Escape Room! ¿Estás listo para sumergirte
                en una experiencia llena de misterio, emoción y desafíos? En
                nuestro Escape Room, te esperan aventuras que desafiarán tu
                ingenio y capacidad para resolver enigmas.
            </Paragraph>
            <Paragraph className="text-xl">
                ¿Qué te espera dentro? Desde intrigantes escenarios ambientados
                en mundos fantásticos hasta desafiantes rompecabezas que te
                harán poner a prueba cada una de tus habilidades. ¿Serás capaz
                de descifrar los enigmas ocultos, desbloquear secretos y
                encontrar la salida?.
            </Paragraph>
            <div className="space-y-6 my-6">
                {gamesInfo.map(({ src, title }, index) => {
                    if (index % 2 !== 0)
                        return (
                            <GameCard
                                key={index}
                                img={src.img}
                                alt={src.alt}
                                title={title}
                                reverse
                            />
                        );
                    return (
                        <GameCard
                            key={index}
                            img={src.img}
                            alt={src.alt}
                            title={title}
                        />
                    );
                })}
            </div>
            <div className="">

            </div>
        </div>
    );
};
