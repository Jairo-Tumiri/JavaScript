export default function InputControl(props) {
  return (
    <div>
      {/* {props.label && <label>{props.label}</label>} */}
      <input className="myinput" {...props} />
    </div>
  );
}
