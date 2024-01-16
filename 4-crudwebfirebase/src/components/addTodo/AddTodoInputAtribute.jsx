import AddTodoInput from "./AddTodoInput";
export default function AddTodoInputAtribute({
  atribute,
  atributes,
  handleChange,
  name,
}) {
  return (
    <>
      {atribute.map((atributo) => {
        return (
          <AddTodoInput
            key={atributes[atributo].id}
            name={atributes[atributo].name}
            type={atributes[atributo].type}
            placeholder={atributes[atributo].placeholder}
            className={atributes[atributo].className}
            handleChange={handleChange}
          ></AddTodoInput>
        );
      })}
      {name === "Nota" ? (
        <textarea
          className="textarea"
          name="texto"
          placeholder="Texto"
          onChange={handleChange}
        ></textarea>
      ) : (
        <></>
      )}
    </>
  );
}
