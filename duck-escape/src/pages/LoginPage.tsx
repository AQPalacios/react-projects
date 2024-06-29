// import { Title } from "../components/primitives/Title";
import { Title } from "../components/primitives";
import { LoginForm } from "../components/ui/login-page/LoginForm";

export const LoginPage = () => {
    // const [openLogin, setOpenLogin] = useState<boolean>(true);
    // const [openRegister, setOpenRegister] = useState<boolean>(false);

    // const handleOpenForm = () => {
    //     setOpenLogin((state) => !state);
    //     setOpenRegister((state) => !state);
    // };

    return (
        <div className="px-2">
            <Title title="Ingresar"/>
            <div className="flex justify-center">
                <LoginForm />
            </div>

            {/* <div className="grid grid-cols-12 w-full mt-32"> */}
            {/* <div className="relative col-span-6 bg-custom-blue rounded p-6 ">
                    <Title title="¿Ya tienes una cuenta?" />
                    <Paragraph className="text-base italic">
                        {"Inicia sesión para entrar en la pagina"}
                    </Paragraph>
                    <Button
                        className=" hover:bg-custom-blue-dark"
                        onClick={handleOpenForm}
                    >
                        Iniciar Sesión
                    </Button>
                    <div
                        className={`absolute w-full -top-28 left-0 ${
                            openLogin ? "" : "hidden "
                        }`}
                    >
                        <LoginForm />
                    </div>
                </div> */}

            {/* <div className="relative col-span-6 bg-custom-red rounded p-6">
                    <Title title="¿Aún no tienes cuenta?" />
                    <Paragraph className="text-base italic">
                        {"Registrate y prueba la experiencia de un Escape Room"}
                    </Paragraph>
                    <Button
                        onClick={handleOpenForm}
                        className="hover:bg-custom-red-dark"
                    >
                        Registrarse
                    </Button>
                    <div
                        className={`absolute w-full -top-28 left-0 ${
                            openRegister ? "" : "hidden"
                        }`}
                    >
                        <RegisterForm />
                    </div>
                </div> */}
            {/* </div> */}
        </div>
    );
};
