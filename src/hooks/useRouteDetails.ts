import { useContext, useEffect, useState } from "react";
import { MapDataContext, NavigationContext } from "@/pages/Map";
import {
  MapDataContextType,
  NavigationContextType,
  ObjectItem,
} from "@/utils/types";
import { resetEdges } from "@/utils/navigationHelper";

export function useRouteDetails() {
  const { objects } = useContext(MapDataContext) as MapDataContextType;
  const { navigation, setNavigation } = useContext(
    NavigationContext
  ) as NavigationContextType;
  const [object, setObject] = useState<ObjectItem | null>(null);
  const [routeDetails, setRouteDetails] = useState({
    routeLength: 0,
    walkingTime: 0,
    rightRouteLength: 0,
  });

  useEffect(() => {
    const fetchObject = async () => {
      try {
        if (!navigation.end) return;
        objects.forEach((obj) => {
          if (obj.name === navigation.end) {
            setObject(obj);
          }
        });
      } catch (error) {
        console.error(`Error fetching object by ID: ${navigation.end}`, error);
      }
    };

    const calculateRouteDetails = () => {
      const navigationRoutePath = document.getElementById(
        "navigation-route"
      ) as SVGPathElement | null;
      const routeLength = navigationRoutePath?.getTotalLength() || 0;
      const mapRatio = 20; // fictional ratio
      const walkingSpeed = 1.4; // m/s
      const rightRouteLength = Math.round((routeLength / mapRatio) * 10) / 10;
      const walkingTime = Math.round(rightRouteLength / walkingSpeed);

      setRouteDetails({ routeLength, walkingTime, rightRouteLength });
    };

    fetchObject();
    calculateRouteDetails();
  }, [navigation.end]);

  function handleLeave() {
    resetEdges();
    setNavigation((prevNavigation) => ({
      ...prevNavigation,
      end: "",
    }));
  }

  return { object, ...routeDetails, handleLeave };
}
