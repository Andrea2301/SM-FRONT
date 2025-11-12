// src/Routes/AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

// import { Routes, Route } from "react-router";

// function Wizard() {
//   return (
//     <div>
//       <h1>Some Wizard with Steps</h1>
//       <Routes>
//         <Route index element={<StepOne />} />
//         <Route path="step-2" element={<StepTwo />} />
//         <Route path="step-3" element={<StepThree />} />
//       </Routes>
//     </div>
//   );
// }

