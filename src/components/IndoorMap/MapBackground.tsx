import floorplan from "@/assets/floorplan_updated.webp";
import { ReactNode } from "react";
interface MapBackgroundProps {
  children: ReactNode;
}

function MapBackground({ children }: MapBackgroundProps) {
  return (
    <svg viewBox="0 0 1500 959" className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]">
      <image
        id="background"
        width={5457}
        height={3707}
        href={floorplan}
        transform="translate(17.505 -31.138) scale(.2697)"
      />
      {children}
    </svg>
  );
}

export default MapBackground;

//! Dont delete bc might be useful sometime
/*
  const getMousePositionSVG = (event: MouseEvent) => {
    const point = svgRef.current?.createSVGPoint();
    if (point) {
      point.x = event.clientX;
      point.y = event.clientY;
      const transformedPoint = point.matrixTransform(
        svgRef.current?.getScreenCTM()?.inverse()
      );
      console.log(transformedPoint.x, transformedPoint.y);
    }
  };
  useEffect(() => {
    svgRef.current?.addEventListener("click", getMousePositionSVG);
    console.log(svgRef.current?.getBoundingClientRect());
  }, []);
  */
