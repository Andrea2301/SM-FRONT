import {BrowserRouter,Routes,Route} from "react-router-dom"
import Loginpage from "../pages/Login/LoginPage";

function AppRouter(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/home" element={<HomePage/>} />
            <Route path="/login" element={<Loginpage/>} />
            <Router path="/register" element={<Registerpage/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;