import { useNavigate } from "react-router-dom";
import "../Home/home.css"
// src/pages/Login/Login.jsx
function HomePage() {

  const navigate = useNavigate();

  const handlelogin = (event) =>{
    event.preventDefault();
    navigate("./login");
  }


  const handleResgister = (event) =>{
    event.preventDefault();
    navigate("./register")
  }

  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={handlelogin} type="submit">LOGIN</button>
      <button onClick={handleResgister} type="subtmit">REGISTER</button>
    </div>
  );
}

export default HomePage
