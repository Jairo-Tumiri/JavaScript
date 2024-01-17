import { contactsData } from "../data/data";
import { useState, useEffect } from "react";
import BeforeChat from "../components/beforeChat/BeforeChat";
import ChatBody from "../components/chatBody/ChatBody";
import { auth } from "../config/firebase";
import "./Message.scss";
import { useNavigate } from "react-router-dom";
export default function Message() {
  const navigate = useNavigate({});
  const [user, setUser] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const [dataContact, setDataContact] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user.reloadUserInfo);
      } else {
        setUser(null);
        navigate("/");
      }
    });
  }, []);
  const handleMyInfo = () => {
    setActiveChat(false);
  };
  const handleActiveChat = (imgContact, name) => {
    setActiveChat(true);
    setDataContact({
      imgContact,
      name,
    });
  };
  return (
    <div className="center">
      <div className="sectionMessage contacts">
        <div style={{ display: "flex" }} className="sectionInfo">
          <img
            onClick={handleMyInfo}
            src="https://img.icons8.com/ios-filled/30/ffffff/automatic.png"
            alt="automatic"
          />
          <h2>Contactos</h2>
        </div>
        <div className="contactsBody">
          {contactsData.map((contact, index) => (
            <Contact
              key={index}
              {...contact}
              handleActiveChat={handleActiveChat}
            />
          ))}
        </div>
      </div>
      <div className="sectionMessage chat">
        {activeChat === true ? (
          <ChatBody {...dataContact} />
        ) : (
          <BeforeChat {...user} />
        )}
      </div>
    </div>
  );
}

const Contact = ({ imgContact, badge, name, message, handleActiveChat }) => {
  return (
    <div
      className="contact"
      onClick={() => {
        handleActiveChat(imgContact, name);
      }}
    >
      <div
        className="pic"
        style={{ backgroundImage: `url("${imgContact}")` }}
      />
      <div className="badge">{badge}</div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};
