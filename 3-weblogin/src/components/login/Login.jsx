import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import InputControl from "../inputControl/InputControl";
import "./Login.scss";
export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState("Contraseña o email incorrecto");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const iniciarSesion = () => {
    if (!values.email || !values.password) {
      setSubmitButtonDisabled(true);
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (resolve) => {
        setSubmitButtonDisabled(false);
        navigate("/chat");
      })
      .catch((error) => {
        setSubmitButtonDisabled(true);
        setErrorMsg("Contraseña o email incorrecto");
        console.log(error);
      });
  };
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Iniciar Sesion</p>
        <InputControl
          label="name"
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setValues({ ...values, email: event.target.value });
          }}
        />
        <InputControl
          label="name"
          placeholder="Password"
          type="password"
          onChange={(event) => {
            setValues({ ...values, password: event.target.value });
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "start",
            flexDirection: "column",
          }}
        >
          <button className="mybtn" onClick={iniciarSesion}>
            Iniciar Sesion
          </button>
          <a
            style={{
              display: submitButtonDisabled ? "unset" : "none",
              color: "red",
            }}
          >
            {errorMsg}
          </a>
        </div>
        <Link to="/register">
          No tengo cuenta <strong>registrarme</strong>
        </Link>
      </form>
    </div>
  );
}
