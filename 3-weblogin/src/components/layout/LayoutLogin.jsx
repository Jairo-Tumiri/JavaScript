import { Outlet } from "react-router-dom";
import ico from "../../assets/img/ico.png";
import { Link } from "react-router-dom";
import "./LayoutLogin.scss";
export default function LayoutLogin({ name }) {
  return (
    <>
      <section className="layoutLogin">
        <img src={ico} alt="" height={"75px"} />
      </section>
      <Outlet />
    </>
  );
}
