import "./BottomBar.scss";
export default function BottomBar() {
  return (
    <div className="bottom">
      <div className="bottomBtn">
        <p className="bgCircleWhite">A</p>
        <p>See Details</p>
      </div>
      <div className="bottomBtn">
        <p className="bgCircleWhite">X</p>
        <p>Habitat</p>
      </div>
      {/* <div className="bottomBtn">
        <p className="bgCircleWhite">Y</p>
        <p>Sort</p>
      </div>
      <div className="bottomBtn">
        <p className="bgCircleWhite">+</p>
        <p>See Evaluation</p>
      </div>
      <div className="bottomBtn">
        <p className="bgCircleWhite">B</p>
        <p>Back</p>
      </div> */}
    </div>
  );
}
