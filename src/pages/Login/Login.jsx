import { useNavigate } from "react-router-dom";


// src/pages/Login.jsx
function Login() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/home");
  }


  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button onClick={handleLogin} type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
