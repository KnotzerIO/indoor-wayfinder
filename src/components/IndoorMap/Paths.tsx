import { graphData } from "@/store/graphData";

function Paths() {
  return (
    <g id="Edges">
      {graphData.edges.map((edge) => {
        const { id, from, to } = edge;
        const fromVertex = graphData.vertices.find(
          (vertex) => vertex.id === from
        );
        const toVertex = graphData.vertices.find((vertex) => vertex.id === to);
        if (fromVertex && toVertex) {
          const pathClassName = "path";
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return <path key={id} id={id} className={pathClassName} d={pathD} />;
        }
        return null;
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
