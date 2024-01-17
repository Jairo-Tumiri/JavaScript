import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import InputControl from "../inputControl/InputControl";
import "./Register.scss";
export default function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ name: "", email: "", password: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const registro = () => {
    console.log(errorMsg);
    if (!values.name || !values.email || !values.password) {
      setErrorMsg("Todos los campos son obligatorios");
      return;
    }
    setErrorMsg([]);
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (resolve) => {
        setSubmitButtonDisabled(false);
        const user = resolve.user;

        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(error.message);
      });
  };

  return (
    <div className="singup">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>Registro</p>
        <InputControl
          label="name"
          placeholder="Name"
          type="text"
          onChange={(event) => {
            setValues({ ...values, name: event.target.value });
          }}
        />
        <InputControl
          label="email"
          placeholder="Email"
          type="email"
          onChange={(event) => {
            setValues({ ...values, email: event.target.value });
          }}
        />
        <InputControl
          label="password"
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
          {!submitButtonDisabled ? (
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
            onClick={registro}
            disabled={submitButtonDisabled}
          >
            Registar
          </button>
        </div>
        <Link to="/">
          ya tengo cuenta <strong>iniciar sesion</strong>
        </Link>
      </form>
    </div>
  );
}
