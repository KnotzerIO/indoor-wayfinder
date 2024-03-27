import { Dispatch, SetStateAction } from "react";
import { graph } from "../algorithms/dijkstra";
import { Navigation, NavigationContextType } from "./types";
import { ObjectItem } from "./types";
import { graphData } from "@/store/graphData";
import { toast } from "react-toastify";
export let routeLength = 0;

const findVertexByObjectId = (vertexId: string) =>
  graphData.vertices.find((v) => v.objectName === vertexId);

export function navigateToObject(
  selectedObjectId: string,
  navigation: NavigationContextType["navigation"],
  setNavigation: NavigationContextType["setNavigation"]
) {
  const target = findVertexByObjectId(selectedObjectId);
  if (!target) {
    console.error("Target not found");
    toast.error("Target not found");
    return;
  }

  const shortestPath = graph.calculateShortestPath(navigation.start, target.id);
  const pathString = shortestPath
    .slice(1)
    .map((vertexId) => {
      const vertex = graphData.vertices.find((v) => v.id === vertexId);
      return vertex ? `L${vertex.cx} ${vertex.cy}` : "";
    })
    .join(" ");

  const startVertex = graphData.vertices.find((v) => v.id === navigation.start);
  const navigationRoutePath = document.getElementById("navigation-route");
  if (navigationRoutePath && startVertex) {
    navigationRoutePath.setAttribute(
      "d",
      `M${startVertex.cx} ${startVertex.cy} ${pathString}`
    );
    console.log("navigationRoutePath", navigationRoutePath);
    navigationRoutePath.classList.remove("path-once", "path-active");
    navigationRoutePath.classList.add("path-once");
    navigationRoutePath.addEventListener(
      "animationend",
      () => {
        navigationRoutePath.classList.remove("path-once");
        navigationRoutePath.classList.add("path-active");
      },
      { once: true }
    );
  }

  setNavigation((prevNavigation) => ({
    ...prevNavigation,
    end: selectedObjectId,
  }));
}

export function resetEdges() {
  document.getElementById("navigation-route")?.setAttribute("d", "");
  graphData.edges.forEach((edge) => {
    const element = document.getElementById(edge.id);
    if (element) {
      element.classList.remove("path-active");
    }
  });
}

export function navigateWithDelay(
  objects: ObjectItem[],
  index: number,
  delay: number,
  navigation: Navigation,
  setNavigation: Dispatch<SetStateAction<Navigation>>
) {
  if (index < objects.length) {
    const obj = objects[index];
    navigateToObject(obj.name, navigation, setNavigation);

    setTimeout(() => {
      navigateWithDelay(objects, index + 1, delay, navigation, setNavigation);
    }, delay);
  }
}
