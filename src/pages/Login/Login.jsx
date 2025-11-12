// src/pages/Login.jsx
function Login() {
  return (
    <div className="login-container">
      <h1>View login</h1>
      <form>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}

export default Login;
