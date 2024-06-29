import { FC } from "react";
import { Title, Input, Button } from "../../primitives";

interface RegisterFormProps {
    className?: string;
}
export const RegisterForm: FC<RegisterFormProps> = ({ className = "" }) => {
    return (
        <div
            className={`relative w-full max-w-[420px] h-[480px] bg-custom-red rounded ${className}`}
        >
            <form className="flex flex-col justify-center items-center size-full">
                <Title title="Registrarse" className="text-3xl"/>
                <div className="flex flex-col gap-4 w-full px-14">
                    <Input type="text" placeholder="Usuario" name=""/>
                    <Input
                        type="password"
                        name=""
                        // id=""
                        placeholder="Contraseña"
                    />
                    <Input
                        type="password"
                        name=""
                        // id=""
                        placeholder="Repetir Contraseña"
                    />
                    <Button type="submit" className="p-2 hover:bg-custom-red-dark">Registrar</Button>
                </div>
            </form>
        </div>
    );
};
