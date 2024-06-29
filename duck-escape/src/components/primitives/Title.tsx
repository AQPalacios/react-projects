import { FC } from "react";

interface TitleProps {
    title: string;
    className?: string;
}

export const Title: FC<TitleProps> = ({ title, className = '' }) => {
    return <h1 className={`text-2xl py-8 ${className}`}>{title}</h1>;
};