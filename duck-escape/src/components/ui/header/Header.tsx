import { FC } from "react";
import { Navbar } from "./Navbar";

export const Header: FC = (): JSX.Element => {
    return (
        <header className="flex justify-between py-4 px-2 bg-primary w-full">
            <div>
                DuckEscape
            </div>
           <Navbar />
        </header>
    );
};
