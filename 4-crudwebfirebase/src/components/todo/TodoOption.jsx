import IconDelete from "../icons/IconDelete";
import IconOptions from "../icons/IconOptions";
import IconEdit from "../icons/IconEdit";
export default function TodoOption({
  stateContextMenu,
  setStateContextMenu,
  handleDelete,
  handleEdit,
  id,
}) {
  return (
    <div className={`todooption ${stateContextMenu ? "on-toop" : "off-toop"}`}>
      <ul
        className={`todooption-lista ${
          stateContextMenu ? "on-toop-list" : "off-toop-list"
        }`}
      >
        <li
          onClick={() => {
            handleDelete(id);
          }}
        >
          <IconDelete />
        </li>
        <li
          onClick={() => {
            handleEdit(id);
          }}
        >
          <IconEdit />
        </li>
      </ul>
      <span
        className="todooption-principal"
        onClick={() => {
          setStateContextMenu(!stateContextMenu);
        }}
      >
        <IconOptions />
      </span>
    </div>
  );
}
