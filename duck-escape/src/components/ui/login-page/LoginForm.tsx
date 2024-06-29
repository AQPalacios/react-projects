import { FC } from "react";
import { Title, Input, Button } from "../../primitives";

interface LoginFormProps {
    className?: string;
}
export const LoginForm: FC<LoginFormProps> = ({ className = "" }) => {
    return (
        <div
            className={`relative w-full max-w-[420px] h-[480px] bg-custom-blue rounded ${className}`}
        >
            <form className="flex flex-col justify-center items-center size-full">
                <Title title="Iniciar Sesión" className="text-3xl"/>
                <div className="flex flex-col gap-4 w-full px-14">
                    <Input type="text" placeholder="Usuario" name=""/>
                    <Input
                        type="password"
                        name=""
                        // id=""
                        placeholder="Contraseña"
                    />
                    <Button type="submit" className="p-2 hover:bg-custom-blue-dark">Iniciar Sesión</Button>
                </div>
            </form>
        </div>
    );
};
