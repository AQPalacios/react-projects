import { Route, Routes } from "react-router-dom";
import { Header } from "./components/ui/header/Header";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
function App() {
    return (
        <div className="max-w-[1080px] m-auto text-custom-white">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />}/>
            </Routes>
        </div>
    );
}

export default App;
