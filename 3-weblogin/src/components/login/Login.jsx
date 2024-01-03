import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import InputControl from "../inputControl/InputControl";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const iniciarSesion = () => {
    // console.log(values.email, values.password);
    if (!values.email || !values.password) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg([]);
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(async (resolve) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg("Contraseña o email incorrecto");
        console.log(error.message);
      });
  };
  return (
    <div>
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
          {submitButtonDisabled ? (
            <a
              style={{
                color: "red",
              }}
            >
              {errorMsg}
            </a>
          ) : (
            <></>
          )}

          <button
            className="mybtn"
            onClick={iniciarSesion}
            disabled={submitButtonDisabled}
          >
            Iniciar Sesion
          </button>
        </div>
        <Link to="/signup">
          No tengo cuenta <strong>registrarme</strong>
        </Link>
      </form>
    </div>
  );
}
