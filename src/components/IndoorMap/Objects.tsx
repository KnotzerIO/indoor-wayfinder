interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    // TODO: Transfer from object id to name
    <g id="Objects">
      
    </g>
  );
}

export default Objects;
