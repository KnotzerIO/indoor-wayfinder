import { useControls } from "react-zoom-pan-pinch";
import { FaPlus, FaMinus, FaExpandAlt } from "react-icons/fa";

function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className="inline-flex rounded-md absolute right-0 bottom-0 invisible md:visible">
      <button
        className="control-btn rounded-l"
        aria-label="zoomIn"
        onClick={() => zoomIn()}
      >
        <FaPlus />
      </button>
      <button
        className="control-btn"
        aria-label="zoomOut"
        onClick={() => zoomOut()}
      >
        <FaMinus />
      </button>
      <button
        className="control-btn rounded-r"
        aria-label="resetTransform"
        onClick={() => resetTransform()}
      >
        <FaExpandAlt />
      </button>
    </div>
  );
}

export default Controls;
