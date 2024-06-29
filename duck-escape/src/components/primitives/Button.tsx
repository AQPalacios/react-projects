import { FC } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
}
export const Button: FC<ButtonProps> = ({ className = "", ...props }) => {
    return (
        <button
            className={`border p-4 rounded font-bold transition duration-100 ease-in ${className}`}
            {...props}
        />
    );
};
