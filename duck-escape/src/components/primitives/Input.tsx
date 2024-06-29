import { FC } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}
export const Input: FC<InputProps> = ({ className = "", ...props }) => {
    return (
        <input className={`p-2 rounded outline-none text-primary ${className}`} {...props} />
    );
};
