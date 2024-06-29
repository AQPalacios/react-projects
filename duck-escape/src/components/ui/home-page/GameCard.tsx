import { FC } from "react";
import { Title } from "../../primitives/Title";

interface GameCardProps {
    img: string;
    alt: string;
    title: string;
    reverse?: boolean;
}

export const GameCard: FC<GameCardProps> = ({
    img,
    alt,
    title,
    reverse = false,
}) => {
    return (
        <div
            className={`flex max-h-[400px] border-custom-blue border-2 rounded py-2 px-4 ${
                reverse ? "flex-row-reverse border-custom-red" : ""
            }`}
        >
            <div className="w-4/6 flex justify-center items-center">
                <img src={`/img/${img}`} alt={alt} className="h-full" />
            </div>
            <div className="w-2/6 flex items-center justify-center">
                <Title
                    title={title}
                    // TODO py-0 en el className no funciona, el componente Title ya tiene py-8
                    className={`h-fit border-b-2 py-0 ${
                        reverse ? "border-custom-blue" : "border-custom-red"
                    }`}
                />
            </div>
        </div>
    );
};