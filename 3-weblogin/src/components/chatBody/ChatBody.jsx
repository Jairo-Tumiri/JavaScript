const ChatBody = ({ imgContact, name }) => {
  return (
    <>
      <div className="contact bar">
        <div
          className="pic"
          style={{ backgroundImage: `url(${imgContact})` }}
        />
        <div className="name">{name}</div>
        <div className="seen">Hoy a las 12:56</div>
      </div>

      <div className="messages" id="chat">
        <div className="time">Hoy a las 11:41</div>
        <MessageUser />
        <MessageNoUser />
        <Typing />
      </div>

      <div className="input">
        <i className="fas fa-camera" />
        <i className="far fa-laugh-beam" />
        <input placeholder="Type your message here!" type="text" />
        <i className="fas fa-microphone" />
      </div>
    </>
  );
};
const Typing = () => {
  return (
    <div className="message noUser">
      <div className="typing typing-1" />
      <div className="typing typing-2" />
      <div className="typing typing-3" />
    </div>
  );
};
const MessageUser = () => {
  return (
    <div className="message user">Hey, man! What's up, Mr Stark ?&nbsp;👋</div>
  );
};
const MessageNoUser = () => {
  return <div className="message noUser">Kid, where'd you come from?</div>;
};

export default ChatBody;
