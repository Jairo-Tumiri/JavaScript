export default function AddTodoInput(prop) {
  const { name, type, placeholder, className, children, handleChange } = prop;
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={handleChange}
      />
      {children}
    </>
  );
}
