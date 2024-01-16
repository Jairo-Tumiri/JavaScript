export default function HeaderLi({ children, handleClick, item }) {
  const { id, name, type } = item;
  return (
    <li
      onClick={() => {
        handleClick(name);
      }}
    >
      <span className={id}>
        {children}
        <p>{name}</p>
      </span>
    </li>
  );
}
