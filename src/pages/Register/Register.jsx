import { useState } from "react";
import api from "../../services/api";
import "../Register/register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/api/Auth/register", {
        username,
        email,
        password,
        role
      });

      setMessage(" Registro exitoso. Ahora puedes iniciar sesión.");
      console.log("Respuesta del backend:", response.data);

      // Limpia el formulario
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error al registrar:", error);
      setMessage("Error al registrar. Verifica tus datos.");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
            <input
          type="text"
          placeholder="USername"
          value={setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">REGISTER</button>
      </form>

      {message && <p className="register-message">{message}</p>}
    </div>
  );
}

export default Register;
