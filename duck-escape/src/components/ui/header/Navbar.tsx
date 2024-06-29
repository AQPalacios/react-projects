import { NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "text-custom-red" : ""
                        }
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? "text-custom-red" : ""
                        }
                    >
                        Ingresar
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/register"}
                        className={({ isActive }) =>
                            isActive ? "text-custom-red" : ""
                        }
                    >
                        Registrarse
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
