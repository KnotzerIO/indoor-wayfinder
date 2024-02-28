import elevator from "@/assets/piktograms/elevator.svg";
import smoking from "@/assets/piktograms/smoking.svg";
import toilet_men from "@/assets/piktograms/toilet_men.svg";
import toilet_women from "@/assets/piktograms/toilet_women.svg";
function Piktograms() {
  return (
    <g id="piktograms">
      {" "}
      <image href={toilet_men} height={40} x={957} y={300} />
      <image href={toilet_women} height={40} x={900} y={300} />
      <image href={toilet_men} height={40} x={957} y={417} />
      <image href={toilet_women} height={40} x={900} y={420} />
      <image href={smoking} height={30} x={1380} y={250} />
      <image href={elevator} height={80} x={440} y={450} />
      <image href={elevator} height={80} x={620} y={300} />
    </g>
  );
}

export default Piktograms;
