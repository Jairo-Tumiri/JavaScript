export default function TodoNote({ title, subtitle, texto }) {
  return (
    <article className="box todo-note">
      <h4>{title}</h4>
      <h5>{subtitle}</h5>
      <p>{texto}</p>
    </article>
  );
}
