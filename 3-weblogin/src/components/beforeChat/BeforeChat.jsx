import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import "./BeforeChat.scss";
const BeforeChat = ({ displayName, email, lastRefreshAt }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("sesion cerrada");
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src="https://png.pngtree.com/png-vector/20221107/ourlarge/pngtree-photo-camera-with-arrows-icon-video-change-image-vector-png-image_40129364.jpg" />
        </div>
        <div className="desc">
          <h6 className="primary-text">{displayName}</h6>
          <h6 className="secondary-text">{email}</h6>
        </div>
        <span className="primary-text">{lastRefreshAt}</span>
        <div className="details" onClick={handleLogout}>
          <div className="rating">
            <p className="primary-text"> Cerrar Sesion </p>
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios-filled/50/ffffff/logout-rounded.png"
              alt="logout-rounded"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BeforeChat;
