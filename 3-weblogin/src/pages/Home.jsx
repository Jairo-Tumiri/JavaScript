import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";

export default function Home({ name }) {
  const navigate = useNavigate();
  const cerrarSesion = () => {
    auth.signOut();
    navigate("/");
  };
  return (
    <div className="home">
      <div className="home-link">
        <Link to="/login">
          <h1 className="mybtn">Login</h1>
        </Link>
        <br />
        <Link to="/signup">
          <h1 className="mybtn">SignUp</h1>
        </Link>
      </div>
      {name ? (
        <div
          className="home-valid"
          style={{ fontSize: ".8rem", textAlign: "center" }}
        >
          <h2>BIENVENIDO {name}</h2>
          <button
            style={{
              background: "#890707",
            }}
            className="mybtn"
            onClick={cerrarSesion}
          >
            Cerrar Sesion
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
