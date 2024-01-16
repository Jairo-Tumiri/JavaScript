import IconPLay from "../icons/IconPlay";

export default function TodoVideo({ title, urlvideo }) {
  return (
    <div className="box todo-video">
      <div
        className="todo-video-cont"
        onClick={() => {
          window.open(urlvideo, "_blank");
        }}
      >
        <IconPLay />
      </div>
      <div className="todo-video-info">
        <h5>{title}</h5>
        <p>Click Video </p>
      </div>
    </div>
  );
}
