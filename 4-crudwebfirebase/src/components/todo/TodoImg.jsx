export default function TodoImg({ urlimg, title }) {
  return (
    <div className="box todo-img">
      <img src={urlimg} alt={title} />
    </div>
  );
}
