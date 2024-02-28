import { graphData } from "@/store/graphData";
import { NavigationContextType } from "@/utils/types";

interface PositionsProps {
  positionRadius: number;
  handlePositionClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className: string;
  navigation?: NavigationContextType["navigation"];
}
function Positions({
  positionRadius,
  handlePositionClick,
  className,
  navigation,
}: PositionsProps) {
  const positionBackgroundColor = "#4285f4";
  const positionBackgroundRadius = positionRadius + 7;
  const positonBackgroundOpacity = 0.2;
  const startVertex = graphData.vertices.find(
    (v) => v.id === navigation?.start
  );
  return (
    <g id="Vertexes">
      <circle
        id="start"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill={positionBackgroundColor}
        opacity={positonBackgroundOpacity}
        r={positionBackgroundRadius}
      />
      {graphData.vertices.map((vertex) => (
        <circle
          onClick={vertex.objectId ? () => {} : handlePositionClick}
          key={vertex.id}
          id={vertex.id}
          // show only positions that are not referring to an object
          className={`position ${vertex.objectId ? "opacity-0" : className} + ${vertex.id === navigation?.start ? "position-active opacity-100" : ""}`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}
      <circle
        id="circle-animation"
        cx={startVertex?.cx}
        cy={startVertex?.cy}
        fill="none"
        stroke="white"
        strokeWidth={2}
        r={positionRadius}
      >
        <animate
          attributeName="stroke-width"
          values="1;3;1"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

export default Positions;
