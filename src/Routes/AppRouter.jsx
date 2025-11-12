import {BrowserRouter,Routes,Route} from "react-router-dom"
import Loginpage from "../pages/Login/LoginPage";

function AppRouter(){

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Loginpage/>} />
        </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;