import { useNavigate } from "react-router-dom";


// src/pages/Login.jsx
function Login() {

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí iría la lógica de autenticación
    // Si la autenticación es exitosa, redirigir a la página principal
    navigate("/home");
  }


  return (
    <div className="login-container">
      <h1>View login</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button onClick={handleLogin} type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
