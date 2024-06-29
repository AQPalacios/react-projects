import { FC, PropsWithChildren } from "react";
interface ParagraphProps {
    className?: string;
}

export const Paragraph: FC<PropsWithChildren<ParagraphProps>> = ({
    children,
    className,
}): JSX.Element => {
    return <p className={`py-2 text-lg ${className}`}>{children}</p>;
};
